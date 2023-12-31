import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import RoomData from '../../data/RoomData';
import RoomItem from './RoomItem';
import axios from 'axios';

const Rooms = () => {

    const [room, setRoom] = useState();
    const [room_1, setRoom_1] = useState();

    const HomeData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const roomData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Rooms & Suites"
                );
                setRoom(roomData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const room_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Rooms & Suites_1"
                );
                setRoom_1(room_1Data); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        HomeData();
    }, []);

    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src={room && room.slider_image} alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>{room && room.caption}</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>{room && room.name}</p>
                    </span>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className='text-2xl font-bold text-orange-500 mb-6'>{room && room.name}</h2>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                        {room_1 && room_1.map((dataItem) => (
                            <RoomItem key={dataItem.id} imageUrl={dataItem.bannerimage} roomType={dataItem.name} description={dataItem.short_desc} ac={dataItem.caption} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rooms;
