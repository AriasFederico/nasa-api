import { v4 as uuidv4 } from 'uuid';

export const bbdd = {
	header: {
		menu: [
			{ id: uuidv4(), title: 'Imagén del día', href: '#' },
			{ id: uuidv4(), title: 'Librería', href: '#' },
		],
	},

	hero: {
		h1: ['IMÁGENES QUE INSPIRAN, CIENCIA QUE SORPRENDE'],
	},
};
