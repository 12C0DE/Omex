import type { ProjectType } from '../types/index';

export const ProjectCard = ({ title, description, clicked }: ProjectType) => {
	return (
		<div className="flex flex-col border-1 border-solid rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 m-2">
			{/* <svg
				width="344"
				height="300"
				viewBox="0 0 346 280"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				onClick={clicked}
			></svg> */}
			<img
				src="/images/projects/1/wsu1.jpg"
				alt="Project Image"
				onClick={clicked}
			/>
			<div className="bg-black text-white font-kanit p-2 overflow-y-auto h-32">
				<h3 className="text-xl font-md tracking-wide mb-2">{title}</h3>
				<p className="text-gray-400 text-sm italic px-1 py-2">{description}</p>
			</div>
		</div>
	);
};
