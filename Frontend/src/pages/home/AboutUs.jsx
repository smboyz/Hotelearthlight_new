import React from 'react'
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className='grid md:grid-cols-2 gap-5 w-full'>
                    <div className="relative md:block hidden w-full bg-no-repeat bg-cover pb-4 bg-[url('/src/assets/images/transparent-bg.png')]">
                        <img src="/src/assets/images/about-image2.jpg" alt="image" className='h-[400px] w-[60%] object-cover ms-auto' />
                        <img src="/src/assets/images/about-image1.jpg" alt="image" className='absolute top-[calc(50%-125px)] object-cover left-5 z-10 w-[80%] h-[250px]' />
                    </div>
                    <div className='flex flex-col md:items-start items-center gap-2'>
                        <h2 className='text-2xl font-semibold text-orange-500'>About Us</h2>
                        <div className='text-gray-700 lg:text-base text-sm flex flex-col md:items-start items-center'>
                            <big className='sm:text-3xl text-black text-2xl font-bold '>Hotel Earth Light</big>
                            <p className=' mb-1'>Hotel Earth Light Sauraha located in Chitwan National Park. Uniquely designed universally accessed classical villas offer an outstanding comfort and tranquility where one can undoubtedly feel staying in not only in a hotel but also in a palace. Red roofed buildings are simply look on white walls truly fascinates the guests. </p>
                            <p className=' text-sm'>Hotel Earth Light has symbolically managed a welcoming environment from the first entrance where every guest feels honor to be in and experience homely. Probably the first resort in Nepal, It has practically created universal accessed into all the area like Lobby, Dinning, Rooms and Swimming Pool and the garden.</p>
                        </div>
                        <NavLink to="/About" className='inline-block bg-emerald-600 py-2 px-3 text-white rounded-md hover:bg-orange-500 transition-all duration-200 ease-linear'>About Us</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
