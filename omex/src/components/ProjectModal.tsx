import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import type { ProjectType } from '../types/index';

type ProjectModalProps = {
	open: boolean;
	closing: () => void;
	project: ProjectType;
}

export const ProjectModal = ({ open, closing, project }: ProjectModalProps) => {
	return (
		// <dialog
		// 	open
		// 	className="w-full border-1 border-gray-200 self-center border-black p-4 sticky left-1/2 transform bg-white shadow-lg z-30"
		// >
		// 	<form method="dialog" className="flex flex-col max-w-lg">
		// 		<svg
		// 			xmlns="http://www.w3.org/2000/svg"
		// 			fill="none"
		// 			viewBox="0 0 24 24"
		// 			stroke-width="1.5"
		// 			stroke="currentColor"
		// 			className="size-8 self-end hover:fill-red-400 hover:color-white-500 absolute right-0 top-1"
		// 			onClick={closing}
		// 		>
		// 			<path
		// 				stroke-linecap="round"
		// 				stroke-linejoin="round"
		// 				d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
		// 			/>
		// 		</svg>
		// 		<h1 className="text-2xl font-bold mb-4">Project Title</h1>
		// 		<p className="mb-4">
		// 			Detailed information about the project goes here. This can include
		// 			descriptions, technologies used, links, and more.
		// 		</p>
		// 	</form>
		// </dialog>
	
	
		 <Dialog open={open} onClose={closing} className="relative z-50 border-black p-4 sticky left-1/2 transform">
        <DialogBackdrop transition className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0" />
		<div className="flex flex-col">
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
		
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
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
          <DialogPanel
            transition
            className="max-w-lg space-y-4 bg-white p-12 duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
          >
            <DialogTitle className="text-lg font-bold">{project.title}</DialogTitle>
            <Description>{project.description}</Description>
          </DialogPanel>
        </div>
		</div>
      </Dialog>
	);
};
