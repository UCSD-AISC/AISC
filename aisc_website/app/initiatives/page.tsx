import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import projects from "@/lib/projects.json";

export default function InitiativesPage() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex flex-col justify-between px-4 py-24 md:py-32 text-white">
        <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-8">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#418099] leading-snug max-w-4xl">
            Technology could benefit or hurt people, so the usage of tech is the
            responsibility of humanity as a whole, not just the discoverer. I am
            a person before I’m an AI technologist.
          </h1>
          <p className="text-right text-base md:text-lg text-white/70 italic">
            — Fei-Fei Li
          </p>
        </div>
        <p className="mt-16 text-base md:text-lg italic text-white/80 max-w-2xl text-right self-end">
          Take a look at our local efforts…
        </p>
      </section>
      <section className="space-y-32 mt-20">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-16 min-h-[500px] ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 w-full h-[300px] md:h-[400px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 w-full text-white space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4FC3F7]">
                {project.title}
              </h2>
              <p className="text-white/90 text-lg">{project.description}</p>
              <p className="text-white/70 text-base">
                Contributors: {project.contributors.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
              >
                VIEW GITHUB
              </a>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
