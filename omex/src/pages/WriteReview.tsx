import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { EditStars, ScreenContainer, Title } from '../components/index';
import { Button } from '@headlessui/react';
import { useTheme } from '../context/ThemeContext';

type SendReviewForm = {
	email: string;
	message: string;
	rating: number;
};

export const WriteReview = () => {
	const { theme } = useTheme();
	const navigate = useNavigate();
	const maxMessageLength = 255;
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<SendReviewForm>({
		defaultValues: {
			email: '',
			message: '',
			rating: 0,
		},
	});

	const onSubmit: SubmitHandler<SendReviewForm> = (data) => {
		console.log(data);
		alert('Message sent! We will get back to you shortly.');
		//clear form
		reset();
		navigate('/');
	};

	return (
		<div className="flex flex-col">
			<ScreenContainer idName="writeReview">
				<Title text="Write a Review" id="writeReview" />
				<form
					className="flex flex-col gap-4 mt-8 w-full font-kanit tracking-wide text-xl max-w-lg"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col gap-2 mx-4 md:mx-0">
						<label>1. Rate your experience</label>
						<div className="mx-auto">
							<EditStars />
						</div>
					</div>
					<div className="flex flex-col gap-2 mx-4 md:mx-0">
						<label>2. Please explain</label>
						<div className="w-full flex flex-col gap-0">
							<textarea
								rows={5}
								maxLength={maxMessageLength}
								{...register('message', {
									required: true,
									minLength: 1,
									maxLength: maxMessageLength,
								})}
								className="border border-gray-300 p-2 resize-y font-light text-sm"
							></textarea>
							<div className="flex flex-row justify-between">
								<p
									role="alert"
									className="text-red-500 font-kanit text-bold italic"
								>
									{errors?.message?.message}
								</p>
								<p className="text-xs font-kanit text-lighter italic text-gray-400">
									{maxMessageLength - (watch('message')?.length ?? 0)}
								</p>
							</div>
						</div>
						<div>
							<label>
								3.Upload photos{' '}
								<i className="font-light text-sm text-gray-300">(optional)</i>
							</label>
						</div>
						<div>
							<label>4. Your name</label>
							<input
								type="text"
								className="border border-gray-300 p-2 font-light text-sm w-full mt-1"
							/>
						</div>
						<div className="flex flex-row gap-1 align-baseline">
							<input
								type="checkbox"
								style={{ height: '24px', width: '24px' }}
								defaultChecked={true}
							/>
							<label className="ml-2 text-[16px] italic">
								{' '}
								Display my review pubically
							</label>
						</div>
						<div className="flex flex-row justify-end mt-4 gap-2">
							<Button
								className="px-4 py-2  hover:bg-gray-500"
								onClick={() => navigate('/')}
							>
								Cancel
							</Button>
							<Button
								type="submit"
								style={
									theme === 'dark'
										? { backgroundColor: '#fff', color: '#000' }
										: { backgroundColor: '#000000ff', color: '#eee' }
								}
								className="px-4 py-2 hover:hover:bg-blue-700"
							>
								Submit
							</Button>
						</div>
					</div>
				</form>
			</ScreenContainer>
		</div>
	);
};
