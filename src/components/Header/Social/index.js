import React from 'react';
import { InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { Center, Stack } from '@chakra-ui/react';

export default function Social(props) {
	function SocialLink(props) {
		return <Center {...props}>{props.children}</Center>;
	}
	return (
		<Stack direction={props.direction && props.direction}>
			<SocialLink>
				<InstagramLogo size={24} />
			</SocialLink>
			<SocialLink>
				<LinkedinLogo size={24} />
			</SocialLink>
		</Stack>
	);
}
