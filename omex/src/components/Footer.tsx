export const Footer = () => {
	return (
		<footer className="flex justify-center gap-2 p-16 md:p-24 font-sm opacity-75 text-xs md:text-sm">
			<span>Like this site?</span>
			<a
				href="https://12code.biz"
				target="_blank"
				className="underline transition-[opacity,0.2s] hover:opacity-100"
			>
				Let’s build yours
			</a>
		</footer>
	);
};
