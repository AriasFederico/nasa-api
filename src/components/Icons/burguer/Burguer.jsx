import './Burguer.scss';
import React from 'react';

export const Burguer = ({ event }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 16 16'
			className='Burguer-svg'
			onClick={event}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				d='M1.5 3.5h13m-13 4h13m-13 4h13'
			/>
		</svg>
	);
};
