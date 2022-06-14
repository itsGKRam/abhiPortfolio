import {
    Center,
    Flex,
    ListItem,
    Text,
    UnorderedList,
    VStack,
} from '@chakra-ui/react';
import { Image } from 'antd';
import React from 'react';
import Project from '../../assets/project.png';

export default function ProjectCard(props) {
    return (
        <Flex width={`full`} height={`full`} flexDirection={`row`} gap={0}>
            <VStack
                width={`full`}
                alignItems={`center`}
                justifyContent={`center`}
            >
                <VStack width={`90%`} alignItems={`flex-start`} spacing={1}>
                    <Text fontSize={`lg`} fontWeight={`bold`}>
                        {props?.title}
                    </Text>

                    <VStack width={`full`} alignItems={`flex-start`}>
                        <Text>{props?.description}</Text>
                    </VStack>
                    <VStack width={`full`} alignItems={`flex-start`}>
                        <UnorderedList>
                            {props?.workDone?.map((res, index) => (
                                <ListItem key={index}>
                                    <Text>{res}</Text>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    </VStack>
                </VStack>
            </VStack>
            <VStack
                width={`full`}
                alignItems={`center`}
                justifyContent={`center`}
                padding={5}
            >
                <Center width={`75%`}>
                    <Image
                        alt={props?.title}
                        preview={false}
                        style={{
                            objectFit: 'contain',
                            borderRadius: '10px',
                        }}
                        src={Project}
                    />
                </Center>
            </VStack>
        </Flex>
    );
}
