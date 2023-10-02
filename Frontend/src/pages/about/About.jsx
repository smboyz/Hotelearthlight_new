import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src="/src/assets/images/contact-bg.webp" alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>Hotel Earth Light</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>About Us</p>
                    </span>
                </div>
            </section>
            <section className='py-10'>
                <div className="container">
                    <div className='flex items-center lg:flex-row flex-col gap-6 w-full'>
                        <div className='lg:w-8/12 w-full flex flex-col lg:items-start items-center'>
                            <h2 className='text-2xl font-semibold mb-1 text-orange-500'>About Us</h2>
                            <h3 className='sm:text-xl text-lg text-center font-bold border-b-2 border-orange-500 mb-1' >Welcome to Hotel Earth Light</h3>
                            <div className='text-gray-700 sm:text-[15px] text-sm bg-gray-100 p-2'>
                                <p>Hotel Earth Light Sauraha located in Chitwan National Park. Uniquely designed universally accessed classical villas offer an outstanding comfort and tranquility where one can undoubtedly feel staying in not only in a hotel but also in a palace. Red roofed buildings are simply look on white walls truly fascinates the guests. </p>
                                <p className='my-1'>Hotel Earth Light has symbolically managed a welcoming environment from the first entrance where every guest feels honor to be in and experience homely. Probably the first resort in Nepal, It has practically created universal accessed into all the area like Lobby, Dinning, Rooms and Swimming Pool and the garden.</p>
                                <p>Well set up wood furnished sophisticated rooms are equipped with flat-screen TV with satellite channels, Minibar and a private bathroom, bath tub with free toiletries. Verities of rooms, beds and facilities are exceptionally matched the guest’s need and interest. All buildings surrounded by seasonal terraced garden field views simultaneously offer National Park view, Mountains view. Hotel’s environment has flourished with Lavished Lobby, 24 hours Front Desk, and all day Dinning, Business Halls, Open Garden, Swimming Pool, Open Bar, Roof Top and private parking.</p>
                            </div>
                        </div>
                        <div className='lg:w-4/12 w-full border-2 border-orange-400 p-1'>
                            <img className='w-full h-[350px] object-cover' src="/src/assets/images/about-image1.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
