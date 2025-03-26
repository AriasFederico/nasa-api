import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { Provider } from './context/GlobalContext.jsx';

createRoot(document.getElementById('root')).render(
	<Provider>
		<StrictMode>
			<App />
		</StrictMode>
	</Provider>,
);
