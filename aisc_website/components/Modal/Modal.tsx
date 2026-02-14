
import Image from "next/image";
import { JSX } from "react/jsx-dev-runtime";

type input = {
    closeModal: () => void;
    renderStatus: (status: string) => JSX.Element;
    modalDescription: string;
    contributors: string[]
    link: string;
    stack: string;
    status: string;
    img: string;
    title: string;
};

const Modal = (input:input) => {

return(

<div id="popup-modal" className="  fixed inset-0 z-50 w-screen h-screen bg-black/70 backdrop-blur-sm flex items-center  justify-center " onClick={input.closeModal}>
    
        <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto no-scrollbar  border border-default rounded-base shadow-sm bg-black/80 rounded-xl" onClick={(e) => e.stopPropagation()}>

            <div className=" flex flex-col items-center justify-center p-6">
                <div className = "relative w-full h-70  bg-white shadow-sm rounded-2xl  mb-4">
                    <Image
                        src={input.img}
                        alt={input.title}
                        fill
                        className="object-contain "
                    />
                </div>
                <div className="flex flex-row justify-center items-center gap-4">
                {input.renderStatus(input.status)}
                <p className="text-body mb-6 flex justify-center items-center rounded-full bg-gray-600 px-2 w-fit text-white-900">{input.stack}</p>
                </div>
                <h3 className="mb-6 mt-2 text-center text-sky-400 text-3xl font-semibold">{input.title}</h3>
                    <p className="mb-6 text-body leading-9 max-w-2xl mx-auto text-left ml-6 mr-6">{input.modalDescription}</p>
                <p className="mb-6 text-body">Contributors: {input.contributors.join(", ")}</p>
                <a href={input.link} className="text-body mb-6 flex justify-center items-center rounded-full hover:scale-[1.1] transition bg-blue-600 px-4 py-2 w-fit text-white-900" target="_blank" rel="noopener noreferrer">View Project</a>
     
            </div>
            </div>
        </div>
);
}

export default Modal;