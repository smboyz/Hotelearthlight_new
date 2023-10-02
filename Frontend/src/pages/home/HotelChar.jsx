import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Data from '../../data/FeaturedData';
import img from '/src/assets/images/features-bg.webp'

const HotelChar = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <section className={`py-14 flex items-center relative bg-fixed bg-no-repeat bg-cover bg-[url('/src/assets/images/features-bg.webp')]`}>
            <div className='absolute w-full h-full inset-0 bg-black opacity-60'></div>
            <div className="container relative w-full z-20 text-white">
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-10'>
                    {Data.map((dataItem) => (
                        <div key={dataItem.id} className='flex flex-col gap-1 items-center bg-white bg-opacity-20 py-5 border border-gray-300 rounded-md'>
                            <i className={`${dataItem.icon} md:text-xl text-lg text-orange-500`}></i>
                            <VisibilitySensor
                                onChange={(isVisible) => {
                                    if (isVisible) {
                                        setIsVisible(true);
                                    }
                                }}>
                                <CountUp className='md:text-2xl text-xl font-semibold ' end={isVisible ? dataItem.number : 0} duration={3} formattingFn={(value) => `${value}+`} />
                            </VisibilitySensor>
                            <h3 className='md:text-2xl text-xl font-medium text-orange-500 text-center'>{dataItem.title.toUpperCase()}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HotelChar;
