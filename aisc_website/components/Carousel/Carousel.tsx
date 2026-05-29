"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import events from "@/lib/events.json";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const event = events[currentIndex];
  const maxEvents = Math.min(events.length, 10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % maxEvents);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [maxEvents, currentIndex]);

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + maxEvents) % maxEvents);
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % maxEvents);

  return (
    <section className="relative text-gray-800 dark:text-white w-full px-16 md:px-24 py-20">
      {/* Left arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 transition-colors"
        aria-label="Previous event"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <h2 className="text-lg font-semibold mb-8 tracking-widest">
        {event.status.toUpperCase()}
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side image card */}
        <div className={`max-w-md w-full bg-black rounded-lg overflow-hidden shadow-lg ${event.image === null && "hidden"}`}>
          <div className="relative w-full h-[480px]">
            <Image
              src={`/event_images/${event.image}`}
              alt={`${event.title} Flyer`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="flex flex-col items-start">
          <h3 className="text-5xl md:text-6xl font-black mb-6">
            {event.title.toUpperCase()}
          </h3>
          <p className="text-lg mb-2">{event.date}</p>
          <p className="text-lg">{event.location}</p>
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 transition-colors"
        aria-label="Next event"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
};

export default Carousel;
