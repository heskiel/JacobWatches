import { Container, Grid, Heading, Input, Select, VStack, Image, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../redux/actions/admin';
import toast from "react-hot-toast";

const categories = [
    'Epic X Chrono','Palatial','Caligula' ,'Brilliant','Cusiono Tourbillon', 'Ghost'
  ]

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

const CreateCourse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState("");

    const changeImageHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
    
        reader.onloadend = () =>{
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    const dispatch = useDispatch();
    const {error, message} = useSelector(state => state.admin);

    const submitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('title', title);
        myForm.append('description', description);
        myForm.append('createdBy', createdBy);
        myForm.append('category', category);
        myForm.append('file', image);
        dispatch(createCourse(myForm));
    };

    useEffect(() => {
        if(error) {
            toast.error(error);
            dispatch({type: "clearError"});
        }
        if(message) {
            toast.success(message);
            dispatch({type: "clearMessage"});
        }
    }, [error, message, dispatch]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Container py={'16'}>
            <form onSubmit={submitHandler}>
                <Heading my={'16'} textAlign={['center', 'left']}>Add New JacobWatch</Heading>
                <VStack m={'auto'} spacing={'8'}>
                    <Input value={title} onChange={(e) =>setTitle(e.target.value)} placeholder='Title' type='text' />
                    <Input value={description} onChange={(e) =>setDescription(e.target.value)} placeholder='Description' type='text' />
                    <Input value={createdBy} onChange={(e) =>setCreatedBy(e.target.value)} placeholder='Price $' type='text' />
                    <Select  value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">Category</option>
                        {categories.map((item, index) =>(
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </Select>
                    <Input accept='image/*' required type='file' css={fileUploadStyle} onChange={changeImageHandler}/>
                    {
                        imagePrev && (
                            <Image src={imagePrev} boxSize={'64'} objectFit={'contain'}  />
                        )
                    }
                    <Button w={'full'} colorScheme='blue' type='submit'>Create</Button>
                </VStack>
            </form>
        </Container>
        <Sidebar />
    </Grid>
  )
}

export default CreateCourse
