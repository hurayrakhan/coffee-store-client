import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <>
           <Header></Header> 
           <Outlet></Outlet>
           <Footer></Footer>
        </>
    );
};

export default Root;