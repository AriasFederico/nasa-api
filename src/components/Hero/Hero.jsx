import React, { useContext } from 'react';
import './Hero.scss';
import { GlobalContext } from '../../context/GlobalContext';

export const Hero = () => {
	const { hero } = useContext(GlobalContext);
	return (
		<main className='Hero'>
			<h1 className='Hero-h1'>{hero.h1}</h1>
		</main>
	);
};
