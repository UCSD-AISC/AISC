"use client"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import projects from "@/lib/projects.json";
import Card from "@/components/Card/Card";
import education from "@/public/education.png";
import { useState } from "react";

export default function ProjectsPage() {
  const [status, setStatus] = useState<"Active" | "Recruiting" | "Completed" | null>(null);

  return (
    <>
      <Navbar />
      
      <section 
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-[200px]  h-[550px] bg-gradient-to-r from-[#0f172a] via-[#3b0f2d] to-[#0f2a2f]"
        style={{
          backgroundImage: `url(${education.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
         <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0f172a]" />


        <h1 className="absolute top-[180px] left-1/2 -translate-x-1/2 text-center px-6 text-4xl sm:text-5xl md:text-7xl font-semibold text-purple-400 animate-fade-in-hard">
          Projects
        </h1>
       <h1 className="absolute top-[350px] left-1/2 -translate-x-1/2 text-center px-6 text-4xl sm:text-5xl md:text-4xl  text-gray-100 drop-shadow animate-fade-in-hard">
          Take A Look At What AISC Is Doing
        </h1>
      </section>
      
      
      <div className = "flex justify-center gap-8 scale-105 ">
        <button type="button" className={`text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-purple-600/60 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none leading-5 hover:scale-[1.1] transition ${status === "Active" ? "bg-purple-600/90 shadow-[0_0_20px_rgba(168,85,247,0.25)]" : ""}`} onClick={() => setStatus("Active")}>Active</button>
        <button type="button" className={`text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-purple-600/60 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none leading-5 hover:scale-[1.1] transition ${status === "Recruiting" ? "bg-purple-600/90 shadow-[0_0_20px_rgba(168,85,247,0.25)]" : ""}`} onClick={() => setStatus("Recruiting")}>Recruiting</button>
        <button type="button" className={`text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-purple-600/60 shadow-xs font-medium leading-5 rounded-2xl text-sm px-4 py-2.5 focus:outline-none leading-5 hover:scale-[1.1] transition ${status === "Completed" ? "bg-purple-600/90 shadow-[0_0_20px_rgba(168,85,247,0.25)]" : ""}`} onClick={() => setStatus("Completed")}>Archived</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.filter(card => card.status === status || status === null
        ).map((card) => ( 
        <Card
          key={card.index}
          title={card.title}
          cardDescription={card.cardDescription}
          contributors={card.contributors}
          link={card.link}
          stack={card.stack}
          status={card.status}
          difficulty={card.difficulty}
          img={card.img}
          modalDescription={card.modalDescription}
        />
      ))}
        </div>
      <Footer />
    </>
  );
}
