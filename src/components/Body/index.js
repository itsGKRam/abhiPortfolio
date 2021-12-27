import { VStack } from '@chakra-ui/react';
import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';

export default function Body() {
	return (
		<VStack width={`full`}>
			<Home />
			<AboutMe />
			<Skills />
			<Experience />
			<ContactMe />
		</VStack>
	);
}
