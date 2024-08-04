import React from 'react'
import {ColorModeSwitcher} from '../ColorModeSwitcher';
import {RiDashboardFill, RiLogoutBoxRLine, RiMenu5Fill} from 'react-icons/ri'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/user';

const Header = ({isAuthenticated=false, user}) => {
    const {isOpen,onOpen,onClose} = useDisclosure();
    const dispatch = useDispatch();

    const logOutHandler = ()=>{
        dispatch(logout());
    }
  return (
    <>
    <ColorModeSwitcher />
    <Button zIndex={'overlay'} onClick={onOpen}  colorScheme='blue' width={'12'} height={'12'} rounded={'full'} position={'fixed'} top={'6'} left={'6'}>
        <RiMenu5Fill/>
    </Button>
    <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(10px)'}/>
        <DrawerContent>
            <DrawerHeader textAlign={'center'} justifyContent={'center'} borderBottom={'1px'}>JacobWatches</DrawerHeader>
            <DrawerBody>
                <VStack spacing={'4'} alignItems={'flex-start'}>
                    <Link onClick={onClose} to='/' >
                        <Button variant={'ghost'}>HOME</Button>
                    </Link>
                    <Link onClick={onClose} to='/courses' > <Button variant={'ghost'}>BROWSE ALL PRODUCTS</Button></Link>
                    <Link onClick={onClose} to='/request' > <Button variant={'ghost'}>REQUEST A PRODUCT</Button></Link>
                    <Link onClick={onClose} to='/contact' > <Button variant={'ghost'}>CONTACT US</Button></Link>
                    <Link onClick={onClose} to='/about' > <Button variant={'ghost'}>ABOUT US</Button></Link>

                    <HStack justifyContent={'space-evenly'} position={'absolute'} bottom={'2rem'} width={'80%'} >

                        {
                            isAuthenticated?(<>
                            <VStack>
                                <HStack>
                                    <Link onClick={onClose} to='/profile'><Button variant={'ghost'} colorScheme='blue'>PROFILE</Button></Link>
                                    <Button variant={'ghost'} onClick={logOutHandler}>
                                        <RiLogoutBoxRLine style={{margin: '4px'}} />
                                        LOG OUT</Button>
                                </HStack>
                                {
                                    user && user.role === 'admin' && (
                                        <Link onClick={onClose} to='/admin/dashboard'>
                                            <Button colorScheme='purple' variant={'ghost'}>
                                                <RiDashboardFill style={{margin: '4px'}} />
                                                DASHBOARD
                                            </Button>
                                        </Link>
                                    )
                                }
                            </VStack>
                            </>):(<>
                            <Link onClick={onClose} to='/login'><Button colorScheme='blue'>LOG IN</Button></Link>
                            <p>OR</p>
                            <Link onClick={onClose} to='/register'><Button colorScheme='blue'>SIGN UP</Button></Link>
                            </>)
                        }

                    </HStack>
                </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header
