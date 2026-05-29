import React from "react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Check if they are accepted in the Profiles table by matching their email
  const { data: profile, error } = await supabase
    .from("Profiles")
    .select("status")
    .eq("email", user.email)
    .single();

  // If there's an error, no profile, or their status is false, log them out and block them
  if (error || !profile || !profile.status) {
    // Run signout on the server client to clear their cookies
    await supabase.auth.signOut();
    redirect("/login?error=pending_approval");
  }

  return <div className="px-4 md:px-16 py-12 space-y-12">{children}</div>;
}
