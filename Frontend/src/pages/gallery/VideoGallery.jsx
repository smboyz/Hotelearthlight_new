import React from 'react';
import { NavLink } from 'react-router-dom';
import VideoData from '../../data/VideoData';

const VideoGallery = () => {
    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src="/src/assets/images/contact-bg.webp" alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>Hotel Earth Light</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>Video Gallery</p>
                    </span>
                </div>
            </section>
            <section className="py-10">
                <div className="container flex flex-col items-center">
                    <h2 className='text-2xl font-bold text-orange-500 mb-6'>Image Gallery</h2>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full'>
                            {VideoData.map((videoItem) => (
                                    <div key={videoItem.id} className='w-full'>
                                        <video controls className='w-full h-[200px]' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                            <source className='inline-block w-full h-full' src={videoItem.videoUrl} type="video/mp4" />
                                        </video>
                                    </div>
                                ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default VideoGallery;
