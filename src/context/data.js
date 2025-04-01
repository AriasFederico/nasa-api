import { v4 as uuidv4 } from 'uuid';

export const bbdd = {
	header: {
		menu: [
			{ id: uuidv4(), title: 'Image of to day', href: '#' },
			{ id: uuidv4(), title: 'Image library', href: '#' },
		],
	},

	hero: {
		h1: ['IMAGES THAT INSPIRE, SCIENCE THAT SURPRISES'],
	},
};
