import React, { useContext } from 'react';
import './Hero.scss';
import { GlobalContext } from '../../context/GlobalContext';

export const Hero = () => {
	const { bbdd } = useContext(GlobalContext);
	const { hero } = bbdd;
	return (
		<main className='Hero'>
			<h1 className='Hero-h1' data-aos='fade-right'>
				{hero.h1}
			</h1>
		</main>
	);
};
