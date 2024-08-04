import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "../styles/swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Card, CardHeader, Flex, Avatar, Box, Text, IconButton, CardBody, CardFooter } from "@chakra-ui/react"


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Heading, VStack } from "@chakra-ui/react";

export default function Slider() {
    SwiperCore.use([Autoplay])
    return (

        <VStack height={"80vh"} justifyContent={"center"}>
            <Heading marginBottom={"20px"}>Testimonials</Heading>
            <Swiper
                autoplay={{ delay: 2000 }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                breakpoints={{
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 1.5, // or any other value you want
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 2.87, // or any other value you want
                    },
                }}
                loop={true}
                coverflowEffect={{
                    rotate: 15,
                    stretch: 0,
                    depth: 150,
                    modifier: 2,

                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameBox">
                        <TestCard />
                    </div>
                </SwiperSlide>


            </Swiper>
        </VStack>
    );
}
const TestCard = () => {
    return (
        <Card maxW='md'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                        <Box>
                            <Heading size='sm'>Segun Adebayo</Heading>
                            <Text>Creator, Chakra UI</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'

                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    With Chakra UI, I wanted to sync the speed of development with the speed
                    of design. I wanted the developer to be just as excited as the designer to
                    create a screen.
                </Text>
            </CardBody>

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
            </CardFooter>
        </Card>
    )
}