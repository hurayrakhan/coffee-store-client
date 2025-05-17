import React from 'react';
import logo from '../assets/more/logo1.png'


const Header = () => {
    return (
        <div className="bg-[url('/15.png')] bg-cover">
            <div className='flex justify-center items-center py-5 gap-4'>
                <img className='h-10' src={logo} alt="" />
                <h3 className='text-xl font-semibold'>Expresso Emporium</h3>
            </div>
        </div>
    );
};

export default Header;