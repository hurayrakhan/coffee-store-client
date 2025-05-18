import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Coffees from '../Components/Coffees';
import { FaCoffee } from "react-icons/fa";


const Home = () => {
    const coffeeData = useLoaderData();

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/coffees/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('data after delete', data)
        })
    };


    
    return (
        <div className='bg-[url("/1.png")] bg-cover bg-no-repeat'>
            <div>
                <div className='text-center place-items-center mt-16'>
                    <p>--- Sip & Savor ---</p>
                    <h3 className='text-[#331A15] text-2xl font-bold pb-4'>Our Popular Products</h3>
                    <Link to={'/addCoffee'} className='flex items-center text-white btn bg-[#D2B48C] border-2 border-[#331A15] hover:bg-[#F4F3F0] hover:text-[#331A15]'>Add Coffee <FaCoffee  className='text-[#331A15] text-2xl'/></Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-9/12 mx-auto my-10'>

                {
                    coffeeData.map(coffee => <Coffees key={coffee._id} handleDelete={handleDelete} coffee={coffee}></Coffees>)
                }
            </div>
        </div>
    );
};

export default Home;