import React from 'react'
import { HStack, Heading, Stack, VStack, Text, Button, Box } from "@chakra-ui/react"
import vg from "../assets/jac7.webp";
import { Link } from 'react-router-dom';
import "../styles/home.css";
import Marque from './Marque';
import Marq from "./Marq";
import Swiper from './Swiper';
import Whyus from './Whyus';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";


const Home = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div>
      <Stack>
        
        <HStack display={'flex'} flexDirection={['column', 'row']} padding={"30px"} height={"100vh"} width={"full"} justifyContent={"space-between"}>
          <VStack width={'full'} height={'100vh'} justifyContent={'center'}>
            <HStack display={'flex'} flexDirection={['column', 'row']}>
              <Heading fontSize={'3rem'} color={"blue.500"}>JacobWatches : </Heading>
              <Heading fontSize={'3rem'}><Typewriter
                options={{
                  strings: [ "Elegant", "Timeless", "Refined", "Masterpiece"],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  wrapperClassName: "typewriterpara",
                }}
              /></Heading> </HStack>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Text fontSize={'1.2rem'}>Timeless Elegance in Every Tick</Text>
            </motion.div>
            <HStack marginTop={"20px"} gap={'20px'}>
            <Link to={'/courses'}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button colorScheme='blue'>Browse Now</Button>
                  </motion.div>
                </motion.div>
              </Link>
              <Link to={'/register'}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Button colorScheme={'blue'}>Register Now</Button>
                  </motion.div>
                </motion.div>
              </Link>
            </HStack>
          </VStack>
          <VStack width={'full'} height={'100vh'} justifyContent={'center'}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img className="home_img" src={vg} alt="Logo" />
            </motion.div>
          </VStack>

        </HStack>
      </Stack>
      <Marque />
      <Marq />
      <Whyus />
      <Box marginTop={'50px'}>
        <Swiper />
      </Box>
    </div>
  )
}

export default Home
