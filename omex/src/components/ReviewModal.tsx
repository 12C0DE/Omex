import {
	Button,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import { useTheme } from '../context/ThemeContext';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { EditStars } from '../components/index';

type ReviewModalProps = {
	open: boolean;
	closing: () => void;
};

type SendReviewForm = {
	email: string;
	message: string;
	rating: number;
};

export const ReviewModal = ({ open, closing }: ReviewModalProps) => {
	const { theme } = useTheme();
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
		reset();
	};

	return (
		<Dialog
			open={open}
			onClose={closing}
			className="relative z-50 border-black p-4 sticky transform "
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0"
			/>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
				<DialogPanel
					transition
					className="w-[750px] max-w-screen space-y-4 p-12 duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 relative rounded-sm backdrop-blur-sm"
					style={
						theme === 'dark'
							? {
									backgroundColor: 'rgba(26, 26, 26, 0.95)',
									color: 'white',
									border: '1px solid white',
								}
							: {
									backgroundColor: 'rgba(255, 255, 255, 0.95)',
									color: 'black',
									border: '1px solid black',
								}
					}
				>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="size-8 self-end hover:fill-red-400 hover:color-white-500 absolute right-1 top-1"
							onClick={closing}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</div>
					<div className="flex flex-col justify-center align-center">
						<DialogTitle className="text-2xl font-bold">
							Submit a Review
						</DialogTitle>
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
										className="border border-gray-300 p-2 resize-y font-light text-sm min-h-[100px] max-h-[250px]"
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
										<i className="font-light text-sm text-gray-300">
											(optional)
										</i>
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
									<label className="font-light text-sm">
										{' '}
										Display my Review publically
									</label>
								</div>
								<div className="flex flex-row justify-end mt-4 gap-2">
									<Button
										className="px-4 py-2 hover:bg-gray-500"
										onClick={closing}
									>
										Cancel
									</Button>
									<Button
										type="submit"
										className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
									>
										Submit
									</Button>
								</div>
							</div>
						</form>
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
