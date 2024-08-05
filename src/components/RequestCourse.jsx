import React, {useEffect, useState} from 'react'
import { Card, CardBody, Stack, Heading,Box, VStack, Input, FormLabel, Button, Textarea } from '@chakra-ui/react'
import { courseRequest } from '../redux/actions/other'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const RequestCourse = () => {
  return (
    <div>
      <VStack height={'100vh'} justifyContent={'center'}>
      <RequestCard />
      </VStack>
    </div>
  )
}
const RequestCard = () =>{
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const {error, message: stateMessage} = useSelector(state => state.other);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(courseRequest(name, email, course));
  };

  useEffect(() => {
    if(error) {
      toast.error(error);
      dispatch({type: 'clearError'});
    }
    if(stateMessage) {
      toast.success(stateMessage);
      dispatch({type: 'clearMessage'});
    }
  }, [dispatch, error, stateMessage])
  return(
      <Card maxW='xl' bg='rgba(0, 28, 28, 0.9)' color={'white'} padding={10}>
              <CardBody>
                  <Heading  display={'flex'} justifyContent={'center'} >Request a Product</Heading>
                  <Stack mt='6' spacing='3'>
                      <form onSubmit={submitHandler}> 
                          
                          <FormLabel htmlFor='name' children="Enter your name" />
                          <Input required id='name' value={name} onChange={(e) =>setName(e.target.value)} placeholder='Enter name' type='text' />
                          <FormLabel htmlFor='email' children="Email Address" />
                          <Input required id='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='abc@gmail.com' type='email' />
                          <FormLabel mt={'4'} htmlFor='password' children="Product Description" />
                          <Textarea value={course} onChange={(e) =>setCourse(e.target.value)} placeholder='Enter product details' />
                          <Button colorScheme='blue' type='submit' mt={'3'} width={'full'}>Send Request</Button>
                          
                      </form>
                  </Stack>
                  <Box mt="4" borderTop="2px solid #009080" />
              </CardBody>
          </Card>
  )
}
export default RequestCourse
