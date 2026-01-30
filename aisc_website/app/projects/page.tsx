"use client"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import projects from "@/lib/projects.json";
import Card from "@/components/Card/Card";
import { useState } from "react";

export default function ProjectsPage() {
  const [status, setStatus] = useState<"Active" | "Recruiting" | "Completed" | null>(null);

  return (
    <>
      <Navbar />
      <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={() => setStatus("Active")}>Active</button>
      <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={() => setStatus("Recruiting")}>Recruiting</button>
      <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={() => setStatus("Completed")}>Archived</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.filter(card => card.status === status).
        map((card) => (
        <Card
          key={card.index} // Essential for list rendering
          title={card.title}
          description={card.description}
          contributors={card.contributors}
          link={card.link}
          stack={card.stack}
          status={card.status}
          difficulty={card.difficulty}
          img={card.img}
        />
      ))}
        </div>
      <Footer />
    </>
  );
}
