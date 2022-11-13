
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
import UserManager from './component/User-manager/User_manager';
import ListProduct from './Pages/List_product';

function App() {
  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Login />} />
        <Route path='product/dp' element={<Product_detail />} />
        <Route path='/user-mn' element={<UserManager/>} />
        <Route path='/product' element={<ListProduct/>}>
          <Route path='product/dp' element={<Product_detail />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>  
    
  );
}

export default App;
