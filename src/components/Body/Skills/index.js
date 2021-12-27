import { Center, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { Tabs } from 'antd';
import React from 'react';

export default function Skills() {
	const { TabPane } = Tabs;
	return (
		<Center height={`calc(100vh - 50px)`} width={`full`}>
			<VStack
				padding='5'
				width={`70%`}
				height={`60%`}
				bg='white'
				spacing={3}
				rounded={`xl`}
				position={`relative`}
				shadow={`xl`}
				alignItems={`center`}
				justifyContent={`flex-start`}
			>
				<Text fontSize={`3xl`} fontWeight={`bold`}>
					Skills
				</Text>

				<Tabs
					tabPosition={`left`}
					centered
					style={{ width: '100%', height: '100%' }}
				>
					{window.skills.map((res, index) => (
						<TabPane
							tab={res.name}
							key={index}
							style={{
								flex: '1',
								height: '100%',
							}}
						>
							<VStack
								width={`full`}
								height={`full`}
								alignItems={`flex-start`}
								overflowY={`scroll`}
							>
								{res.data.map((res2, index2) => (
									<HStack
										key={index2}
										width={`full`}
										alignItems={`center`}
									>
										<Flex
											width={`full`}
											bg='gray.100'
											roundedEnd={`full`}
											overflow={`hidden`}
										>
											<Flex
												bg='blue.200'
												width={`${res2.rating * 10}%`}
												roundedEnd={`full`}
												paddingY={1}
												paddingX={2}
												justifyContent={`space-between`}
												alignItems={`center`}
												color={`black`}
												fontWeight={`bold`}
											>
												<Text>{res2.name}</Text>
												<Text color='blue.500'>
													{res2.rating * 10}%
												</Text>
											</Flex>
										</Flex>
									</HStack>
								))}
							</VStack>
						</TabPane>
					))}
				</Tabs>

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
			</VStack>
		</Center>
	);
}
