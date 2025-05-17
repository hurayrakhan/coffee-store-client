import React from 'react';
import logo from '../assets/more/logo1.png'


const Header = () => {
    return (
        <div className="bg-[url('/15.jpg')] bg-cover text-white">
            <div className='flex justify-center items-center py-3 gap-4'>
                <img className='h-12' src={logo} alt="" />
                <h3 className='text-2xl font-semibold'>Expresso Emporium</h3>
            </div>
        </div>
    );
};

export default Header;