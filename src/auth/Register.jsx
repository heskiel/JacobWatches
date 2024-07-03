import React, { useState } from 'react';
import login_bg from "../assets/login_bg.mp4";
import "../auth/login.css";
import { Card, CardBody, Stack, Heading,Box, VStack, Input, FormLabel, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/user';
const Register = () => {
  return (
    <div className='login'>
      <video className="video-background" autoPlay muted loop>
        <source src={login_bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <VStack height={'100vh'} justifyContent={'center'}>
        <RegisterCard />
      </VStack>
    </div>
  );
};
const RegisterCard = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(register(name, email, password));
    }
    return(
        <Card maxW='lg' bg='rgba(0, 28, 28, 0.9)' color={'white'}>
                <CardBody>
                    <Heading  display={'flex'} justifyContent={'center'} >Create Account</Heading>
                    <Stack mt='6' spacing='3'>
                        <form onSubmit={submitHandler}>
                            
                            <FormLabel htmlFor='name' children="Enter your name" />
                            <Input required id='name' value={name} onChange={(e) =>setName(e.target.value)} placeholder='Enter name' type='text' />
                            <FormLabel htmlFor='email' children="Email Address" />
                            <Input required id='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' />
                            <FormLabel mt={'4'} htmlFor='password' children="Password" />
                            <Input value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='Enter password' type='password' />
                            <Button colorScheme='blue' type='submit' mt={'3'} width={'full'}>Sign Up</Button>
                            <Text mt={'2'}>Already signed up ? <Link to={'/login'}><Button variant={'link'}>Login</Button> </Link> Here</Text>
                        </form>
                    </Stack>
                    <Box mt="4" borderTop="2px solid #008080" />
                </CardBody>
            </Card>
    )
}
export default Register;

