import React from 'react';
import { NavLink } from 'react-router-dom';
import Data from '../../data/KeyFeatureData';

const Feature = () => {
    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src="/src/assets/images/contact-bg.webp" alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>Hotel Earth Light</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>Features</p>
                    </span>
                </div>
            </section>
            <section className='py-10'>
                <div className="container">
                    <div className='flex md:flex-row flex-col items-center gap-6 w-full'>
                        <div className='md:w-8/12 w-full flex flex-col md:items-start items-center'>
                            <h2 className='text-2xl font-bold text-orange-500 mb-2'>Our Features</h2>
                            <h3 className='sm:text-xl text-lg font-bold border-b-2 border-orange-500 mb-1'>Visit Hotel Earthlight</h3>
                            <div className='p-2 bg-gray-100 lg:text-base text-sm'>
                                <p className='mb-1'>Hotel’s environment has flourished with Lavished Lobby, 24 hours Front Desk, and all day Dinning, Business Halls, Open Garden, Swimming Pool, Open Bar, Roof Top and private parking.We have also set up a luxury business hall in the capacity of around 100 people. Business corporate, Organization and group of different interest people certainly love our program hall arrangements and service. We are fully equipped with technology and infrastructures where our cultured staffs are always welcoming to fulfill the guest luxury. We cordially welcome our every guest in very natural way where they feel comfort and own.</p>
                                <p>Well set up wood furnished sophisticated rooms are equipped with flat-screen TV with satellite channels, Minibar and a private bathroom, bath tub with free toiletries. Verities of rooms, beds and facilities are exceptionally matched the guest’s need and interest. All buildings surrounded by seasonal terraced garden field views simultaneously offer National Park view, Mountains view. Hotel’s environment has flourished with Lavished Lobby, 24 hours Front Desk, and all day Dinning, Business Halls, Open Garden, Swimming Pool, Open Bar, Roof Top and private parking.</p>
                            </div>
                        </div>
                        <div className='md:w-4/12 w-full'>
                            <img className='w-full lg:h-auto md:h-[300px] h-auto ms-auto object-cover p-1 border-2 border-dashed border-orange-500' src="/src/assets/images/earthlight.png" alt="image" />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 w-full mt-10 '>
                        {Data.map((dataItem) => (
                            <div key={dataItem.id} className='flex flex-col items-start'>
                                <h3 className='sm:text-xl text-lg font-medium border-b-2 border-orange-500 mb-1'>{dataItem.title}</h3>
                                <ul className='text-gray-700 flex flex-col items-start gap-1 sm:text-base text-sm'>
                                    {dataItem.item.map((listItem) => (
                                        <li className='flex items-center gap-1'><i className="fa-solid fa-check"></i>{listItem}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature;