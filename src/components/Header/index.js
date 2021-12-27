import {
	Center,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	HStack,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { List } from 'phosphor-react';
import React from 'react';
import Menu from './Menu';

export default function Header() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Stack
			direction={`row`}
			shadow={`sm`}
			width={`full`}
			height={`50px`}
			alignItems={`center`}
			bg={`white`}
			justifyContent={`center`}
			position={`sticky`}
			top={`0`}
			zIndex={`999`}
		>
			<Container maxW={`container.xl`}>
				<Stack direction={`row`} width={`full`}>
					<HStack
						width={`full`}
						alignItems={`center`}
						justifyContent={`flex-start`}
					>
						<Text fontWeight={`bold`}>{window.WebName}</Text>
					</HStack>
					<HStack
						width={`full`}
						alignItems={`center`}
						justifyContent={`flex-end`}
					>
						<Menu
							direction={`row`}
							display={['none', `none`, `flex`, `flex`]}
						/>
						<Center
							display={['flex', `flex`, `none`, `none`]}
							onClick={onOpen}
							cursor={`pointer`}
						>
							<List size={24} />
						</Center>
					</HStack>
					{/* 
					<HStack
						display={[`none`, `none`, `flex`, `flex`]}
						width={`full`}
						alignItems={`center`}
						justifyContent={`flex-end`}
					>
						<Social direction='row' />
					</HStack> */}
				</Stack>
				<Drawer placement={`top`} onClose={onClose} isOpen={isOpen}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader borderBottomWidth='1px'>
							<Text fontWeight={`bold`}>{window.WebName}</Text>
						</DrawerHeader>
						<DrawerBody>
							<Center>
								<Menu direction={`column`} />
							</Center>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Container>
		</Stack>
	);
}
