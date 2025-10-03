import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, NotFound } from './pages/index.ts';
import { Header } from './components/index.ts';
import { ScrollProvider } from './context/ScrollContext.tsx';

function App() {
	return (
		<>
			<ScrollProvider>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/notfound" element={<NotFound />} />
						<Route path="*" element={<Navigate to="/notfound" replace />} />
					</Routes>
				</BrowserRouter>
			</ScrollProvider>
		</>
	);
}

export default App;
