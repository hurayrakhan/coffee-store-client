import React from 'react';

const Coffees = ({ coffee, handleDelete }) => {

    const { _id, photo, name, price, } = coffee;
    return (
        <div className="card card-side bg-[#F4F3F0]/60  p-4 shadow-sm">
            <div className='bg-white rounded-xl w-42 flex justify-center'>
                <img
                    className='h-42'
                    src={photo}
                    alt="Movie" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Coffee name : {name}</h2>
                <p>Price : {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    <button onClick={() => {
                        handleDelete(_id)
                    }} className='btn btn-neutral '>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Coffees;