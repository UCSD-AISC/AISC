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
  }, [maxEvents]);

  return (
    <section className="text-gray-800 dark:text-white w-full px-6 md:px-20 py-20">
      {/* Dots */}
      <div className="flex justify-center mb-8 gap-2">
        {events.slice(0, maxEvents).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full border border-black dark:border-white ${
              index === currentIndex ? "bg-pink-400" : "bg-transparent"
            }`}
          />
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-8 tracking-widest">
        {event.status.toUpperCase()}
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side image card */}
        <div className="max-w-md w-full bg-black rounded-lg overflow-hidden shadow-lg">
          <Image
            src={event.image}
            alt={`${event.title} Flyer`}
            width={600}
            height={400}
            className="w-full object-cover"
          />
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
    </section>
  );
};

export default Carousel;
