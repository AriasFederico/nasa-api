import './Apod.scss';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { ApodContent } from './components/content/ApodContent';
import { ApodSkeleton } from './components/skeleton/ApodSkeleton';
import { GlobalContext } from '../../../context/GlobalContext';
import { useContext } from 'react';
export const Apod = () => {
	const { apod } = useContext(GlobalContext);
	const { data } = apod;
	return (
		<section className='Apod'>
			<SectionTitle value={'Image of the Day: A Glimpse of the Universe'} />
			{data ? <ApodContent /> : <ApodSkeleton />}
		</section>
	);
};
