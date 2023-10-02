import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = () => {
    return (
        <section className="py-10">
            <div className="container flex flex-col items-center">
                <h2 className='text-2xl font-bold text-orange-500 mb-6'>Services</h2>
                <div className='w-full relative md:mb-0 mb-8'>
                    <div className='md:w-1/2'>
                        <img className='w-full lg:h-[500px] md:h-[400px] h-[200px] object-cover md:rounded-s-lg md:rounded-se-lg' src="/src/assets/images/dine&drinks.jpg" alt="dine & drinks" />
                    </div>
                    <div className={`md:absolute flex flex-col md:right-0 md:top-1/2 md:-translate-y-1/2 md:rounded-lg md:w-2/3 bg-gray-100 md:bg-opacity-80 md:border md:border-gray-200 items-center lg:py-10 md:py-6 py-3 lg:px-12 md:px-8 px-5`}>
                        <h2 className='sm:text-xl text-lg font-semibold mb-2 border-b-2 border-orange-500'>Dine & Drinks</h2>
                        <p className='lg:text-base sm:text-sm text-[13px]'>Indulge in an exceptional Dining & Drinks experience at our hotel. Immerse yourself in a world of culinary delights, where our talented chefs craft exquisite dishes blending international and local flavors. Enjoy the elegant ambiance of our dining spaces, complemented by impeccable service from our attentive staff. Savor handcrafted cocktails and a wide selection of beverages at our bars and lounges. Join us for special culinary events and themed nights that showcase the finest ingredients and culinary innovation. Embark on a memorable journey of taste and satisfaction at our hotel's Dining & Drinks offerings.</p>
                    </div>
                </div>
                <div className='w-full relative mb-6'>
                    <div className='md:w-1/2 ms-auto'>
                        <img className='w-full lg:h-[500px] md:h-[400px] h-[200px] object-cover md:rounded-e-lg md:rounded-es-lg' src="/src/assets/images/pool.jpg" alt="dine & drinks" />
                    </div>
                    <div className={`md:absolute flex flex-col md:left-0 md:top-1/2 md:-translate-y-1/2 md:rounded-lg md:w-2/3 bg-gray-100 md:bg-opacity-80 md:border md:border-gray-200 items-center lg:py-10 md:py-6 lg:px-12 md:px-8 py-3 px-5`}>
                        <h2 className='sm:text-xl text-lg font-semibold mb-2 border-b-2 border-orange-500'>Swimming Pool</h2>
                        <p className='lg:text-base sm:text-sm text-[13px]'>Discover pure relaxation at our hotel's inviting Swimming Pool. Dive into crystal-clear waters, surrounded by lush greenery, and find a serene oasis to unwind and recharge. Whether you're enjoying a refreshing swim or lounging by the poolside, our tranquil setting offers the perfect escape. Immerse yourself in ultimate relaxation at our hotel's Swimming Pool.</p>
                    </div>
                </div>
                <NavLink to="/Services" className='inline-block bg-emerald-600 py-2 px-3 text-white rounded-md hover:bg-orange-500 transition-all duration-200 ease-linear'>View All</NavLink>
            </div>
        </section>
    )
}

export default Service;
