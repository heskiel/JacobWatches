import { Box, Button, Grid, HStack, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers, updateUserRole } from '../redux/actions/admin';
import toast from 'react-hot-toast';


const Users = () => {

    const dispatch = useDispatch();

    const {users, error, message} = useSelector(state => state.admin);

    const updateHandler = userId =>{
        dispatch(updateUserRole(userId));
    };
    const deleteHandler = userId =>{
        dispatch(deleteUser(userId));
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
        dispatch(getAllUsers());
    }, [dispatch, error, message]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Box p={['0', '16']} overflowX={'auto'}>
            <Heading my={'16'} textAlign={['center', 'left']}>All Users</Heading>
            <TableContainer w={['100vw', 'full']}>
                <Table variant={'simple'} size={'lg'}>
                    <TableCaption>All available users in the databases</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Id</Th>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Role</Th>
                            <Th>Subscription</Th>
                            <Th isNumeric>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            users && users.map(item =>(
                                <Row updateHandler={updateHandler} deleteHandler={deleteHandler} key={item._id} item={item} />
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
        <Sidebar />
    </Grid>
  )
};



export default Users;

function Row({item, updateHandler, deleteHandler}){
    return(
        <Tr>
            <Td>#{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.subscription && item.subscription.status==="active" ? "Active" : "Not Active" }</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => updateHandler(item._id)} color={'blue'} variant={"outline"}>Change Role</Button>
                    <Button onClick={() => deleteHandler(item._id)} color={'blue'}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}
