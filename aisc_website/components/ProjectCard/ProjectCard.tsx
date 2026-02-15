import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal/Modal";

type project = {
  title: string;
  cardDescription: string;
  modalDescription: string;
  contributors: string[];
  link: string;
  stack: string;
  status: string;
  difficulty: string;
  img: string;
};



const ProjectCard = (project: project) => {
  const renderDifficulty = (difficulty: string ) => {
      if (difficulty === "Easy") {
        return <p className="text-body mb-6 flex justify-center items-center rounded-full bg-green-600 px-2 w-fit text-white-900">{difficulty}</p>;
      } else if (difficulty === "Medium") {
        return <p className="text-body mb-6 flex justify-center items-center rounded-full bg-yellow-600 px-2 w-fit text-white-900">{difficulty}</p>;
      } else {
        return <p className="text-body mb-6 flex justify-center items-center rounded-full bg-red-600 px-2 w-fit text-white-900">{difficulty}</p>;
      }
    }; 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("Modal Opened");

  }

  const closeModal = () => {
    setIsModalOpen(false);
  } 
  return (
    <div className="flex justify-center">
      <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-2xl shadow-xs animate-fade-in-soft hover:-translate-y-3 transition-all duration-200" onClick={() => openModal()}> 
        <div className="relative w-full h-44 mb-6  bg-white shadow-sm rounded-2xl">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-contain"
          />
        </div>
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 flex justify-center items-center text-indigo-400 dark:text-indigo-300
">{project.title}</h5>
        <div className="flex flex-row justify-center items-center">
          {renderDifficulty(project.difficulty)}
        </div>
        <p className="text-body mb-6 flex justify-center items-center">{project.cardDescription}</p>
    </div>
    {isModalOpen && <Modal 
    closeModal={closeModal} 
    renderDifficulty={renderDifficulty}
    modalDescription={project.modalDescription} 
    contributors={project.contributors} 
    link={project.link} 
    stack={project.stack} 
    status={project.status} 
    difficulty={project.difficulty} 
    img={project.img} 
    title={project.title} 
    />}
    </div>
  );
}

export default ProjectCard;