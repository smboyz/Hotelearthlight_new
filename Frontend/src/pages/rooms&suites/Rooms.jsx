import React from 'react'
import { NavLink } from 'react-router-dom';
import RoomData from '../../data/RoomData';
import RoomItem from './RoomItem';

const Rooms = () => {
    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src="/src/assets/images/contact-bg.webp" alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>Hotel Earth Light</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>Rooms & Suites</p>
                    </span>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className='text-2xl font-bold text-orange-500 mb-6'>Rooms & Suites</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                        {RoomData.map((dataItem) => (
                            <RoomItem key={dataItem.id} imageUrl={dataItem.imageUrl} roomType={dataItem.roomType} description={dataItem.description} ac={dataItem.ac} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rooms;
