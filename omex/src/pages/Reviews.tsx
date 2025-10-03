import { useState } from 'react';
import {
	Fab,
	ReviewModal,
	ScreenContainer,
	Title,
	UserReview,
} from '../components/index';
export const Reviews = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<ScreenContainer idName="reviews">
			<Title text="Reviews" id="reviews2" />
			<div className="flex flex-col justify-between h-6/8">
				<div className="flex flex-col gap-4 mt-8">
					<UserReview reviewMessage="They are great" starCount={4} />
					<UserReview reviewMessage="Just what I needed" starCount={3} />
					<UserReview
						reviewMessage="Very professional and timely!"
						starCount={5}
					/>
				</div>
			</div>
			<div className="w-full max-w-lg flex justify-end">
				<Fab text="Write a Review" open={() => setShowModal(true)} />
			</div>
			{showModal ? (
				<ReviewModal open={showModal} closing={() => setShowModal(false)} />
			) : null}
		</ScreenContainer>
	);
};
