import { Fab, ScreenContainer, Title, UserReview } from '../components/index';
export const Reviews = () => {
	return (
		<ScreenContainer>
			<Title text="Reviews" />
			<div className="flex flex-col justify-between h-6/8">
				<div className="flex flex-col gap-4 mt-8">
					<UserReview reviewMessage="They are great" starCount={4} />
					<UserReview reviewMessage="They are cool" starCount={3} />
					<UserReview
						reviewMessage="you have to call them yourself"
						starCount={1}
					/>
				</div>
			</div>
			<Fab text="Write a Review" />
		</ScreenContainer>
	);
};
