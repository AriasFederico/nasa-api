import './ApodContent.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../../../../context/GlobalContext';

export const ApodContent = () => {
	const { apod } = useContext(GlobalContext);
	const { data } = apod;
	return (
		<div className='Apod-content'>
			<figure className='Apod-content-figure'>
				<a href={data.url}>
					{data.media_type === 'video' ? (
						<iframe
							width='100%'
							height={'250px'}
							src={data.url}
							title={data.title}
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							referrerpolicy='strict-origin-when-cross-origin'
							allowfullscreen
						/>
					) : (
						<img src={data.url} alt={data.title} className='Apod-content-img' />
					)}
				</a>
				<figcaption className='Apod-content-figcaption'>
					{data.date} -{' '}
					{data.copyright || <a href='https://www.nasa.gov/'>NASA</a>}
				</figcaption>
			</figure>

			<div className='Apod-content-description'>
				<h1 className='Apod-content-h1'>{data.title}</h1>
				<p className='Apod-content-p'>{data.explanation}</p>
			</div>
		</div>
	);
};

// url
// date
// copyright
// title
// explanation
