import { supabase } from "./supabase";

export type EventData = {
  id?: string;
  title: string;
  date: string;
  time: string;
  location: string;
  countdowntime?: string;
  status?: string;
  imageUrl?: string;
  isPublished: boolean;
};

export async function createEvent(event: EventData) {
  const { data, error } = await supabase
    .from("events")
    .insert([
      {
        title: event.title,
        date: event.date,
        time: event.time,
        location: event.location,
        countdown_time: event.countdowntime,
        status: event.status,
        image_url: event.imageUrl,
        is_published: event.isPublished,
      },
    ]);

  if (error) throw error;

  return data;
}

export async function uploadEventImage(file: File) {
  const fileExt = file.name.split(".").pop();

  const fileName = `${Date.now()}.${fileExt}`;

  const filePath = `events/${fileName}`;

  const { error } = await supabase.storage
    .from("event-images")
    .upload(filePath, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("event-images")
    .getPublicUrl(filePath);

  return {
    url: data.publicUrl,
  };
}