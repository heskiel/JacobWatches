import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from "react-router-dom"
import { resetPassword } from '../redux/actions/profile';
import toast from 'react-hot-toast';
const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const params = useParams();
    
    const {error, message} = useSelector(state => state.profile)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(resetPassword(params.token, password));
      navigate("/login");
    };

    useEffect(() =>{
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
        <Heading>Reset Password</Heading>
        <form onSubmit={submitHandler}>
        <Input mt={'8'} type='password' placeholder='Enter New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit' colorScheme='blue' mt={'4'} width={'full'}> Reset Password</Button>
        </form>
    </VStack>
  )
}

export default ResetPassword
