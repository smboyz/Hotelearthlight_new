import React, { useEffect, useState } from 'react';
import RoomData from '../../data/RoomData';
import RoomItem from '../rooms&suites/RoomItem';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const OurRoom = () => {
    // const data = RoomData.slice(0, 3)
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
        <section className='py-10'>
            <div className="container flex flex-col items-center">
                <h2 className='text-2xl font-semibold mb-6 text-orange-500'>{room && room.name}</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full mb-10'>
                    {room_1 && room_1.slice(0,3).map((dataItem) => (
                        <RoomItem key={dataItem.id} imageUrl={dataItem.bannerimage} roomType={dataItem.name} description={dataItem.short_desc} ac={dataItem.caption} />
                    ))}
                </div>
                <NavLink to="/Rooms" className='inline-block py-2 px-3 bg-emerald-600 text-white rounded-md hover:bg-orange-500 transition-all duration-200 ease-linear'>View More</NavLink>
            </div>
        </section>
    )
}

export default OurRoom;
