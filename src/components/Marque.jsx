"use client"
import React from 'react'
import "../styles/marque.css"
import Marquee from "react-fast-marquee";
import rt from "../assets/jac1.webp";
import next from "../assets/jac2.jpg";
import html from "../assets/jac3.webp";
import css from "../assets/jaco1.webp";
import js from "../assets/jac4.jpg";
import jac from "../assets/jac5.jpg"
import { Heading, VStack } from '@chakra-ui/react';
const Marque = ({direction="left"}) => {
  return (
    <VStack>
        <Heading padding={"30px"}>Top Selling Watches</Heading>
      <Marquee  style={{ marginTop: "50px",width: '100%'}} speed={80} pauseOnHover={true} direction={direction}>
      <div className='image_wraper' >
      <img className="imgSkill"  src={rt} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img height={"160px"} width={"160px"} style={{objectFit: "contain"}} src={next} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img height={"160px"} width={"160px"}  src={html} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img height={"170px"} width={"170px"} src={css} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img height={"150px"} width={"150px"} style={{objectFit: "cover"}} src={js} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img height={"160px"} width={"160px"}  src={html} alt="profile"  />
        </div>
        <div className='image_wraper' >
      <img height={"150px"} width={"150px"} style={{objectFit: "cover"}}  src={jac} alt="profile"  />
        </div>
          </Marquee>
    </VStack>
  )
}

export default Marque
