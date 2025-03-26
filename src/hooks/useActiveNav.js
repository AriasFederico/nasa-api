import { useState } from 'react';

export const useActiveNav = () => {
	const [activeNav, setActiveNav] = useState(false);
	const handleNav = () => {
		setActiveNav(!activeNav);
	};

	return { handleNav, activeNav };
};
