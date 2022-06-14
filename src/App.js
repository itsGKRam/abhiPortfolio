import { VStack } from '@chakra-ui/react';
import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
	return (
		<VStack spacing={`0`}>
			<Header />
			<Body />
			<Footer />
		</VStack>
	);
}
