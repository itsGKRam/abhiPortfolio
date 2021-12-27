import { Center, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import * as WorkHistoryImage from '../../../assets/WorkHistory.svg';
import ProjectCard from '../../ProjectCard';

export default function Experience() {
	return (
		<Center minHeight={`calc(100vh - 50px)`} width={`full`}>
			<VStack width={`90%`} height={`70%`}>
				<Text fontSize={`3xl`} fontWeight={`bold`}>
					Work Experience
				</Text>
				<VStack spacing='5'>
					<ProjectCard
						title='Android Developer Intern'
						company='SytiqHub Educational Services Private Limited'
						location='Vijayawada'
						startDate='07-2021'
						endDate='10-2021'
						description='SytiqHub Educational Services Private Limited'
						workDone={[
							'Maintained comprehensive knowledge of mobile	development cycle and addressed challenges arising in each phase.',
							'Provided dedicated support and timely issue resolution to clients following successful app launch.',
							'Corrected, modified and upgraded software to improve performance.',
							'Tested applications prior to final review to verify issue resolution.',
						]}
						imageURI={WorkHistoryImage}
					/>
				</VStack>
			</VStack>
		</Center>
	);
}
