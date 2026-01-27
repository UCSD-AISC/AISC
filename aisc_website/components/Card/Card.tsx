import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type project = {
  title: string;
  description: string;
  contributors: string[];
  link: string;
  stack: string;
  status: string;
  difficulty: string;
  img: string;
};



const Card = (project: project) => {
    
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{project.title}</h5>
        <p className="text-body mb-6">Description: {project.description}</p>
        <p className="text-body mb-6">Contributors: {project.contributors.join(", ")}</p>
        <p className="text-body mb-6">Link: {project.link}</p>
        <p className="text-body mb-6">Stack: {project.stack}</p>
        <p className="text-body mb-6">Status: {project.status}</p>
        <p className="text-body mb-6">Difficulty: {project.difficulty}</p>
        <p className="text-body mb-6">Img: <Image src={project.img} alt={project.title} width={500} height={300} /></p>
        <a href="#" className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
          Read more
        <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
      </a>
    </div>
  );
}

export default Card;