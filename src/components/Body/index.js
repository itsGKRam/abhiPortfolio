import { VStack } from '@chakra-ui/react';
import React from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Experience from './Experience';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';

export default function Body() {
	return (
		<VStack width={`full`}>
			<Home />
			<AboutMe />
			<Skills />
			<Projects />
			<Experience />
			<ContactMe />
		</VStack>
	);
}
