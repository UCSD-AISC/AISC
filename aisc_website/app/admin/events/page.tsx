"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";
import Footer from "@/components/Footer/Footer";

import { useState } from "react";
import { count } from "console";

export default function AdminEventsLayout() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Submitted Event:", formData);

    // Later:
    // createEvent(formData)
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

        {/* DATE + TIME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-semibold">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-neutral-700 bg-transparent rounded-xl p-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Time
            </label>

            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="Ex: 6:00 PM"
              className="w-full border border-gray-300 dark:border-neutral-700 bg-transparent rounded-xl p-3"
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

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />

          {formData.image && (
            <p className="mt-2 text-sm text-gray-500">
              Selected: {formData.image.name}
            </p>
          )}
        </div>

        {/* PUBLISH */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
          />

          <label>Publish Event</label>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-4 rounded-xl font-bold text-lg"
        >
          Create Event
        </button>
      </form>
    </div>
      <Footer />
    </>
  );
}
