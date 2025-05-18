import React from 'react';
import logo from '../assets/more/logo1.png'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";


const Footer = () => {
    return (
        <div className="bg-[url('/13.jpg')] bg-cover">
            <div className='w-10/12 mx-auto flex flex-col-reverse md:flex-row'>
                <div className='flex-1 my-10'>
                    <img className='h-16' src={logo} alt="" />
                    <h3 className='text-[#331A15] text-2xl font-semibold py-4'>Expresso Emporium</h3>
                    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex gap-3 text-[#331A15] my-4'>
                        <a className='text-3xl' href='https://www.facebook.com/hurayra.khan.965' target='_blank'><FaFacebook /></a>
                        <a className='text-3xl' href='https://x.com/imhurayrakhan' target='_blank'><FaTwitter /></a>
                        <a className='text-3xl' href='https://www.linkedin.com/in/hurayrakhan/' target='_blank'><FaLinkedin /></a>
                        <a className='text-3xl' href='https://github.com/hurayrakhan' target='_blank'><FaGithub /></a>
                        <a className='text-3xl' href='https://www.instagram.com/_hurayra_khan/' target='_blank'><FaInstagram /></a>

                    </div>
                    <h4 className='text-[#331A15] text-2xl font-medium '>Get in touch</h4>
                    <div className='space-y-2 mb-7 mt-2'>
                        <p className='flex items-center gap-3'><IoCall /> +8801601770023</p>
                        <p className='flex items-center gap-3'><IoMdMail /> imhurayrakhan@gmail.com</p>
                        <p className='flex items-center gap-3'><FaLocationDot /> khulna, Bangladesh.</p>
                    </div>
                </div>
                <div className='flex-1 pl-10 my-10'>
                    <h3 className='text-[#331A15] text-2xl font-medium py-4'>Contact with Us</h3>
                    <form className='space-y-3'>
                        
                            <input type="text" name='name' className="input w-full bg-white" placeholder="Enter your name" />

                            <input type="email" name='email' className="input w-full bg-white" placeholder="Enter your email" />

                    
                            <textarea  name='message' className="input w-full bg-white h-32" placeholder="Type your message here..."></textarea>

                        <input type="submit" className='border-2 border-[#331A15] font-semibold text-[#331A15] px-4 py-2 rounded-4xl' value="Send Message" />
                        
                    </form>
                </div>
            </div>
            <div className='p-4 bg-[url("/24.jpg")] bg-cover text-center'> 
                <p className='text-white text-lg'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;