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

export default function AboutPage() {
  const [status, setStatus] = useState<typeof teams[number] | null>(null);
  const filteredTeams = status ? [status] : teams;

  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64 gap-28 mt-12">
        {/* QUOTE Section */}
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-purple-500 dark:text-purple-400 leading-tight max-w-5xl mx-auto">
            “AI won’t take away your job – but someone who knows AI might.”
          </h1>
          <p className="mt-4 text-lg sm:text-xl italic text-purple-600 dark:text-purple-300 text-right max-w-5xl mx-auto sm:pr-4">
            – Beena Ammanath, Founder of HFAI
          </p>
        </section>

        {/* AI IS BECOMING PIVOTAL Section */}
        <section className="w-full flex flex-col gap-12 sm:gap-16 lg:gap-0">
          <div className="lg:max-w-6xl lg:mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-pink-400 leading-snug text-left lg:pl-4">
              AI IS BECOMING
              <br className="hidden sm:block" />
              PIVOTAL IN EVERY INDUSTRY —<br className="hidden sm:block" />
              NOT JUST TECH.
            </h2>
          </div>
          <div className="lg:max-w-6xl lg:mx-auto lg:mt-8">
            <p className="text-lg sm:text-xl text-gray-800 dark:text-white leading-relaxed text-right lg:pr-4">
              It’s critical that people have a baseline understanding of the{" "}
              <i>power of AI technologies</i> and{" "}
              <i>how to properly wield that power</i>.
            </p>
          </div>
        </section>

        {/* AISC Overview Section */}
        <section className="text-center max-w-5xl">
          <h2 className="text-4xl font-bold text-blue-400 dark:text-cyan-300 mb-4">
            The AI Student Collective at UC San Diego
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 dark:text-white leading-relaxed">
            is a student organization dedicated to providing accessible AI
            literacy through pre-professional programs and events. Each year is
            marked by high-impact events like symposiums and product
            competitions, as well as skill-building opportunities like resume
            workshops, code-alongs, and corporate mixers.
          </p>
        </section>

        {/* GAIN Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-right">
            <h3 className="text-6xl font-extrabold text-blue-400 dark:text-cyan-300 opacity-70">
              GAIN
            </h3>
            <p className="text-gray-800 dark:text-white text-3xl mt-4 leading-snug">
              Students will gain AI literacy through...
            </p>
            <ul className="mt-6 space-y-4 text-gray-800 dark:text-white text-lg">
              <li className="flex items-start gap-3">
                <span className="drop-shadow-[0_0_4px] dark:drop-shadow-none">⚙️</span>
                <span>
                  Contributing to technical projects and research teams using
                  AI.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="drop-shadow-[0_0_4px] dark:drop-shadow-none">🌐</span>
                <span>
                  Networking with industry leaders at workshops, symposia, and
                  collaborative programs.
                </span>
              </li>
            </ul>
          </div>
          <Image
            src="/afterlight-3-1.png"
            alt="GAIN visual"
            width={600}
            height={400}
            className="w-full max-w-md object-cover rounded-2xl"
          />
        </section>

        {/* IMPACT Section */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className="max-w-xl text-left">
            <h3 className="text-6xl font-extrabold text-blue-400 dark:text-cyan-300 opacity-70">
              IMPACT
            </h3>
            <p className="text-gray-800 dark:text-white text-3xl mt-4 leading-snug">
              Students will impact AI literacy through...
            </p>
            <ul className="mt-6 space-y-4 text-gray-800 dark:text-white text-lg">
              <li className="flex items-start gap-3">
                <span className="drop-shadow-[0_0_4px] dark:drop-shadow-none">👩‍🏫</span>
                <span>
                  Teaching interactive courses at local grade schools to inspire
                  early interest in AI.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="drop-shadow-[0_0_4px] dark:drop-shadow-none">📝</span>
                <span>
                  Creating engaging articles and projects for learners of all
                  skill levels.
                </span>
              </li>
            </ul>
          </div>
          <Image
            src="/dsf3240-1.png"
            alt="IMPACT visual"
            width={600}
            height={400}
            className="w-full max-w-md object-cover rounded-2xl"
          />
        </section>

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
                  "hover:scale-[1.1] transition cursor-pointer",
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
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-60 gap-y-20 justify-items-center">
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
