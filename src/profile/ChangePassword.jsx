import React, { useEffect, useState } from 'react'
import { Button, Heading, Input,  VStack } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { changepassword } from '../redux/actions/profile';
import toast from "react-hot-toast";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(changepassword(oldPassword, newPassword));
    }

    const { message, error} = useSelector(state => state.profile);
    useEffect(() =>{
      if(error) {
        toast.error(error);
        dispatch({type: 'clearError'});
      }
      if(message) {
        toast.success(message);
        dispatch({type: 'clearMessage'});
      }
    }, [dispatch,error,message])

  return (
    <VStack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Heading mb={'10'}>Change Password</Heading>
        <form onSubmit={submitHandler}>
        <Input type='text' value={oldPassword} onChange={(e) =>setOldPassword(e.target.value)} placeholder='Old Password' />
        <Input mt={'4'} type='password' value={newPassword} onChange={(e) =>setNewPassword(e.target.value)} placeholder='New Password' />
        <Button mt={'4'} colorScheme='blue' width={'full'} type='submit'>Change Password</Button>
        </form>
    </VStack>
  )
}

export default ChangePassword
