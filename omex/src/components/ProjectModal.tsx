type ProjectModalProps = {
	closing: () => void;
};

export const ProjectModal = ({ closing }: ProjectModalProps) => {
	return (
		<dialog
			open
			className="border-1 border-gray-200 self-center border-black p-4 absolute sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg z-30"
		>
			<form method="dialog" className="flex flex-col max-w-lg">
				{/* <div className="flex justify-end">
				test	
				</div> */}
				<input type="submit" className="justify-end" value="✕" onClick={closing} />

				<h1 className="text-2xl font-bold mb-4">Project Title</h1>
				<p className="mb-4">
					Detailed information about the project goes here. This can include
					descriptions, technologies used, links, and more.
				</p>
				{/* <input
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded"
					value="Close"
					onClick={closing}
					/> */}
			</form>
		</dialog>
	);
};
