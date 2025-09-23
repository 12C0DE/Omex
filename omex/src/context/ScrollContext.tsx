import { createContext, useContext, useRef } from 'react';
import type { ReactNode } from 'react';

type ScrollContextType = {
	scrollToSection: (id: string, offset?: number) => void;
	// expose the scroll container ref so other hooks/components can scope listeners
	containerRef: React.RefObject<HTMLDivElement | null>;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
	const containerRef = useRef<HTMLDivElement | null>(null);

	const scrollToSection = (id: string, offset: number = 0) => {
		const container = containerRef.current;
		if (!container) return;

		const section = document.getElementById(id);
		if (section) {
			const top = section.offsetTop - offset;
			container.scrollTo({ top, behavior: 'smooth' });
		}
	};

	return (
		<ScrollContext.Provider value={{ scrollToSection, containerRef }}>
			<div
				ref={containerRef}
				className="flex-1 overflow-y-scroll snap-y snap-mandatory"
			>
				{children}
			</div>
		</ScrollContext.Provider>
	);
}

export function useScroll() {
	const ctx = useContext(ScrollContext);
	if (!ctx) throw new Error('useScroll must be used inside ScrollProvider');
	return ctx;
}
