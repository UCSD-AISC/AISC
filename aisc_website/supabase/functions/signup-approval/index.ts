import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Initialize Supabase Client with Service Role Key (needed to update user metadata)
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const approvalSecret = Deno.env.get("APPROVAL_SECRET") || "SUPER_SECRET_KEY_CHANGE_ME";
const adminEmail = Deno.env.get("ADMIN_EMAIL") || "admin@example.com";

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  try {
    const url = new URL(req.url);
    const action = url.searchParams.get("action");
    const userId = url.searchParams.get("userId");
    const secret = url.searchParams.get("secret");

    // ==========================================
    // CASE 1: Admin Clicks Approve Link (GET)
    // ==========================================
    if (action === "approve" && userId) {
      // Security Check: Verify secret key
      if (secret !== approvalSecret) {
        return new Response("Unauthorized: Invalid secret key", { status: 401 });
      }

      // Update the user's raw_app_meta_data to set approved = true
      const { data, error } = await supabaseAdmin.auth.admin.updateUserById(
        userId,
        { app_metadata: { approved: true } }
      );

      if (error) {
        console.error("Failed to approve user in auth:", error);
        return new Response(`Error approving user: ${error.message}`, { status: 500 });
      }

      // Also update your public.profiles table to set accepted/approved = true
      const { error: profileError } = await supabaseAdmin
        .from("profiles")
        .update({ accepted: true, approved: true })
        .eq("id", userId);

      if (profileError) {
        console.warn(
          "Warning: Could not update public.profiles table. This is normal if the table or columns are named differently:",
          profileError.message
        );
      }

      // Return a beautiful HTML response to the admin
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>User Approved</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #0d1117; color: #c9d1d9; margin: 0; }
            .card { background-color: #161b22; border: 1px border #30363d; border-radius: 12px; padding: 40px; text-align: center; box-shadow: 0 8px 24px rgba(0,0,0,0.5); max-width: 400px; }
            h1 { color: #58a6ff; margin-bottom: 16px; }
            p { color: #8b949e; line-height: 1.5; }
            .success-badge { display: inline-block; background-color: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.2); padding: 8px 16px; border-radius: 9999px; font-weight: bold; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="success-badge">APPROVED</div>
            <h1>User Approved!</h1>
            <p>The user <strong>${data.user.email}</strong> is now approved and can log in to the AISC website.</p>
          </div>
        </body>
        </html>
      `;

      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // ==========================================
    // CASE 2: Webhook Triggered on Signup (POST)
    // ==========================================
    if (req.method === "POST") {
      const body = await req.json();
      
      // Extract user info from webhook payload
      const user = body.record;
      if (!user) {
        return new Response(JSON.stringify({ error: "No user record found" }), { status: 400 });
      }

      console.log("New signup detected:", user.email);

      // 1. By default, set approved = false in app_metadata
      const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
        user.id,
        { app_metadata: { approved: false } }
      );

      if (updateError) {
        console.error("Failed to initialize user metadata:", updateError);
      }

      // 2. Generate secure approval link
      const functionUrl = Deno.env.get("SUPABASE_FUNCTION_URL") || url.origin;
      const approveLink = `${functionUrl}/signup-approval?action=approve&userId=${user.id}&secret=${approvalSecret}`;

      // 3. Send Notification to Admin
      // Note: You can replace this with Resend, SendGrid, Twilio, Slack Webhook, etc.
      // For this example, we log it and send a standard email using your preferred mailing system or Slack.
      console.log("----------------------------------------");
      console.log(`APPROVAL LINK FOR ${user.email}:`);
      console.log(approveLink);
      console.log("----------------------------------------");

      // OPTIONAL: Send a Slack/Discord notification or standard email.
      // Example using a simple fetch to a Slack Webhook:
      const slackWebhook = Deno.env.get("SLACK_WEBHOOK_URL");
      if (slackWebhook) {
        await fetch(slackWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `🔔 *New AISC Signup Waiting Approval*\n*Email:* ${user.email}\n*User ID:* ${user.id}\n\n👉 <${approveLink}|Click here to Approve User>`,
          }),
        });
      }

      return new Response(
        JSON.stringify({ success: true, message: "Signup processed and awaiting approval" }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response("Method not allowed", { status: 405 });
  } catch (err: any) {
    console.error("Server Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
