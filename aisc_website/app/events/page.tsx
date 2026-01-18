"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import events from "@/lib/events.json";
import { useState, useEffect, Fragment } from "react";

export default function EventsPage() {
  const [openCategory, setOpenCategory] = useState("");
  useEffect(() => {
    const priorities = ["Happening", "Upcoming", "Past"];
    for (const category of priorities) {
      if (events.some((event) => event.status === category)) {
        setOpenCategory(category);
        break;
      }
    }
  }, []);
  
  // Current form of logging in dates in events.json has some minor problems 
  // 1) Does not specify AM or PM for start time
  // 2) If there is a multi-day event, then we cannot log that as we assume that start day and end day are the same
  // 3) When using the Date() JavaScript object, it sometimes adjusts for Daylight Savings. So, for events in mid-march to early-november, we would need to specify PDT
  // (or we won't have to worry about this if we just compare the time ourselves after parsing the Date() object with the toLocaleString() function)
  // 4) Doesn't specify year (Rare edge case where someone logs in an event for january/february next year in december of current year)

  const now = new Date();
  const year = now.getFullYear();
  // const testDate = new Date("Saturday, January 17 2026 5:07 PM PST");
  // If we could write dates in a format similar to this for both start and end time, then this function is a lot easier
  function dateParser(date: string) {
    // Example: "date": "Thursday, January 8 | 11:00 - 2:30PM PST"
    const split = date.split(" | ");
    const times = split[1].split(" ");
    const startTime = new Date(split[0]+" "+year+" "+times[0]+" "+times[2].slice(-2)+" PST");
    const endTime = new Date(split[0]+" "+year+" "+times[2].slice(0,-2)+" "+times[2].slice(-2)+" PST");
    return [startTime, endTime]
  }

  for (const event of events) {
    // Example: "date": "Thursday, January 8 | 11:00 - 2:30PM PST"

    const [startTime, endTime] = dateParser(event.date)

    if (endTime < now) {
      event.status = 'Past';
    } else if (now < startTime) {
      event.status = 'Upcoming';
    } else {
      event.status = 'Happening';
    }
    
    // console.log(event)
  };
  events.sort((a, b) => dateParser(a.date)[0] - dateParser(b.date)[0]);

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex flex-col-reverse md:flex-row justify-between px-4 py-16 md:py-20 text-white">
        <div className="flex flex-col gap-6 md:flex-row w-full justify-between items-start md:items-end">
          <h1 className="text-white font-semibold text-3xl md:text-5xl font-[var(--font-bai-jamjuree)] leading-snug max-w-4xl text-center md:text-left">
            Technology could benefit or hurt people, so the usage of tech is the
            responsibility of humanity as a whole, not just the discoverer. I am
            a person before I’m an AI technologist.
          </h1>
          <p className="text-center md:text-right text-base md:text-lg text-white/70 italic font-[var(--font-bai-jamjuree)]">
            — Fei-Fei Li
          </p>
        </div>
        <p className="mt-6 md:mt-10 text-base md:text-lg italic text-white/80 max-w-2xl text-center md:text-right self-center md:self-end font-[var(--font-bai-jamjuree)]">
          Take a look at our local efforts…
        </p>
      </section>
      <section className="space-y-24 mt-12">
        {["Happening", "Upcoming", "Past"].map((category) => {
          const filteredEvents = events.filter(
            (event) => (event.status === category)
          );
          if (filteredEvents.length === 0) return null;

          return (
            // Bug: Does not scroll when there are too many events and cuts it off; Especially noticeable in different view sizes
            <Fragment key={category}>
              <div>
                <h2
                  onClick={() => setOpenCategory(category)}
                  className={`cursor-pointer text-5xl md:text-6xl font-bold font-[var(--font-bai-jamjuree)] ${
                    openCategory === category
                      ? "text-[#00BCD4]"
                      : "text-white/40"
                  } mb-8 transition-colors duration-300 hover:text-white`}
                >
                  {category} Events
                </h2>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openCategory === category
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {filteredEvents.map((event, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <div
                        key={event.title}
                        className={`animate-slide-in flex flex-col md:flex-row ${
                          !isEven ? "md:flex-row-reverse" : ""
                        } items-center justify-between gap-10 md:gap-20`}
                      >
                        <div
                          className={`flex-1 text-white max-w-xl ${
                            !isEven ? "md:text-right md:ml-16" : "md:mr-16"
                          }`}
                        >
                          <p className="text-base md:text-lg uppercase tracking-widest text-white/60 mb-2 font-[var(--font-bai-jamjuree)]">
                            {event.status}
                          </p>
                          <h3 className="text-4xl md:text-5xl font-bold text-[#ECF0F1] mb-4 font-[var(--font-archivo)]">
                            {event.title}
                          </h3>
                          <p className="mb-2 text-lg md:text-xl text-white/80 font-[var(--font-bai-jamjuree)]">
                            {event.date}
                          </p>
                          <p className="mb-4 text-lg md:text-xl text-white/70 font-[var(--font-bai-jamjuree)]">
                            {event.location}
                          </p>
                        </div>
                        <div className="flex-1 w-full max-w-md group overflow-hidden">
                          <Image
                            src={event.image}
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
              <div className="my-12 h-1 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Fragment>
          );
        })}
      </section>
      <Footer />
    </>
  );
}
