import React from 'react'
import {Card, CardBody, CardHeader, CardFooter, Heading, Text, Button, VStack} from "@chakra-ui/react"
import {RiCheckboxCircleFill} from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const reference = useSearchParams()[0].get("reference");
  return (
    <VStack height={'100vh'} justifyContent={'center'}>
        <Heading>You have Pro Pack</Heading>
        <Card align='center' maxW={'md'}>
            <CardHeader>
                <Heading color={'green'} size='md'> Payment Success</Heading>
            </CardHeader>
            <CardBody>
                <Text>Congratulations you're a pro member. You have access to premium content</Text>
                <Heading color={'green'} display={'flex'} justifyContent={'center'} size={'4xl'}>
                <RiCheckboxCircleFill  />
                </Heading>
            </CardBody>
            <CardFooter>
                <VStack mt={'-9'}>
                <Link to={"/profile"}><Button variant={'ghost'} w={'full'} colorScheme='blue'>Go to Profile</Button></Link>
                <Heading size={'xs'}>
                    Reference: {reference}
                </Heading>
                </VStack>
            </CardFooter>
        </Card>
    </VStack>
  )
}

export default PaymentSuccess
