import { Center, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Social from '../Social';

export default function Menu(props) {
	function MenuLink(props) {
		return (
			<Text
				cursor={`pointer`}
				whiteSpace={`nowrap`}
				fontWeight={`semibold`}
				{...props}
			>
				{props.children}
			</Text>
		);
	}

	return (
		<Stack {...props} spacing={5}>
			<Stack
				direction={[`column`, `column`, `row`, `row`]}
				alignItems={`center`}
				spacing={`3`}
			>
				<MenuLink>About Me</MenuLink>
				<MenuLink>Skills</MenuLink>
				<MenuLink>Work History</MenuLink>
				<MenuLink>Contact Me</MenuLink>
			</Stack>
			<Center display={[`flex`, `flex`, `none`, `none`]}>
				<Social direction='row' />
			</Center>
		</Stack>
	);
}
