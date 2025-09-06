import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import type { ProjectType } from '../types/index';

type ProjectModalProps = {
	open: boolean;
	closing: () => void;
	project: ProjectType;
};

export const ProjectModal = ({ open, closing, project }: ProjectModalProps) => {
	return (
		<Dialog
			open={open}
			onClose={closing}
			className="relative z-50 border-black p-4 sticky left-1/2 transform"
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0"
			/>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<DialogPanel
					transition
					className="max-w-lg space-y-4 bg-white p-12 duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 relative"
				>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="size-8 self-end hover:fill-red-400 hover:color-white-500 absolute right-0 top-1"
							onClick={closing}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>

						<DialogTitle className="text-lg font-bold">
							{project.title}
						</DialogTitle>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
