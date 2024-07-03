import { Button, Heading, Input, VStack } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { updateProfile } from '../redux/actions/profile';
import { loadUser } from '../redux/actions/user';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({user}) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async(e) =>{
      e.preventDefault();
      await dispatch(updateProfile(name, email));
      dispatch(loadUser());
      navigate("/profile");
    };

    const {message, error} = useSelector(state => state.profile)
    useEffect(() =>{
      if(error) {
        toast.error(error);
        dispatch({type: 'clearError'});
      }
      if(message) {
        toast.success(message);
        dispatch({type: 'clearMessage'});
      }
    },[dispatch, error, message]);

    

  return (
    <VStack height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Heading mb={'10'}>Update User Profile</Heading>
        <form onSubmit={submitHandler}>
        <Input type='text' value={name} onChange={(e) =>setName(e.target.value)} placeholder='Name' />
        <Input mt={'4'} type='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='Email' />
        <Button mt={'4'} colorScheme='blue' width={'full'} type='submit'>Update</Button>
        </form>
    </VStack>
  )
}

export default UpdateProfile
