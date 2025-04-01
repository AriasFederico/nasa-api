import './Apod.scss';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { ApodContent } from './components/content/ApodContent';
import { ApodSkeleton } from './components/skeleton/ApodSkeleton';
export const Apod = ({ data }) => {
	return (
		<section className='Apod'>
			<SectionTitle value={'Image of the Day: A Glimpse of the Universe'} />
			{data ? <ApodContent data={data} /> : <ApodSkeleton />}
		</section>
	);
};
