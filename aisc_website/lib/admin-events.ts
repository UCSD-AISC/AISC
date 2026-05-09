import { supabase } from "./supabase";

export type EventData = {
  id?: string;
  title: string;
  date: string;
  location: string;
  status: string;
  countdowntime: string;
  imageUrl?: string;
};

export async function createEvent(event: EventData) {
  const { data, error } = await supabase
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
    console.error(error);
    throw error;
  }

  return data;
}

export async function getEvents() {
  const { data, error } = await supabase
    .from("Events")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

export async function uploadEventImage(file: File) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = fileName;

  const { error } = await supabase.storage
    .from("event_images")
    .upload(filePath, file);

  if (error) {
    console.error("Supabase upload error:", error);
    throw error;
  }

  const { data } = supabase.storage
    .from("event_images")
    .getPublicUrl(filePath);

  return {
    url: data.publicUrl,
  };
}