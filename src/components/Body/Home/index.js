import {
	Breadcrumb,
	BreadcrumbItem,
	Center,
	Image,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import MainIMG from '../../../assets/SampleUser.png';

export default function Home() {
	return (
		<Center
			height={`calc(100vh - 50px)`}
			width={`full`}
			overflow={`hidden`}
		>
			<Stack width={`full`} direction={`row`} height={`full`}>
				<Stack
					alignItems={`center`}
					justifyContent={`flex-end`}
					width={`full`}
					height={`full`}
				>
					<Center height={`75%`}>
						<Image alt={window.UserName} src={MainIMG} />
					</Center>
				</Stack>
				<Stack
					alignItems={`center`}
					justifyContent={`center`}
					width={`full`}
					height={`full`}
				>
					<VStack
						alignItems={`flex-start`}
						justifyContent={`center`}
						width={`75%`}
					>
						<Text fontSize={`3xl`} fontWeight={`bold`}>
							Hey
						</Text>
						<Text fontSize={`6xl`} fontWeight={`bold`}>
							I&apos;m {window.UserName}
						</Text>
						<Breadcrumb
							fontWeight={`semibold`}
							spacing='1'
							separator='|'
						>
							{window.CoreSkills.map(
								(res, index) =>
									index <= 1 && (
										<BreadcrumbItem key={index}>
											<Text>{res}</Text>
										</BreadcrumbItem>
									)
							)}
						</Breadcrumb>
					</VStack>
				</Stack>
			</Stack>
		</Center>
	);
}
