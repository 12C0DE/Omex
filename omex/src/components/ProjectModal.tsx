import React from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import type { ProjectType } from '../types/index';
// Button not used here
import { useTheme } from '../context/ThemeContext';
import { ArrowButton } from './index';

type ProjectModalProps = {
	open: boolean;
	closing: () => void;
	project: ProjectType;
};

const picArray = [
	'/images/projects/1/wsu1.jpg',
	'/images/projects/1/wsu2.jpg',
	'/images/projects/1/wsu3.jpg',
	'/images/projects/1/wsu4.jpg',
	'/images/projects/1/wsu5.jpg',
];

export const ProjectModal = ({ open, closing, project }: ProjectModalProps) => {
	const { theme } = useTheme();
	const scrollerRef = React.useRef<HTMLDivElement | null>(null);
	return (
		<Dialog
			open={open}
			onClose={closing}
			className="relative z-50 border-black p-1 lg:p-4 sticky left-1/2 transform"
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0"
			/>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-1 lg:p-4">
				<DialogPanel
					transition
					className="w-[750px] max-w-screen space-y-4 p:4 lg:p-12 duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 relative rounded-sm backdrop-blur-sm"
					style={
						theme === 'dark'
							? {
									backgroundColor: 'rgba(26, 26, 26, 0.95)',
									color: 'white',
									border: '1px solid white',
								}
							: {
									backgroundColor: 'rgba(255, 255, 255, 0.95)',
									color: 'black',
									border: '1px solid black',
								}
					}
				>
					<div className="absolute top-1/2 left-4">
						<ArrowButton direction="left" containerRef={scrollerRef} />
					</div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="size-8 self-end hover:fill-red-400 hover:color-white-500 absolute right-1 top-1"
							onClick={closing}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
						<div
							ref={scrollerRef}
							className="w-full flex flex-row items-center gap-6 scroll-smooth overflow-x-auto scroll-x snap-x snap-mandatory"
						>
							{picArray.map((pic, index) => (
								<div
									key={`pic${index}`}
									className="snap-center flex-shrink-0 w-7/8 max-w-[600px] mx-0 lg:mx-2 object-fit"
								>
									<div className="w-full p-1">
										<img src={pic} />
									</div>
								</div>
							))}
						</div>
						<DialogTitle className="text-lg font-bold select-none mt-4 p-1">
							{project.title}
						</DialogTitle>
					</div>
					<div className="absolute top-1/2 right-4">
						<ArrowButton direction="right" containerRef={scrollerRef} />
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
