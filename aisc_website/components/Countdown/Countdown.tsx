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
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer-wrapper">
            <div className="countdown-title center">
                <h2>Come See Us At</h2>
            </div>
            <div className="timer-text center">
                <h2>{event[0].title}</h2>
            </div>
            <div className="center">
                <div className="timer-inner center">
                <div className="timer-segment">
                    <span className="time">{days}</span>
                    <span className="label">Days</span>
                </div>
                <span className="divider">:</span>
                <div className="timer-segment">
                    <span className="time">{hours}</span>
                    <span className="label">Hours</span>
                </div>
                <span className="divider">:</span>
                <div className="timer-segment">
                    <span className="time">{minutes}</span>
                    <span className="label">Minutes</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Countdown;
