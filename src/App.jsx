import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { HomePage } from './pages/HomePage/HomePage';

export function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				{/* <Route path='/' element={<About />} />  RUTA DEPENDIENDO EL ID DE LA MULTIMEDIA*/}
			</Routes>
		</>
	);
}

export default App;
