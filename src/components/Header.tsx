export const Header = () => {
	return (
		<header className="flex justify-between p-2 sticky top-0 bg-white p-2 border-b border-gray-200">
			<h1 className="text-sm font-bold">OMEX</h1>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="size-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 9h16.5m-16.5 6.75h16.5"
				/>
			</svg>
		</header>
	);
};
