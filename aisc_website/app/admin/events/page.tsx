"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";
import { uploadEventImage } from "@/lib/admin-events";

import { useState } from "react";
import { count } from "console";

export default function AdminEventsLayout() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    image: null as File | null,
    countdowntime: "",
    status: "",
    isPublished: true,
  });
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value, type} = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;

      setFormData((prev) => ({...prev, [name]: checked}));
    } else {
      setFormData((prev) => ({...prev, [name]: value}));
    }

  }
  
  function handleImageChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0] || null;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let imageUrl = "";
    if (formData.image) {
      try {
        const uploadResult = await uploadEventImage(formData.image);
        imageUrl = uploadResult.url;
      } catch (err) {
        alert("Image upload failed");
        return;
      }
    }
    console.log("Image URL:", imageUrl);
    const eventPayload = {
      title: formData.title,
      date: formData.date,
      location: formData.location,
      status: formData.status,
      countdowntime: formData.countdowntime,
      img_path: imageUrl,
    };

    try {
      const res = await fetch("/api/admin/create-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventPayload),
      });
      if (!res.ok) throw new Error("Event creation failed");
      alert("Event created!");
      setFormData({
        title: "",
        date: "",
        location: "",
        image: null,
        countdowntime: "",
        status: "",
        isPublished: true,
      });
    } catch (err) {
      alert("Event creation failed");
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-6 text-gray-800 dark:text-white align-middle animate-fade-in-hard">
      <h1 className="text-5xl font-bold mb-10 font-[var(--font-archivo)]">
        Admin Event Manager
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-xl"
      >
        {/* TITLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
          <label className="block mb-2 font-semibold">
            Event Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ex: AI Workshop"
            className="w-full border border-gray-300 dark:border-neutral-700 bg-transparent rounded-xl p-3"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Status
          </label>

          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Ex: Upcoming"
            className="w-full border border-gray-300 dark:border-neutral-700 bg-transparent rounded-xl p-3"
            required
          />
        </div>
        </div>

        {/* DATE*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">
              Date
            </label>

            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-neutral-700 bg-transparent rounded-xl p-3"
              required
            />
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <label className="block mb-2 font-semibold">
            Location
          </label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Ex: UCSD Room 101"
            className="w-full border border-gray-300 dark:border-neutral-700 bg-transparent rounded-xl p-3"
            required
          />
        </div>

        {/* COUNTDOWN TIME */}
        <div>
          <label className="block mb-2 font-semibold">
            Countdown Time
          </label>

          <input
            type="text"
            name="countdowntime"
            value={formData.countdowntime}
            onChange={handleChange}
            placeholder="time"
            className="w-full border border-gray-300 dark:border-neutral-700 bg-transparent rounded-xl p-3"
            required
          />
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="block mb-2 font-semibold">
            Event Image
          </label>

          <label className="inline-block cursor-pointer bg-purple-500 hover:bg-gray-600 transition text-white px-5 py-3 rounded-xl font-semibold">
            Choose File
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            />
          </label>

          {formData.image && (
            <p className="mt-2 text-sm text-gray-500">
              Selected: {formData.image.name}
            </p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            Anyone can upload an image. Please do not upload sensitive content.
          </p>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-gray-600 transition text-white py-4 rounded-xl font-bold text-lg"
        >
          Create Event
        </button>
      </form>
    </div>
      <Footer />
    </>
  );
}
