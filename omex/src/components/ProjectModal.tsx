import React, { useEffect, useState } from 'react';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react';
import type { ProjectType } from '../types/index';
import { useTheme } from '../context/ThemeContext';
import { ArrowButton } from './index';

const CLOUD_DISTRIBUTION: string =
	(import.meta.env.VITE_CLOUD_DISTRIBUTION as string | undefined) ?? '';
const cloudBase = CLOUD_DISTRIBUTION.replace(/\/$/, '');

const cd = (path: string) =>
	cloudBase ? `${cloudBase}${path.startsWith('/') ? '' : '/'}${path}` : path;

// const picArray = [

// 	cd('/wsu/wsu1.jpg'),
// 	cd('/wsu/wsu2.jpg'),
// 	cd('/wsu/wsu3.jpg'),
// 	cd('/wsu/wsu4.jpg'),
// 	cd('/wsu/wsu5.jpg'),
// ];
type ProjectModalProps = {
	open: boolean;
	closing: () => void;
	project: ProjectType;
};
//TODO: get images from project.img array
export const ProjectModal = ({ open, closing, project }: ProjectModalProps) => {
	const { theme } = useTheme();
	const scrollerRef = React.useRef<HTMLDivElement | null>(null);
	const [picArray, setPicArray] = useState<string[]>([]);

	useEffect(() => {
		// if (open && scrollerRef.current) {
		// 	scrollerRef.current.scrollTo({ left: 0 });
		// }
		let cancelled = false;

		const urls: string[] = Array.isArray(project?.img) ? project.img : [];

		if (urls.length === 0) {
			setPicArray([]);
			return () => {
				cancelled = true;
			};
		}

		(async () => {
			// Preload images with a concurrency limit to avoid spiking network.
			const limit = 3;
			let index = 0;
			const results: (string | null)[] = new Array(urls.length).fill(null);

			const preload = (url: string) =>
				new Promise<string>((resolve, reject) => {
					const img = new Image();
					img.onload = () => resolve(url);
					useEffect(() => {
						let cancelled = false;

						const rawUrls: string[] = Array.isArray(project?.img)
							? project.img
							: [];
						if (rawUrls.length === 0) {
							setPicArray([]);
							return () => {
								cancelled = true;
							};
						}

						// turn any relative paths into full cloud URLs
						const urls = rawUrls.map((u) => cd(u));

						(async () => {
							// Preload images with a concurrency limit to avoid spiking network.
							const limit = 3;
							let index = 0;
							const results: (string | null)[] = new Array(urls.length).fill(
								null,
							);

							const preload = (url: string) =>
								new Promise<string>((resolve, reject) => {
									const img = new Image();
									img.onload = () => resolve(url);
									img.onerror = () => reject(url);
									img.src = url;
								});

							const workers = Array.from(
								{ length: Math.min(limit, urls.length) },
								async () => {
									while (!cancelled) {
										const i = index++;
										if (i >= urls.length) break;
										try {
											await preload(urls[i]);
											results[i] = urls[i];
										} catch {
											results[i] = null;
										}
									}
								},
							);

							try {
								await Promise.all(workers);
								if (!cancelled)
									setPicArray(results.filter(Boolean) as string[]);
							} catch (err) {
								console.error(err);
							}
						})().catch(console.error);

						return () => {
							cancelled = true;
						};
					}, [project, open]);
					img.src = url;
				});

			const workers = Array.from(
				{ length: Math.min(limit, urls.length) },
				async () => {
					while (!cancelled) {
						const i = index++;
						if (i >= urls.length) break;
						try {
							await preload(urls[i]);
							results[i] = urls[i];
						} catch {
							results[i] = null;
						}
					}
				},
			);

			try {
				await Promise.all(workers);
				if (!cancelled) setPicArray(results.filter(Boolean) as string[]);
			} catch (err) {
				console.error(err);
			}
		})().catch(console.error);

		return () => {
			cancelled = true;
		};
	}, []);

	return (
		<Dialog
			open={open}
			onClose={closing}
			className="relative z-50 border-black p-1 lg:p-4 sticky left-1/2 transform"
		>
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0"
			/>
			<div className="fixed inset-0 flex w-screen items-center justify-center p-1 lg:p-4">
				<DialogPanel
					transition
					className="w-[750px] max-w-screen space-y-4 px:4 lg:p-12 duration-300 ease-out data-closed:scale-65 data-closed:opacity-0 relative rounded-sm backdrop-blur-sm max-h-[90vh]"
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
					<div className="absolute top-1/2 left-4">
						<ArrowButton direction="left" containerRef={scrollerRef} />
					</div>
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
						<div
							ref={scrollerRef}
							className="w-full flex flex-row items-center gap-6 scroll-smooth overflow-x-auto scroll-x snap-x snap-mandatory"
						>
							{picArray.map((pic, index) => (
								<div
									key={`pic${index}`}
									className="snap-center flex-shrink-0 w-7/8 max-w-[600px] mx-0 lg:mx-2 object-fit max-h-[75vh]"
								>
									<div className="w-full p-1">
										<img src={pic} />
									</div>
								</div>
							))}
						</div>
						<DialogTitle className="text-lg font-bold select-none mt-4 p-1">
							{project.title}
						</DialogTitle>
					</div>
					<div className="absolute top-1/2 right-4">
						<ArrowButton direction="right" containerRef={scrollerRef} />
					</div>
				</DialogPanel>
			</div>
		</Dialog>
	);
};
