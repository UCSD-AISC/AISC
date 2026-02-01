"use client";

import events from "@/lib/events.json";
import { useEffect, useState } from "react";

const Countdown = () => {
    const event = events;
    const date = new Date(event[0].countdowntime);

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    

    useEffect(() =>{
        const interval = setInterval(() =>{


            const now = new Date()
            const difference = date.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);
            

        });

        return () => clearInterval(interval);
    }, []);


    return (
    // countdown container
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-8 mt-20 mb-24">
        <span className="text-blue-400 dark:text-blue-300 text-2xl sm:text-3xl font-semibold text-center tracking-widest px-2">
            Come See Us At
        </span> 
        <span className="text-blue-400 dark:text-blue-300 text-2xl sm:text-6xl font-black text-center tracking-widest px-2">
          {event[0].title}
        </span>
        <div className="flex justify-center gap-3 sm:gap-8">
            {/* "hours" card */}
          <div className="flex flex-col gap-5 relative">
            {/* hours background */}
            <div className="h-16 w-16 sm:w-40 sm:h-40 lg:w-50 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
                {/* left button on card*/}
              <div className="relative h-2.5 w-2.5 sm:h-4 sm:w-4 !-left-[9px] rounded-full bg-[#191A24]"></div>
              {/* text inside card */}
              <span className="lg:text-8xl sm:text-6xl text-3xl font-semibold text-blue-200">
                {days}
              </span>
              {/*  right button on card*/}
              <div className="relative h-2.5 w-2.5 sm:h-4 sm:w-4 -right-[9px] rounded-full bg-[#191A24]"></div>
            </div>
            {/*  text under card, changed to day is days=1 */}
            <span className="text-blue-400 dark:text-blue-300 text-xs sm:text-4xl text-center capitalize">
              {days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-50 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-4 sm:w-4 !-left-[9px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-8xl sm:text-6xl text-4xl font-semibold text-blue-200">
                {hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-4 sm:w-4 -right-[9px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-blue-400 dark:text-blue-300 text-xs sm:text-4xl text-center font-medium">
              {hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-50 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-4 sm:w-4 !-left-[9px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-8xl sm:text-6xl text-3xl font-semibold text-blue-200">
                {minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-4 sm:w-4 -right-[9px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-blue-400 dark:text-blue-300 text-xs sm:text-4xl text-center capitalize">
              {minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
        </div>
      </div>
    );
};

export default Countdown;
