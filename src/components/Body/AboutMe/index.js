import { Center, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function AboutMe() {
	return (
		<Center height={`calc(100vh - 50px)`} width={`full`}>
			<VStack
				padding='10'
				width={`70%`}
				height={`50%`}
				bg='white'
				rounded={`xl`}
				position={`relative`}
				shadow={`xl`}
				alignItems={`center`}
				justifyContent={`flex-start`}
			>
				<Text
					position={`absolute`}
					top='5'
					left='5'
					fontSize={`3xl`}
					fontWeight={`semibold`}
				>
					{`<>`}
				</Text>
				<Text
					position={`absolute`}
					bottom='5'
					right='5'
					fontSize={`3xl`}
					fontWeight={`semibold`}
				>
					{`</>`}
				</Text>
				<Text fontSize={`3xl`} fontWeight={`bold`}>
					About Me
				</Text>
				<Center flex={`1`} paddingX={10}>
					<Text
						fontSize={`lg`}
						fontWeight={`semibold`}
						textAlign={`center`}
					>
						Effective Student committed to learning, developing
						skills in Computer Science and team contribution.
						Self-directed and energetic with superior performance in
						both autonomous or collaborative environments working
						independently and collaborating with others on group
						projects
					</Text>
				</Center>
			</VStack>
		</Center>
	);
}
