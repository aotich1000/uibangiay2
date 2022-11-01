import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Card_product from "./Card_product";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";



function ForMale() {

    return(
    <Container>
        <div className="for-Male-category">
            <Link to={'/'} className="active">Nam</Link>
            <Link to={'/'}>Hunter</Link>
            <Link to={'/'}>Sandal</Link>
            <Link to={'/'}>Giày thể thao</Link>
            <Link to={'/'}>Giày chạy bộ</Link>
            <Link to={'/'}>Dép</Link>
        </div>
        <div className="for-Male-content">
            <div className="for-Male-item"><Card_product/></div>
            <div className="for-Male-item"><Card_product/></div>
            <div className="for-Male-item"><Card_product/></div>
            <div className="for-Male-item"><Card_product/></div>
            <div className="for-Male-item"><Card_product/></div>
            <div className="for-Male-item"><Card_product/></div>
            <div className="for-Male-item"><Card_product/></div>
            <div className="for-Male-item"><Card_product/></div>
            <div className="for-Male-item"><Card_product/></div>
            <div className="for-Male-item"><Card_product/></div>
            
        </div>
        <div className="more">
            <Link to={'/'}> Còn nữa, nhấn để xem thêm </Link>
        </div>
      </Container>
      );
}

export default ForMale;