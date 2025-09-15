import { useState } from 'react';
import { Menu } from './Menu';

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<header className="flex flex-row justify-between p-2 fixed top-2 right-0 left-0 p-2 z-20 bg-transparent">
			<h1 className="text-sm font-bold ml-2">OMEX</h1>
			<div className="flex flex-col justify-end items-end gap-0 bg-transparent">
				<button
					className="hover:cursor-pointer transition mr-2"
					onClick={() => setShowMenu(!showMenu)}
				>
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
				</button>
				{showMenu ? <Menu selected={setShowMenu} /> : null}
			</div>
		</header>
	);
};
