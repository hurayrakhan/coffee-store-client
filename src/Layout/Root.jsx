import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
           <Header></Header> 
           <Outlet></Outlet>
        </>
    );
};

export default Root;