import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
	theme: Theme;
	toggle: () => void;
	setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setThemeState] = useState<Theme>(() => {
		try {
			const stored = localStorage.getItem('omex:theme');
			return (stored as Theme) ?? 'light';
		} catch (e) {
			return 'light';
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem('omex:theme', theme);
		} catch (e) {}
		const root = document.documentElement;
		if (theme === 'dark') {
			root.classList.add('theme-dark');
			root.classList.remove('theme-light');
		} else {
			root.classList.add('theme-light');
			root.classList.remove('theme-dark');
		}
	}, [theme]);

	const toggle = () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark'));
	const setTheme = (t: Theme) => setThemeState(t);

	return (
		<ThemeContext.Provider value={{ theme, toggle, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
	return ctx;
}
