import { Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import {RiErrorWarningFill} from "react-icons/ri"
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <VStack height={'100vh'} justifyContent={'center'}>
        <Heading  size={'4xl'}>
            <RiErrorWarningFill />
        </Heading>
        <Heading>404 Page not Found</Heading>
        <Link to={'/'}><Button colorScheme='blue'>Go to Home</Button></Link>
    </VStack>
  )
}

export default NotFound
