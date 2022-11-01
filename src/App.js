
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Banner from './component/Banner';
import Card_product from './component/Card_product';
import Header from './component/Header/Header';
import Slider from './component/Slider';
import './styles/Main_styles.css';

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Login from './Pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Product_detail from './Pages/Product_detail';
import Footer from './component/Footer/Footer';

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="reg" element={<Login />} />
        <Route path='dp' element={<Product_detail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>  
    
  );
}

export default App;
