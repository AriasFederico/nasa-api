import React from 'react';
import './Cross.scss';

export const Cross = ({ event }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			className='Cross'
			onClick={event}
		>
			<path
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.5'
				d='M19 5L5 19M5 5l14 14'
				color='currentColor'
			/>
		</svg>
	);
};
