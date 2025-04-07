import { createContext, useEffect, useState } from 'react';
import { bbdd } from './data';
import { useFetch } from '../components/sections/ImageOfDay/service/useFetch';

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
	const api_key = import.meta.env.VITE_APP_API_KEY;

	const urlApod = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
	const urlLibray = 'https://images-api.nasa.gov';

	const [apodData, setApodData] = useState(null);
	const [libraryData, setLibraryData] = useState(null);

	const { data: dataApod, loading: loadingApod } = useFetch(urlApod);
	// const { data: dataLibrary, loading: loadingLibrary } = useFetch({
	// 	url: urlLibray,
	// });

	useEffect(() => {
		if (dataApod) setApodData(dataApod);
	}, [dataApod]);

	// useEffect(() => {
	// 	if (dataLibrary) setLibraryData(dataLibrary);
	// }, [dataLibrary]);

	const value = {
		bbdd,
		apod: {
			data: apodData,
			loading: loadingApod,
		},
		// library: {
		// data: libraryData,
		// loading: loadingLibrary,
		// },
	};

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};
