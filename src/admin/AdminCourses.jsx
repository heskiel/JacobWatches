import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, Image, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, getCourseLectures } from '../redux/actions/course';
import { deleteCourse, addLecture } from '../redux/actions/admin';
import toast from 'react-hot-toast';


const AdminCourses = () => {
    const dispatch = useDispatch();
    
    const {courses, lectures} = useSelector(state => state.course);
    const {error, message} = useSelector(state => state.admin);
    const {isOpen, onClose, onOpen} = useDisclosure();
    const [courseId, setCourseId] = useState('');
    const [courseTitle, setCourseTitle] = useState('');

    const courseDetailHandler = (courseId, title) =>{
        dispatch(getCourseLectures(courseId));
        onOpen();
        setCourseId(courseId);
        setCourseTitle(title);
    };
    const deleteButtonHandler = courseId =>{
        dispatch(deleteCourse(courseId));
    };
    const deleteLectureButtonHandler = (courseId, lectureId) => {
      console.log(courseId);
      console.log(lectureId)
    };
    const addLectureHandler = async(e, courseId, title, description, video)=>{
        e.preventDefault();
        const myForm = new FormData();
    
        myForm.append('title', title);
        myForm.append('description', description);
        myForm.append('file', video);
    
        await dispatch(addLecture(courseId, myForm));
        dispatch(getCourseLectures(courseId));
    };
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch({type: 'clearError'});
        }
        if(message) {
            toast.success(message);
            dispatch({type: 'clearMessage'});
        }
        dispatch(getAllCourses());
    },[dispatch, error, message]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0', '8']} overflowX={'auto'}>
            <Heading my={'16'} textAlign={['center', 'left']}>All Jacob Watches</Heading>
            <TableContainer w={['100vw', 'full']}>
                <Table variant={'simple'} size={'lg'}>
                    <TableCaption>All available Watches in the databases</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Poster</Th>
                            <Th>Title</Th>
                            <Th>Category</Th>
                            <Th>Price</Th>
                            <Th isNumeric>Views</Th>
                            {/* <Th isNumeric>Lectures</Th> */}
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            courses.map(item =>(
                                <Row courseDetailHandler={courseDetailHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <CourseModal isOpen={isOpen} onClose={onClose} courseTitle={courseTitle} id={courseId} deleteButtonHandler={deleteLectureButtonHandler} addLectureHandler={addLectureHandler} lectures={lectures} />
        </Box>
        <Sidebar />
    </Grid>
  )
};



export default AdminCourses;

function Row({item, courseDetailHandler, deleteButtonHandler}){
    return(
        <Tr>
            <Td>#{item._id}</Td>
            <Td>
              <Image src={item.poster.url} />
            </Td>
            <Td>{item.title}</Td>
            <Td>{item.category}</Td>
            <Td>{item.createdBy}</Td>
            <Td isNumeric>{item.views}</Td>
            <Td isNumeric>{item.numOfVideos}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    {/* <Button onClick={() => courseDetailHandler(item._id)} color={'blue'} variant={"outline"}>View Lectures</Button> */}
                    <Button onClick={() => deleteButtonHandler(item._id)} color={'blue'}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}
