import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Card_product from "./Card_product";
import { Container } from "react-bootstrap";

function NewProduct() {
    return(
    <Container>
        <div className='new-product'>
          <div className='new-product-title'>
            <h1>SẢN PHẨM MỚI</h1>
          </div>
          <div className='new-product-content'>
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide> <Card_product/></SwiperSlide>
              <SwiperSlide><Card_product/></SwiperSlide>
              <SwiperSlide> <Card_product/></SwiperSlide>
              <SwiperSlide><Card_product/></SwiperSlide>
              <SwiperSlide> <Card_product/></SwiperSlide>
              <SwiperSlide><Card_product/></SwiperSlide>
              <SwiperSlide> <Card_product/></SwiperSlide>
              <SwiperSlide><Card_product/></SwiperSlide>
              <SwiperSlide> <Card_product/></SwiperSlide>
              <SwiperSlide> <Card_product/></SwiperSlide>
            </Swiper>
          </div>
        </div>
        
      </Container>
      );
}

export default NewProduct;