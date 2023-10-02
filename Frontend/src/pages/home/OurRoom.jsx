import React from 'react';
import RoomData from '../../data/RoomData';
import RoomItem from '../rooms&suites/RoomItem';
import { NavLink } from 'react-router-dom';

const OurRoom = () => {
    const data = RoomData.slice(0, 3)
    return (
        <section className='py-10'>
            <div className="container flex flex-col items-center">
                <h2 className='text-2xl font-semibold mb-6 text-orange-500'>Rooms & Suites</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full mb-10'>
                    {data.map((dataItem) => (
                        <RoomItem key={dataItem.id} imageUrl={dataItem.imageUrl} roomType={dataItem.roomType} description={dataItem.description} ac={dataItem.ac} />
                    ))}
                </div>
                <NavLink to="/Rooms" className='inline-block py-2 px-3 bg-emerald-600 text-white rounded-md hover:bg-orange-500 transition-all duration-200 ease-linear'>View More</NavLink>
            </div>
        </section>
    )
}

export default OurRoom;
