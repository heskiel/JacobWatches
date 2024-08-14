import React, { useState } from 'react';
import login_bg from "../assets/login_bg.mp4";
import "../auth/login.css";
import { Card, CardBody, Stack, Heading,Box, VStack, Input, FormLabel, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/user';
const Login = () => {
  return (
    <div className='login'>
      <video className="video-background" autoPlay muted loop>
        <source src={login_bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <VStack height={'100vh'} justifyContent={'center'}>
        <LoginCard />
      </VStack>
    </div>
  );
};
const LoginCard = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(login(email, password));
    }
    return(
        <Card maxW='lg' bg='rgba(0, 28, 28, 0.9)' color={'white'}>
                <CardBody>
                    <Heading >Welcome back Richies</Heading>
                    <Stack mt='6' spacing='3'>
                        <form onSubmit={submitHandler}>
                            <FormLabel htmlFor='email' children="Email Address" />
                            <Input required id='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' />
                            <FormLabel mt={'4'} htmlFor='password' children="Password" />
                            <Input value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='Enter password' />
                            <Link to={'/forgetpassword'}><Button mt={'3'} fontSize={'sm'} variant='link'>Forget Password ?</Button></Link>
                            <Button colorScheme='blue' type='submit' mt={'3'} width={'full'}>Login</Button>
                            <Text mt={'2'}>New User ? <Link to={'/register'}><Button variant={'link'}>SignUp</Button> </Link> Here</Text>
                        </form>
                    </Stack>
                    <Box mt="4" borderTop="2px solid #008080" />
                </CardBody>
            </Card>
    )
}
export default Login;

