import './App.scss';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Apod } from './components/sections/ImageOfDay/Apod';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useFetch } from './components/sections/ImageOfDay/service/useFetch';

export function App() {
	const api_key = import.meta.env.VITE_APP_API_KEY;
	const urlApod = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
	const { data, loading } = useFetch(urlApod);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Header />
			<Hero />
			<Apod data={data} loading={loading} />
			{/* pasar {data} como prop al componente de imagenes y videos */}
			{/* {data && <img src={data.url} alt='gola' width={'100%'} />} */}
		</>
	);
}

export default App;
