import React from 'react';
import { NavLink } from 'react-router-dom';
import ServiceData from '../../data/ServiceData';

const Services = () => {
    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src="/src/assets/images/contact-bg.webp" alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>Hotel Earth Light</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>Our Services</p>
                    </span>
                </div>
            </section>
            <section className='py-10'>
                <div className="container flex flex-col items-center">
                    <h2 className='text-2xl font-bold text-orange-500 mb-2'>Our Services</h2>
                    <div className='flex flex-col md:gap-0 gap-6 w-full'>
                        {ServiceData.map((data, index) => (
                            <div key={data.id} className='w-full relative'>
                                <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'ms-auto'}`}>
                                    <img className='w-full lg:h-[500px] md:h-[400px] h-[200px] object-cover md:rounded-sm' src={data.imageUrl} alt={data.title} />
                                </div>
                                <div className={`${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} md:absolute flex flex-col  md:top-1/2 md:-translate-y-1/2 md:rounded-lg md:w-2/3 bg-gray-100 md:bg-opacity-80 md:border md:border-gray-200 items-center lg:py-10 md:py-6 lg:px-12 md:px-8 py-3 px-5`}>
                                    <h2 className='sm:text-xl text-lg font-semibold mb-2 border-b-2 border-orange-500'>{data.title}</h2>
                                    <p className='lg:text-base sm:text-sm text-[13px]'>{data.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;