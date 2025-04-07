import './NasaLibrary.scss';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
import { InputSearch } from '../../commons/InputSearch';
import { GlobalContext } from '../../../context/GlobalContext';
import { useContext, useEffect } from 'react';
export const NasaLibrary = ({ dataLibrery }) => {
	const { bbdd } = useContext(GlobalContext);
	const { library } = bbdd;

	return (
		<section className='NasaLibrary'>
			<SectionTitle value={'Cosmos Gallery: Images and Videos'} dark />
			<h2>{library.h2}</h2>
			{/* <InputSearch placeholder={'Search'} /> */}
		</section>
	);
};

// skeleton ?
// crear contenido en otra seccion
// react router para cada id

// nasaLibrary content
// nasaLibrary Skeleton
