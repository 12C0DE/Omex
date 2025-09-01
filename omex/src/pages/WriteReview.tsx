import { ScreenContainer, Stars, Title } from "../components/index";

export const WriteReview = () => {
	return (
		<div className="flex flex-col items-center">
			<ScreenContainer>
				<Title text="Write a Review" id="writeReview" />
				 <form className="flex flex-col gap-4 mt-8 w-full font-kanit tracking-wide text-xl">
					<div className="flex flex-col gap-2 mx-4 md:mx-0">
					<label>1. Rate your experience</label>
						<div className="mx-auto">
						<Stars starCount={0} editable={true} />
						</div>
					</div>
				</form>
			</ScreenContainer>
		</div>
	);
};
