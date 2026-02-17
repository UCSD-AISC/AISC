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
  img: string;
};



const ProjectCard = (project: project) => {
  const renderStatus = (status: string) => {
    if (status === "Active") {
      return (
        <p className="text-body mb-6 flex justify-center items-center rounded-full bg-green-600 px-2 w-fit text-white">
          {status}
        </p>
      );
    } else if (status === "Recruiting") {
      return (
        <p className="text-body mb-6 flex justify-center items-center rounded-full bg-yellow-600 px-2 w-fit text-white">
          {status}
        </p>
      );
    } else {
      return (
        <p className="text-body mb-6 flex justify-center items-center rounded-full bg-red-600 px-2 w-fit text-white">
          {status}
        </p>
      );
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
    <div className="relative max-w-sm w-full h-full">

      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl blur-sm bg-black  border border-default-z-10 animate-fade-in-soft transition-all duration-200" />

      <div
        className="relative w-full bg-cyan-600 p-6 border border-default rounded-2xl shadow-xs animate-fade-in-soft transition-all duration-200 hover:-translate-y-3 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)] hover:-translate-x-4 h-full flex flex-col cursor-pointer"
        onClick={openModal}
      >
        <div className="relative w-full h-44 mb-6 bg-white shadow-sm rounded-2xl">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-contain"
          />
        </div>
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 flex justify-center items-center text-white">
          {project.title}
        </h5>
        <div className="flex flex-row justify-center items-center">
          {renderStatus(project.status)}
        </div>

        <p className="text-body mb-6 flex justify-center items-center flex-grow">
          {project.cardDescription}
        </p>
      </div>

      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          renderStatus={renderStatus}
          modalDescription={project.modalDescription}
          contributors={project.contributors}
          link={project.link}
          stack={project.stack}
          status={project.status}
          img={project.img}
          title={project.title}
        />
      )}
    </div>
  </div>
);
}

export default ProjectCard;
