"use client"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import boardMembers from "@/lib/board-members.json";
import AboutCard from "@/components/AboutCard/AboutCard";
import { useState } from "react";

const teams = [
  "Leadership",
  "External",
  "Education",
  "Events",
  "Finance",
  "Projects",
  "Technology"
] as const;

export default function MembersPage() {
  const [status, setStatus] = useState<typeof teams[number] | null>(null);
  const filteredTeams = status ? [status] : teams;

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64 gap-28 mt-12">
        
        
        

        <section className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-start gap-8 animate-fade-in-hard">

          <div className="text-left">
            <h1 className="text-6xl sm:text-7xl font-semibold text-purple-500 dark:text-purple-400 leading-tight max-w-2xl">
              Meet the <br />
              <span className="whitespace-nowrap">Board Members</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
              Get to know the team behind AISC at UCSD! Our board members are dedicated
              to fostering AI literacy and innovation within the community.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-hard">
            <Image
              src="/icons/aisc.png"
              alt="AISC"
              width={180}
              height={100}
              className="w-90 h-auto filter-[invert(var(--invert-perc))] dark:filter-none"
              priority
            />
          </div>
        </section>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-4 scale-105">
          {teams.map((team) => {
            const isActive = status === team;

            return (
              <button
                key={team}
                type="button"
                onClick={() => setStatus((prev) => (prev === team ? null : team))}
                className={[
                  "text-body bg-neutral-secondary-medium box-border border border-default-medium",
                  "hover:bg-neutral-tertiary-medium hover:text-heading",
                  "focus:ring-4 focus:ring-purple-600/60 focus:outline-none",
                  "shadow-xs font-medium rounded-2xl text-sm px-4 py-2.5",
                  "hover:scale-[1.1] transition cursor-pointer active:scale-95",
                isActive ? "bg-purple-600/90 shadow-[0_0_20px_rgba(168,85,247,0.25)]" : "",
                ].join(" ")}
                  >
                {team}
              </button>
            );
          })}
        </div>

        {/* TEAM Section */}
        <section className="text-gray-800 dark:text-white text-center w-full">

          <div>
            {filteredTeams.map((team, teamIndex) => (
              <div className="mb-15" key={teamIndex}>
                <h3 className="text-6xl sm:text-6xl mb-8">{team}</h3>
                <div
                key={status ?? "all"}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 min-[120rem]:grid-cols-4 min-[145rem]:grid-cols-5 gap-x-60 gap-y-20 justify-items-center">
                  {boardMembers.map((member, idx) => {
                    if (member.teams.includes(team)) {
                      return (
                        <div key={idx}>
                          <AboutCard
                            name={member.name}
                            photo={member.photo}
                            roles={member.roles}
                            currentTeam={team}
                          />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
