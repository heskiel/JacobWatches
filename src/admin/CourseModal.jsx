import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';

export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: "100%",
    backgroundColor: 'white',
    color: 'blue',
};
const fileUploadStyle = {
    '&::file-selector-button' : fileUploadCss,
};

const CourseModal = ({isOpen, onClose, id, deleteButtonHandler, courseTitle, lectures=[], addLectureHandler}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState("");
    const [videoPrev, setVideoPrev] = useState("");

    const changeVideoHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
    
        reader.onloadend = () =>{
            setVideoPrev(reader.result);
            setVideo(file);
        };
    };
    const handleClose = () =>{
        setTitle("");
        setDescription("");
        setVideo("");
        setVideoPrev("");
        onClose();
    }

  return (
    <Modal isOpen={isOpen} size={'full'} onClose={handleClose} scrollBehavior='inside'>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{courseTitle}</ModalHeader>
            <ModalCloseButton onClose={onClose} />
            <ModalBody p={'16'}>
                <Grid templateColumns={['1fr', '3fr 1fr']}>
                    <Box px={["0", "16"]}>
                        <Box my={"5"}>
                            <Heading>{courseTitle}</Heading>
                            <Heading size={'sm'} opacity={'0.4'}>#{id}</Heading>
                        </Box>
                        <Heading size={'lg'}>Lectures</Heading>
                        {
                            lectures.map((item, i) =>(
                                
                                <VideoCard key={i} title={item.title} description={item.description} num={i+1} lectureId={item._id} courseId={id} deleteButtonHandler={deleteButtonHandler} />
                            ))
                        }
                    </Box>
                    <Box>
                        <form onSubmit={e => addLectureHandler(e, id, title, description, video)}>
                            <VStack spacing={"4"}>
                                <Heading size={"md"}>Add Lecture</Heading>
                                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                                <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
                                <Input accept='video/mp4' required type='file' css={fileUploadStyle} onChange={changeVideoHandler}/>
                                {
                                    videoPrev && (
                                        <video controlsList='nodownload' controls src={videoPrev}></video>
                                        
                                    )
                                }
                                <Button w={'full'} colorScheme='blue' type='submit'>Upload</Button>
                            </VStack>
                        </form>
                    </Box>
                </Grid>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleClose}>Close</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

export default CourseModal;

function VideoCard({title, description, num, lectureId, courseId, deleteButtonHandler }){
    return<Stack direction={['column', 'row']}my={'8'} borderRadius={'lg'} boxShadow={'0 0 10px rgba(107, 70, 193, 0.5)'} justifyContent={['flex-start', 'space-between']} p={['4', '8']}>
        <Box>
            <Heading size={'sm'}>{num}{title}</Heading>
            <Text>{description}</Text>
        </Box>
        <Button color={'blue'} onClick={() => deleteButtonHandler(courseId, lectureId)}>
            <RiDeleteBin7Fill />
         </Button>
    </Stack>
}
