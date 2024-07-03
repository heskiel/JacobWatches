import { HStack, Heading, VStack, Text, Button, Stack, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {RiDeleteBin7Fill} from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromPlaylist } from '../redux/actions/profile'
import { cancelSubscription, loadUser } from '../redux/actions/user'
import toast from 'react-hot-toast'

const Profile = ({user}) => {
    const dispatch = useDispatch();
    
    const {error, message} = useSelector(state => state.profile);
    const {error:subscriptionError, message:subscriptionMessage} = useSelector(state => state.subscription);

    const removePlaylistHandler = async(id) => {
        await dispatch(removeFromPlaylist(id));
        dispatch(loadUser());
    }

    const cancelSubscriptionHandler = () =>{
        dispatch(cancelSubscription());
    }
    useEffect(() => {
        if(error) {
            toast.error(error);
            dispatch({type: 'clearError'});
        }
        if(message) {
            toast.success(message);
            dispatch({type: 'clearMessage'});
        }
        if(subscriptionError) {
            toast.error(subscriptionError);
            dispatch({type: 'clearError'});
        }
        if(subscriptionMessage) {
            toast.success(subscriptionMessage);
            dispatch({type: 'clearMessage'});
            dispatch(loadUser());
        }
    }, [error, message, dispatch, subscriptionError, subscriptionMessage]);

  return (
    <VStack minH={'100vh'} padding={'30px'} justifyContent={'center'}>
        <Heading>Profile</Heading>
        <HStack mt={'10'}>
            <Text fontWeight={'bold'}>Name : </Text>
            <Text>{user.name}</Text>
        </HStack>
        <HStack>
            <Text fontWeight={'bold'}>Email : </Text>
            <Text>{user.email}</Text>
        </HStack>
        <HStack>
            <Text fontWeight={'bold'}>Created At : </Text>
            <Text>{user.createdAt.split("T")[0]}</Text>
        </HStack>
        {
            user.role !== 'admin' && <HStack>
                <Text fontWeight={'bold'}>Subscription : </Text>
                {
                    user.subscription && user.subscription.status === "active" ? (
                        <Button onClick={cancelSubscriptionHandler} colorScheme='blue'>Cancel Subscription</Button>
                    ):
                    <Link to={'/subscribe'}><Button colorScheme='blue'>Subscribe</Button></Link>
                }
            </HStack>
        }
        <HStack mt={'2'}>
            <Link to={'/updateprofile'}><Button colorScheme='blue'>Update Profile</Button></Link>
            <Link to={'/changepassword'}><Button colorScheme='blue'>Change Password</Button></Link>
        </HStack>
        <Heading mt={'8'}>Cart</Heading>
        {
            user.playlist.length > 0 &&(
                <Stack direction={['column' , 'row']}
                alignItems={'center'} flexWrap={'wrap'} p={'4'}>
                    {
                        user.playlist.map((element, index) =>(
                            <VStack w={'48'} m={'2'} key={element.course}>
                                <Image boxSize={'full'} objectFit={'contain'} src={element.poster} />

                                <HStack>
                                    <Link to={`/course/${element.course}`}>
                                        <Button colorScheme='blue'>Buy Now</Button>
                                    </Link>
                                    <Button onClick={() => removePlaylistHandler(element.course)}>
                                        <RiDeleteBin7Fill />
                                    </Button>
                                </HStack>
                            </VStack>
                        ))
                    }
                </Stack>
            )
        }
    </VStack>
  )
}

export default Profile
