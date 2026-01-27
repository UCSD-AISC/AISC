import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import projects from "@/lib/projects.json";
import Card from "@/components/Card/Card";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Active</button>
      <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Recruiting</button>
      <button type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Archived</button>
      <div>
        {projects.map((card) => (
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
