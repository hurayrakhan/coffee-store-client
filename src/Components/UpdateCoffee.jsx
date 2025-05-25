import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, chef, supplier, taste, price, photo, details} = coffee

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const formdata = new FormData(form);
        const coffeeData = Object.fromEntries(formdata.entries());

        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
        .then(res => res.json())
        .then(data => {
            console.log('data after update', data)
        })

    }
    
    return (
        <div className="bg-[url('./11.png')] bg-cover bg-no-repeat mb-10">
            <div className='w-8/12 mx-auto'>
                <NavLink to={'/'} className='w-[170px] flex items-center gap-2 text-lg font-semibold py-2 pl-1 pr-4 my-2 hover:bg-gray-200 hover:rounded '><FaArrowLeftLong /> Back to home</NavLink>
                <div className="bg-[#F4F3F0] bg-cover px-25 py-10 rounded-2xl">
                    <div className='max-w-3xl mx-auto'>
                        <h3 className='text-2xl font-bold py-3 text-center'>Update Coffee</h3>
                        <p className='text-center '>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <form onSubmit={handleUpdateCoffee} className='my-10 '>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Name</label>
                                <input type="text" name='name' required defaultValue={name} className="input w-full" placeholder="Enter coffee name" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Chef</label>
                                <input type="text" name='chef' defaultValue={chef} className="input w-full" placeholder="Enter coffee chef" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Supplier</label>
                                <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Enter supplier name" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Taste</label>
                                <input type="text" name='taste' defaultValue={taste} className="input w-full" placeholder="Enter coffee taste" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Price</label>
                                <input type="text" name='price' defaultValue={price} required className="input w-full" placeholder="Enter coffee price" />
                            </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Details</label>
                                <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Enter coffee details" />
                            </fieldset>

                        </div>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 mt-4">

                            <label className="label">Photo URL</label>
                            <input type="url" name='photo' defaultValue={photo} required className="input w-full" placeholder="Enter photo URL" />
                        </fieldset>
                        <input className='btn bg-[#D2B48C] border-2 border-[#331A15] mt-7 w-full' type="submit" value="Update Coffee" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;