import { Box, Button, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import {getCourseLectures} from "../redux/actions/course"

const CoursePage = ({user}) => {
    
    const [lectureNumber, setLectureNumber]=useState("0");
    const {lectures} = useSelector(state => state.course);


    const dispatch = useDispatch();
    const params = useParams();

    useEffect(()=>{
        dispatch(getCourseLectures(params.id));
    },[dispatch, params.id]);

    if(user.role !== "admin" && (user.subscription === undefined || user.subscription.status !== 'active')){
        return <Navigate to={"/subscribe"} />
    }
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}
    >
        {
            lectures && lectures.length > 0 ? (
                <>
                <Box>
            <video width={'100%'} controls controlsList='nodownload noremoteplayback' disablePictureInPicture disableRemotePlayback src={lectures[lectureNumber].video.url}></video>
            <Heading mt={'4'}>#{lectureNumber+1} {lectures[lectureNumber].title}</Heading>
            <Heading mt={'4'}>Description</Heading>
            <Text mt={'4'}>{lectures[lectureNumber].description}</Text>
        </Box>
        <VStack>
            {
                lectures.map((element, index) =>(
                    <Button onClick={() => setLectureNumber(index)} width={'100%'} key={element._id}>
                        <Text>{index+1} {element.title}</Text>
                    </Button>
                ))
            }
        </VStack>
                </>
            ) : 
            <Heading>No Lectures Found</Heading>
        }
    </Grid>
  )
}

export default CoursePage
