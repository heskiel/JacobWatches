import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Box, VStack } from '@chakra-ui/react'
import content from "../assets/content.png"
import learn from "../assets/learn.png"
import seo from "../assets/seo.jpg"

const Whyus = () => {
    return (
        <VStack mt={"70px"} px={4}>
            <Heading fontSize={"1.2rem"}>Why JacobWatches ?</Heading>
            <Heading display={'flex'} justifyContent={'center'} alignItems={'center'} padding={"30px"} fontSize={["1.3rem", "2rem"]}>Environment Where Craftsmanship Meets Elegance</Heading>
            <Stack display={"flex"} flexDirection={["column", "row"]} padding={"10px"} minHeight={"100vh"} width={"full"} justifyContent={"space-between"} alignItems={"center"} gap={['20px', '']}>
                <WhyCard image={seo} title={"Timeless Elegance"} text={"Our collections blend classic styles, offering elegant and sophisticated watches that enhance any wardrobe."} />
                <WhyCard image={content} title={"Unparalleled Craftsmanship"} text={" Each watch is meticulously designed and crafted with precision, ensuring you receive a timepiece of the highest quality"} />
                <WhyCard image={learn} title={"Exceptional Value"} text={"We provide luxury watches at competitive prices, delivering outstanding value without compromising on quality or design"} />
            </Stack>
        </VStack>
    )
}

const WhyCard = ({ image, title, text }) => {
    return (
        <Card maxW='sm' px={4} py={4} _hover={{ transform: 'scale(1.08)', transition: 'transform 0.5s' }}>
            <CardBody>
                <img style={{ height: "80px", width: "80px", borderRadius: "50%", marginLeft: "120px" }}
                    src={image}
                    alt={title}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading alignSelf={"center"} size='md'>{title}</Heading>
                    <Text>
                        {text}
                    </Text>
                </Stack>
                <Box mt="4" borderTop="2px solid #008080" />
            </CardBody>
        </Card>
    )
}

export default Whyus
