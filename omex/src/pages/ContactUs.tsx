import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { ScreenContainer, Title } from '../components/index';

type SendMessageForm = {
	email: string;
	message: string;
};

export const ContactUs = () => {
	const maxMessageLength = 500;
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<SendMessageForm>({
		defaultValues: {
			email: '',
			message: '',
		},
	});
	const onSubmit: SubmitHandler<SendMessageForm> = (data) => {
		console.log(data);
		alert('Message sent! We will get back to you shortly.');
		//clear form
		reset();
	};

	return (
		<ScreenContainer idName="contactus">
			<Title text="Contact Us" id="contactus2" />
			<form
				className="flex flex-col items-center mt-8 gap-4 "
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-row align-center gap-4">
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
				<div>
					<h5 className="text-center text-2xl font-kanit tracking-wide">
						Write Us
					</h5>
				</div>
				<div className="w-full">
					<textarea
						className="w-full border-1 border-black max-h-[450px] p-1 font-kanit font-light"
						maxLength={maxMessageLength}
						rows={5}
						{...register('message', {
							required: 'Message is required',
							minLength: 1,
							maxLength: maxMessageLength,
						})}
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
				<label className="self-start font-kanit text-medium" htmlFor="email">
					Your Email (required)
				</label>
				<div className="w-100">
					<input
						type="email"
						className="w-full border-1 border-black font-kanit font-light px-1"
						{...register('email', {
							required: 'Email is required',
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						})}
					/>
					{errors.email && (
						<p
							role="alert"
							className="text-red-500 font-kanit text-bold italic"
						>
							{errors.email.message}
						</p>
					)}
				</div>
				<div className="w-full flex justify-end">
					<input
						type="submit"
						className="bg-black text-white px-4 py-2 hover:bg-blue-700 font-kanit"
						value={'Send'}
					/>
				</div>
			</form>
		</ScreenContainer>
	);
};
