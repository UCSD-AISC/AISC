import Image from "next/image";

type project = {
  title: string;
  cardDescription: string;
  contributors: string[];
  link: string;
  stack: string;
  status: string;
  difficulty: string;
  img: string;
};



const Card = (project: project) => {
  const renderDifficulty = () => {
      if (project.difficulty === "Easy") {
        return <p className="text-body mb-6 flex justify-center items-center rounded-full bg-green-600 px-2 w-fit text-white-900">{project.difficulty}</p>;
      } else if (project.difficulty === "Medium") {
        return <p className="text-body mb-6 flex justify-center items-center rounded-full bg-yellow-600 px-2 w-fit text-white-900">{project.difficulty}</p>;
      } else {
        return <p className="text-body mb-6 flex justify-center items-center rounded-full bg-red-600 px-2 w-fit text-white-900">{project.difficulty}</p>;
      }
    };  
  return (
    <div className="flex justify-center">
      <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-2xl shadow-xs animate-fade-in">
        <div className="relative w-full h-44 mb-6 rounded-base overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 flex justify-center items-center">{project.title}</h5>
        <div className="flex flex-row justify-center items-center">
          {renderDifficulty()}
        </div>
        <p className="text-body mb-6 flex justify-center items-center">{project.cardDescription}</p>
    </div>
    </div>
  );
}

export default Card;