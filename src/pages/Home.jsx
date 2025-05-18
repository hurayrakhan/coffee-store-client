import React from 'react';
import { useLoaderData } from 'react-router';
import Coffees from '../Components/Coffees';

const Home = () => {
    const coffeeData = useLoaderData();
    return (
        <div className='bg-[url("/1.png")] bg-cover bg-no-repeat'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-9/12 mx-auto my-10'>

                {
                    coffeeData.map(coffee => <Coffees key={coffee.id} coffee={coffee}></Coffees>)
                }
            </div>
        </div>
    );
};

export default Home;