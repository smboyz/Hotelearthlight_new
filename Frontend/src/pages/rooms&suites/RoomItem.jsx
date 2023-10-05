import React from 'react';
import { NavLink } from 'react-router-dom';

const RoomItem = ({ imageUrl, roomType, description, ac }) => {
    return (
        <div className='group shadow-[0_0_5px_2px_rgba(0,0,0,0.2)]'>
            <NavLink to={`/Rooms/${roomType} `} className='inline-block overflow-hidden w-full relative'>
                <img className="h-[300px] w-full object-cover group-hover:scale-110 transition-all duration-200 ease-linear" src={imageUrl} alt={roomType} />
                <div className='absolute w-full h-full bg-black origin-bottom-right rotate-[-45deg] scale-[2.5] opacity-0 group-hover:opacity-60 group-hover:rotate-0 transition-all duration-[0.3s] rounded-full ease-linear group-hover:right-[-35%] group-hover:bottom-[-35%]'></div>
                <p className="absolute bottom-[-10%] left-1/2 translate-x-[-50%] text-white text-2xl group-hover:bottom-[40%] group-hover:translate-y-[-50%] transition-all duration-[0.4s] border-b-2 border-orange-500">View Details</p>
            </NavLink>
            <div className='p-3 flex flex-col items-start gap-1'>
                <h3 className='sm:text-2xl text-xl font-semibold border-b-2 border-orange-500'>{roomType}</h3>
                <b>AC: {ac}</b>
                <p className='sm:text-base text-sm' dangerouslySetInnerHTML={{ __html: description.substring(0, 150) }}></p>
            </div>
        </div>
    )
}

export default RoomItem;
