import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { Logo } from '../Logo/Logo';
import './Header.scss';
import { Burguer } from '../Icons/burguer/Burguer';
import { useActiveNav } from '../../hooks/useActiveNav';
import { Cross } from '../Icons/cross/Cross';

export const Header = () => {
	const { activeNav, handleNav } = useActiveNav();
	const { bbdd } = useContext(GlobalContext);
	const { header } = bbdd;
	const { menu } = header;
	return (
		<header className='Header'>
			<Logo />

			<div className='Header-mobile'>
				{activeNav && (
					<div className='Header-nav-mobile' data-aos='fade-left'>
						{menu.map((i, _) => (
							<li key={i.id} className='Header-li'>
								<a href={i.href} className='Header-link'>
									{i.title}
								</a>
							</li>
						))}
					</div>
				)}
				{activeNav ? (
					<Cross event={handleNav} />
				) : (
					<Burguer event={handleNav} />
				)}
			</div>
		</header>
	);
};

/* <div className='Header-mobile'>
</div> */
