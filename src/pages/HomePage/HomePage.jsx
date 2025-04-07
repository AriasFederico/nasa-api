import { Hero } from '../../components/Hero/Hero';
import { Apod } from '../../components/sections/ImageOfDay/Apod';
import { NasaLibrary } from '../../components/sections/NasaLibrary/NasaLibrary';
export const HomePage = () => {
	return (
		<>
			<Hero />
			<Apod />
			<NasaLibrary />
		</>
	);
};
