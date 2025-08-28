
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, NotFound, WriteReview } from './pages/index.ts';
import { Header } from './components/index.ts';


function App() {

	return (
		<>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/writeReview" element={<WriteReview />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" replace />} />
    </Routes>
    </BrowserRouter>
		</>
	);
}

export default App;
