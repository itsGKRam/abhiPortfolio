import { Center, FormControl, FormLabel, Text, VStack } from '@chakra-ui/react';
import { Button, Form, Input, Tabs } from 'antd';
import React from 'react';

export default function ContactMe() {
	const { TabPane } = Tabs;
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
				<Form style={{ width: '100%' }}>
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
						>
							Submit
						</Button>
					</VStack>
				</Form>
			</VStack>
		</Center>
	);
}
