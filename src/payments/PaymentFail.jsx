import { Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import {RiErrorWarningFill} from "react-icons/ri"
import { Link } from 'react-router-dom'
const PaymentFail = () => {
  return (
    <VStack height={'100vh'} justifyContent={'center'}>
        <Heading color={'red'} size={'4xl'}>
            <RiErrorWarningFill />
        </Heading>
        <Heading>Payment Failed</Heading>
        <Link to={'/subscribe'}><Button colorScheme='blue'>Try Again</Button></Link>
    </VStack>
  )
}

export default PaymentFail
