import { createContext } from 'react';
import { bbdd } from './data';

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
	return (
		<GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
	);
};
