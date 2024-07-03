import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../redux/actions/profile';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const {error, message} = useSelector(state => state.profile)

    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(forgetPassword(email));
    };

    useEffect(() => {
      if(error) {
        toast.error(error);
        dispatch({type: 'clearError'});
      }
      if(message) {
        toast.success(message);
        dispatch({type: 'clearMessage'});
      }
    },[dispatch,error,message]);


  return (
    <VStack height={'90vh'} justifyContent={'center'}>
        <Heading>Forgot Password</Heading>
        <form onSubmit={submitHandler}>
        <Input mt={'8'} type='email' placeholder='Enter email..' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type='submit' colorScheme='blue' mt={'4'} width={'full'}>Send Reset Link</Button>
        </form>
    </VStack>
  )
}

export default ForgetPassword
