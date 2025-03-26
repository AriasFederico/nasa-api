import './SectionTitle.scss';
export const SectionTitle = ({ value, dark }) => {
	return (
		<div className={'SectionTitle'}>
			<span className={dark ? 'SectionTitle-dark-line' : 'SectionTitle-line'}>
				{value}
			</span>
		</div>
	);
};
