import { ScreenContainer, Title } from '../components/index';

export const ContactUs = () => {
	return (
		<ScreenContainer>
			<Title text="Contact Us" />
			<div className="flex flex-col items-center mt-8 gap-4">
				<div className="flex flex-row align-center gap-4">
					{/* <SmartphoneIcon style={{ fontSize: 48, color: 'black' }} /> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-12 h-12"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
						/>
					</svg>

					<a href="tel:3165552323">
						<h4 className="text-[32px] font-kanit font-wider tracking-wide">
							316-555-2323
						</h4>
					</a>
				</div>
				<div>
					<svg
						width="329"
						height="2"
						viewBox="0 0 329 1"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line y1="0.5" x2="329" y2="0.5" stroke="black" />
					</svg>
				</div>
			</div>
		</ScreenContainer>
	);
};
