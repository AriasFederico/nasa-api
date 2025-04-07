import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			try {
				const getApi = await fetch(url);
				if (!getApi.ok) {
					throw new Error(`HTTPS error! status:" + ${getApi.status} `);
				}

				const text = await getApi.text();

				try {
					const responseJson = JSON.parse(text);
					console.log(responseJson);
					setData(responseJson);
				} catch (error) {
					throw new Error('La respuesta no es JSON válido');
				} finally {
					setLoading(false);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
				setError(error.message);
			}
		};
		fetchData();
	}, [url]);

	return {
		data,
		loading,
		error,
	};
};
