import type { ProjectType } from "../types/index";

export const ProjectCard = ({
  title,
  description,
  img,
  clicked,
}: ProjectType) => {
  return (
    <div className="flex flex-col border-1 border-solid rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[300px] m-2 hover:cursor-pointer">
      <img src={`${img}`} alt="Project Image" onClick={clicked} />
      <div className="bg-black text-white font-kanit p-2">
        <h3 className="text-xl font-md tracking-wide mb-2">{title}</h3>
        <p className="text-gray-400 text-sm italic px-1 py-2 h-auto">
          {description}
        </p>
      </div>
    </div>
  );
};
