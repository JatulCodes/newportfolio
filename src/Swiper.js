import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./Portfolio.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper pagination={{
  "type": "fraction"
}} navigation={true} className=".swiper-container {
  ">
  <SwiperSlide><img src="/images/work_1.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="/images/work_2.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="/images/work_3.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="/images/work_4.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="/images/work_5.jpg" alt="" /></SwiperSlide>
  <SwiperSlide><img src="/images/work_6.jpg" alt="" /></SwiperSlide>
  </Swiper>
    </>
  )
}