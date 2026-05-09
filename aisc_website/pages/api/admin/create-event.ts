import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const event = req.body;

  try {
    const { data, error } = await supabaseAdmin
      .from("Events")
      .insert([
        {
          title: event.title,
          date: event.date,
          location: event.location,
          status: event.status,
          countdowntime: event.countdowntime,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (err: any) {
    console.error("API error:", err);
    return res.status(500).json({ error: err.message || "Unknown error" });
  }
}
