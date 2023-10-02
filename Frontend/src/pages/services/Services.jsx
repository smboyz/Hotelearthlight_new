import React from 'react';
import { NavLink } from 'react-router-dom';

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
                    <div className='flex flex-col md:gap-0 gap-5 w-full'>
                        <div className='w-full relative'>
                            <div className='md:w-1/2'>
                                <img className='w-full lg:h-[500px] md:h-[400px] h-[200px] object-cover md:rounded-s-lg rounded-se-lg' src="/src/assets/images/dine&drinks.jpg" alt="dine & drinks" />
                            </div>
                            <div className={`md:absolute flex flex-col md:right-0 md:top-1/2 md:-translate-y-1/2 md:rounded-lg md:w-2/3 bg-gray-100 md:bg-opacity-80 md:border md:border-gray-200 items-center lg:py-10 md:py-6 lg:px-12 md:px-8 py-3 px-5`}>
                                <h2 className='sm:text-xl text-lg font-semibold mb-2 border-b-2 border-orange-500'>Dine & Drinks</h2>
                                <p className='lg:text-base sm:text-sm text-[13px]'>Indulge in an exceptional Dining & Drinks experience at our hotel. Immerse yourself in a world of culinary delights, where our talented chefs craft exquisite dishes blending international and local flavors. Enjoy the elegant ambiance of our dining spaces, complemented by impeccable service from our attentive staff. Savor handcrafted cocktails and a wide selection of beverages at our bars and lounges. Join us for special culinary events and themed nights that showcase the finest ingredients and culinary innovation. Embark on a memorable journey of taste and satisfaction at our hotel's Dining & Drinks offerings.</p>
                            </div>
                        </div>
                        <div className='w-full relative'>
                            <div className='md:w-1/2 ms-auto'>
                                <img className='w-full lg:h-[500px] md:h-[400px] h-[200px] object-cover md:rounded-e-lg' src="/src/assets/images/pool.jpg" alt="dine & drinks" />
                            </div>
                            <div className={`md:absolute flex flex-col md:left-0 md:top-1/2 md:-translate-y-1/2 md:rounded-lg md:w-2/3 bg-gray-100 md:bg-opacity-80 md:border md:border-gray-200 items-center lg:py-10 md:py-6 lg:px-12 md:px-8 py-3 px-5`}>
                                <h2 className='sm:text-xl text-lg font-semibold mb-2 border-b-2 border-orange-500'>Swimming Pool</h2>
                                <p className='lg:text-base sm:text-sm text-[13px]'>Discover pure relaxation at our hotel's inviting Swimming Pool. Dive into crystal-clear waters, surrounded by lush greenery, and find a serene oasis to unwind and recharge. Whether you're enjoying a refreshing swim or lounging by the poolside, our tranquil setting offers the perfect escape. Immerse yourself in ultimate relaxation at our hotel's Swimming Pool.</p>
                            </div>
                        </div>
                        <div className='w-full relative'>
                            <div className='md:w-1/2'>
                                <img className='w-full lg:h-[500px] md:h-[400px] h-[200px] object-cover md:rounded-s-lg' src="/src/assets/images/rooms.jpg" alt="rooms & suites" />
                            </div>
                            <div className={`md:absolute flex flex-col md:right-0 md:top-1/2 md:-translate-y-1/2 md:rounded-lg md:w-2/3 bg-gray-100 md:bg-opacity-80 md:border md:border-gray-200 items-center lg:py-10 md:py-6 lg:px-12 md:px-8 py-3 px-5`}>
                                <h2 className='sm:text-xl text-lg font-semibold mb-2 border-b-2 border-orange-500'>Rooms & Suites</h2>
                                <p className='lg:text-base sm:text-sm text-[13px]'>Discover luxurious accommodations at our hotel, where comfort meets elegance. Our rooms and suites are thoughtfully designed to provide you with a memorable stay. Each room is a sanctuary of relaxation, featuring modern amenities, plush bedding, and stylish decor. Whether you choose a cozy room or a spacious suite, you'll enjoy stunning views and impeccable service. Our suites offer extra space and premium amenities, making them perfect for a special occasion or a truly indulgent escape. Experience the epitome of comfort and sophistication in our rooms and suites, where every detail is crafted to exceed your expectations.</p>
                            </div>
                        </div>
                        <div className='w-full relative'>
                            <div className='md:w-1/2 ms-auto'>
                                <img className='w-full lg:h-[500px] md:h-[400px] h-[200px] object-cover md:rounded-e-lg md:rounded-es-lg' src="/src/assets/images/safari.jpg" alt="jungle safari" />
                            </div>
                            <div className={`md:absolute flex flex-col md:left-0 md:top-1/2 md:-translate-y-1/2 md:rounded-lg md:w-2/3 bg-gray-100 md:bg-opacity-80 md:border md:border-gray-200 items-center lg:py-10 md:py-6 lg:px-12 md:px-8 py-3 px-5`}>
                                <h2 className='sm:text-xl text-lg font-semibold mb-2 border-b-2 border-orange-500'>Jungle Safari</h2>
                                <p className='lg:text-base sm:text-sm text-[13px]'>Chitwan National Park is a preserved area (932 Sq. Km) in the Terai Lowlands of south-central Nepal, known for its biodiversity. Its dense forests and grassy plains are home to rare mammals like one-horned rhinos and Bengal tigers, Sloth bead, Leopard, Crocodiles, etc. The park shelters numerous bird species, including the giant hornbill. It is listed as a World Heritage site since 1984. The park offers some breathtaking sights of a wide variety of flora and fauna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;
