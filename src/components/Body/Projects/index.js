import { Center, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import * as Project from '../../../assets/project.png';
import ProjectCard from '../../ProjectCard';

export default function Projects() {
	return (
		<Center minHeight={`calc(100vh - 50px)`} width={`full`}>
			<VStack width={`90%`} height={`70%`}>
				<Text fontSize={`3xl`} fontWeight={`bold`}>
					Projects
				</Text>
				<VStack spacing='5'>
					<ProjectCard
						title='Hospital bed and staff management system'
						description='This application can be used by the staff of the hospital for easy allotment of beds for patients in each floor and each block. Where front-end is developed using next js and Firebase for back-end.'
						imageURI={Project}
					/>
				</VStack>
			</VStack>
		</Center>
	);
}
