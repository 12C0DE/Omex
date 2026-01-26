import { useState, useEffect } from 'react';
import {
	Fab,
	ReviewModal,
	ScreenContainer,
	Title,
	UserReview,
} from '../components/index';

type Review = {
	id: string;
	name: string;
	message: string;
	rating: number;
	displayPublicly: boolean;
	createdAt: string;
};

export const Reviews = () => {
	const [showModal, setShowModal] = useState(false);
	const [reviews, setReviews] = useState<Review[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_OMEX_API as string}/reviews`,
				);

				if (!response.ok) {
					throw new Error('Failed to fetch reviews');
				}

				const data = await response.json();
				setReviews(data.reviews || []);
				setError(null);
			} catch (err) {
				console.error('Error fetching reviews:', err);
				setError('Failed to load reviews');
				setReviews([]);
			} finally {
				setLoading(false);
			}
		};

		fetchReviews();
	}, []);

	return (
		<ScreenContainer idName="reviews">
			<Title text="Reviews" id="reviews2" />
			<div className="flex flex-col justify-between min-h-6/8">
				<div className="flex flex-col gap-4 mt-8 h-100">
					{loading && (
						<p className="text-center text-gray-500">Loading reviews...</p>
					)}
					{error && <p className="text-center text-red-500">{error}</p>}
					{!loading && reviews.length === 0 && (
						<p className="text-center text-gray-500">
							No approved reviews yet. Be the first to write one!
						</p>
					)}
					{reviews.map((review) => (
						<UserReview
							key={review.id}
							reviewMessage={review.message}
							starCount={review.rating}
						/>
					))}
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
