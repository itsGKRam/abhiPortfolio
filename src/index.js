import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './components/Global';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
