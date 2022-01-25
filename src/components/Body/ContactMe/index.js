import { Center, FormControl, FormLabel, Text, VStack } from '@chakra-ui/react';
import { Button, Form, Input, Tabs } from 'antd';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

export default function ContactMe() {
	const { TabPane } = Tabs;
	const [result, showResult] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'testing1234@',
				'template_h22gow7',
				e.target,
				'user_BgpP8c8JlDKbbB2Tj8Idl',
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
		e.target.reset();
		showResult(true);
	};

	return (
		<Center
			height={`calc(100vh - 50px)`}
			width={`full`}
			bg='red.100'
			padding='20'
			alignItems={`center`}
			justifyContent={`flex-end`}
		>
			<VStack
				padding='5'
				width={`30%`}
				bg='white'
				spacing={3}
				rounded={`xl`}
				position={`relative`}
				shadow={`xl`}
				alignItems={`center`}
				justifyContent={`flex-start`}
			>
				<Text fontSize={`3xl`} fontWeight={`bold`}>
					Contact Me
				</Text>
				<Form style={{ width: '100%' }} onSubmit={sendEmail}>
					<VStack width='full' spacing='-4'>
						<FormControl>
							<FormLabel marginBottom='0' fontWeight='medium'>
								Name
							</FormLabel>
							<Form.Item
								hasFeedback
								style={{
									flexDirection: 'column',
									alignItems: 'flex-start',
								}}
								name='Name'
								rules={[{ required: true, message: '' }]}
							>
								<Input
									size='sm'
									type='text'
									placeholder='Name'
								/>
							</Form.Item>
						</FormControl>
						<FormControl>
							<FormLabel marginBottom='0' fontWeight='medium'>
								Email
							</FormLabel>
							<Form.Item
								hasFeedback
								style={{
									flexDirection: 'column',
									alignItems: 'flex-start',
								}}
								name='Email'
								rules={[{ required: true, message: '' }]}
							>
								<Input
									size='sm'
									type='email'
									placeholder='example@gmail.com'
								/>
							</Form.Item>
						</FormControl>
						<FormControl>
							<FormLabel marginBottom='0' fontWeight='medium'>
								Message
							</FormLabel>
							<Form.Item
								hasFeedback
								style={{
									flexDirection: 'column',
									alignItems: 'flex-start',
								}}
								name='Message'
								rules={[{ required: true, message: '' }]}
							>
								<Input.TextArea
									size='sm'
									placeholder='Message'
								/>
							</Form.Item>
						</FormControl>
						<Button
							htmlType='submit'
							style={{ width: '100%' }}
							type='primary'
							value='Send'
						>
							Submit
						</Button>
					</VStack>
				</Form>
			</VStack>
		</Center>
	);
}
