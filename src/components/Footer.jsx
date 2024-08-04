import { HStack, VStack, Text, Input, Button, Stack } from '@chakra-ui/react'
import React from 'react'
import "../styles/footer.css";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <hr />
    <Stack display={"flex"} flexDirection={["column", "row"]} justifyContent={"center"} alignItems={"center"} minH={"30vh"} className='footer'>
      <HStack display={'flex'} justifyContent={'center'} alignItems={'center'} width={["full","30%"]}>
        
          <Link className='link'>Home |</Link>
          <Link className='link'>About Us |</Link>
          <Link className='link'>Contact Us |</Link>
          <Link className='link'>Rate Us</Link>
      </HStack>
      <VStack width={["full","40%"]}>
      <Text>Built with ♡ by JacobWatches</Text>
      <Text>2024 © All Rights Reserved.</Text>
      </VStack>
      <VStack mr={["0",'30px']} width={["full","30%"]}>
      <HStack >
      <Input  placeholder='Enter Email Address' />
      <Button bgColor={'blue.500'}>Send</Button>
      </HStack>
      <Text display={'flex'} justifySelf={'center'} alignSelf={'center'}>Subscribe for Newsletter...</Text>
      </VStack>
    </Stack>
    </>
  )
}

export default Footer
