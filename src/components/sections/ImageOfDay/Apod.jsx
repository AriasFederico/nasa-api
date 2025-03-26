import './Apod.scss';
import { SectionTitle } from '../../SectionTitle/SectionTitle';
export const Apod = ({ data }) => {
	return (
		<section className='Apod'>
			<SectionTitle value={'La Imagen del Día: Un Vistazo al Universo'} />
			{/* data ? div-apod : skeleton */}

			{data ? (
				<div className='Apod-section'>
					<a href={data.url}>
						<span>
							{data.date} - {data.copyright}
						</span>
						<img src={data.url} alt='' className='Apod-img' />
					</a>
					<div className='Apod-description'>
						<h1 className='Apod-h1'>{data.title}</h1>
						<p className='Apod-p'>{data.explanation}</p>
					</div>
				</div>
			) : (
				<p>cargando...</p>
				// skeleton
			)}
		</section>
	);
};
