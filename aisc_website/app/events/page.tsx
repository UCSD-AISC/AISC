"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import events from "@/lib/events.json";
import { useState, useEffect, Fragment } from "react";

export default function EventsPage() {
  const [openCategory, setOpenCategory] = useState("");
  const year = new Date().getFullYear();
  function dateParser(date: string) {
    // Example: "date": "Thursday, January 8 | 11:00 - 2:30PM PST"
    const split = date.split(" | ");
    const times = split[1].split(" ");
    const startTime = new Date(split[0]+" "+year+" "+times[0]+" "+times[2].slice(-2)+" PST");
    const endTime = new Date(split[0]+" "+year+" "+times[2].slice(0,-2)+" "+times[2].slice(-2)+" PST");
    // Edge case where startTime is supposed to be AM (Eg: "..| 11:00 - 2:30PM PST")
    if (startTime > endTime) {
      startTime.setHours(startTime.getHours() - 12);
    }
    return [startTime, endTime]
  }

  function toICSDateTime(date: Date) {
    return date
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z");
  }

  function icsFileContent(
    event: { title: string; location: string; date: string },
    startTime: Date,
    endTime: Date
  ) {

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//AISC//AISC Events//EN',
      'BEGIN:VEVENT',
      'UID:' + encodeURIComponent(`${event.title}-${event.date}`),
      'DTSTAMP:' + toICSDateTime(new Date()),
      'DTSTART:' + toICSDateTime(startTime),
      'DTEND:' + toICSDateTime(endTime),
      'SUMMARY:' + event.title,
      'LOCATION:' + event.location,
      'END:VEVENT',
      'END:VCALENDAR'
    ];

    return icsContent.join("\r\n");
  }

  const now = new Date();
  const processedEvents = events.map((event) => {
      const [startTime, endTime] = dateParser(event.date);
      let status: "Past" | "Upcoming" | "Happening";
      let icsDownloadUrl = "";

      if (endTime < now) {
        status = "Past";
      } else if (now < startTime) {
        status = "Upcoming";
        const icsContent = icsFileContent(event, startTime, endTime);
        icsDownloadUrl = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`;
      } else {
        status = "Happening";
      }

      return {
        ...event,
        status,
        icsDownloadUrl,
        startTime,
      };
  }).sort((a, b) => a.startTime.getTime() - b.startTime.getTime());;

  useEffect(() => {
    const priorities = ["Happening", "Upcoming", "Past"];
    for (const category of priorities) {
      if (processedEvents.some((event) => event.status === category)) {
        setOpenCategory(category);
        break;
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen overflow-hidden flex items-center px-6 md:px-14 py-16 md:py-20 text-gray-800 dark:text-white">
        <div className="relative w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h1 className="font-semibold text-3xl md:text-5xl leading-snug max-w-4xl text-center md:text-left font-[var(--font-bai-jamjuree)]">
              Technology could benefit or hurt people, so the usage of tech is the
              responsibility of humanity as a whole, not just the discoverer. I am a
              person before I’m an AI technologist.
            </h1>

            <p className="text-center md:text-right text-base md:text-lg text-black dark:text-white/70 italic whitespace-nowrap font-[var(--font-bai-jamjuree)]">
              — Fei-Fei Li
            </p>
          </div>

          <p className="mt-10 md:mt-16 text-base md:text-lg italic text-black dark:text-white/80 max-w-2xl text-center md:text-right md:ml-auto font-[var(--font-bai-jamjuree)]">
            Take a look at our local efforts…
          </p>
        </div>
      </section>
      <section className="space-y-24 mt-12">
        {["Happening", "Upcoming", "Past"].map((category) => {
          const filteredEvents = processedEvents.filter(
            (event) => event.status === category
          );
          const orderedEvents = (category === "Past" ? filteredEvents.reverse() : filteredEvents).slice(0, 4); // Show recent events first in past events
          if (orderedEvents.length === 0) return null;

          return (
            <Fragment key={category}>
              <div>
                <h2
                  onClick={() => setOpenCategory(category)}
                  className={`cursor-pointer text-5xl md:text-6xl font-bold font-[var(--font-bai-jamjuree)] ${
                    openCategory === category
                      ? "text-[#00add4] dark:text-[#00BCD4]"
                      : "text-black/25 dark:text-white/40"
                  } mb-8 transition-colors duration-300 hover:text-gray-800 dark:hover:text-white`}
                >
                  {category} Events
                </h2>
                <div
                  className={`transition-all duration-500 overflow-hidden ${openCategory !== category && "max-h-0 opacity-0"}`}
                >
                  {orderedEvents.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <div
                        key={event.title}
                        className={`animate-slide-in flex ${
                          !isEven ? "md:flex-row-reverse" : ""
                        } items-center justify-between gap-10 md:gap-20`}
                      >
                        <div
                          className={`flex-1 text-gray-800 dark:text-white ${
                            event.image === null ? "max-w-4xl mt-15 mb-15" : "max-w-xl"
                          } ${
                            !isEven ? "md:text-right md:ml-16" : "md:mr-16"
                          }`}
                        >
                          <p className="text-base md:text-lg uppercase tracking-widest dark:text-white/60 mb-2 font-[var(--font-bai-jamjuree)]">
                            {event.status}
                          </p>
                          <h3 className="text-4xl md:text-5xl font-bold dark:text-[#ECF0F1] mb-4 font-[var(--font-archivo)]">
                            {event.title}
                          </h3>
                          <p className="mb-2 text-lg md:text-xl dark:text-white/80 font-[var(--font-bai-jamjuree)]">
                            {event.date}
                          </p>
                          <p className="mb-4 text-lg md:text-xl dark:text-white/70 font-[var(--font-bai-jamjuree)]">
                            {event.location}
                          </p>
                          {event.icsDownloadUrl && (
                            <a
                              href={event.icsDownloadUrl}
                              download={`${event.title.replace(/\s+/g, "-").toLowerCase()}.ics`}
                              className="inline-block text-sm md:text-base font-semibold text-[#00add4] dark:text-[#00BCD4] hover:underline font-[var(--font-bai-jamjuree)]"
                            >
                              Add to Calendar (.ics)
                            </a>
                          )}
                        </div>
                        <div className={`flex-1 w-full max-w-md group overflow-hidden ${event.image === null && "hidden"}`}>
                          <Image
                            src={`/event_images/${event.image}`}
                            alt={event.title}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="my-12 h-1 w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent" />
            </Fragment>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
