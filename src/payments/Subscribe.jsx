import React, { useEffect, useState } from 'react'
import {Card, CardBody, CardHeader, CardFooter, Heading, Text, Button, VStack} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
import { server } from '../redux/store'
// import { buySubscription } from '../redux/actions/user'
import toast from 'react-hot-toast'
import logo from "../assets/lms.jpg"
import { useNavigate } from 'react-router-dom'

const Subscribe = ({user}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [key, setKey] = useState("");

    const {error, subscriptionId} = useSelector(state => state.subscription);
    const {error: courseError} = useSelector(state => state.course);

    const subscribeHandler = async() => {
        navigate("/paymentsuccess")
    };

    useEffect(()=>{
        if(error) {
            toast.error(error);
            dispatch({type: 'clearError'});
        }
        if(courseError) {
            toast.error(courseError);
            dispatch({type: 'clearError'});
        }
        if(subscriptionId){
            const openPopUp = () =>{
                const options = {
                    key,
                    name: "Learnr",
                    description: "Get access to all premium content",
                    image:logo,
                    subscription_id: subscriptionId,
                    callback_url: `${server}/paymentverification`,
                    prefill:{
                        name:user.name,
                        email:user.email,
                        contact:""
                    },
                    notes:{
                        address: "Dhiru Gupta's web-app"
                    },
                    theme:{
                        color: "#0000FF"
                    }
                };
                const razor = new window.Razorpay(options);
                razor.open();
            };
            openPopUp()
        }
    },[dispatch, error, user.name, user.email, key, subscriptionId, courseError]);

    return (
        <VStack height={'100vh'} justifyContent={'center'}>
            <Card align='center' maxW={'md'}>
            <CardHeader>
                <Heading size='md'>Proceed to buy</Heading>
            </CardHeader>
            <CardBody>
                <Text>Join our pro pack and get access to all Products.</Text>
                <Text display={'flex'} justifyContent={'center'}>30% refund at cancellation</Text>
                <Heading mt={'4'} display={'flex'} justifyContent={'center'} size={'md'}> $5000 Only</Heading>
            </CardBody>
            <CardFooter>
                <Button onClick={subscribeHandler} w={'full'} colorScheme='blue'>Buy Now</Button>
            </CardFooter>
        </Card>
        </VStack>
    )
}
export default Subscribe
