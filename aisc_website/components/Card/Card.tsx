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
      <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs animate-fade-in">
        <div className="relative w-full h-44 mb-6 rounded-base overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{project.title}</h5>
        <p className="text-body mb-6">Description: {project.description}</p>
        <p className="text-body mb-6">Contributors: {project.contributors.join(", ")}</p>
        <p className="text-body mb-6">Link: <a href={project.link} className="text-brand hover:underline">{project.link}</a></p>
        <p className="text-body mb-6">Stack: {project.stack}</p>
        <p className="text-body mb-6">Status: {project.status}</p>
        <p className="text-body mb-6">Difficulty: {project.difficulty}</p>
    </div>
  );
}

export default Card;