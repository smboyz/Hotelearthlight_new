import React from 'react';
import { NavLink } from 'react-router-dom';
import GalleryData from '../../data/GalleryData';
import ImageModal from './ImageModal';

const ImageGallery = () => {
    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src="/src/assets/images/contact-bg.webp" alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>Hotel Earth Light</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>Image Gallery</p>
                    </span>
                </div>
            </section>
            <section className="py-10">
                <div className="container flex flex-col items-center">
                    <h2 className='text-2xl font-bold text-orange-500 mb-6'>Image Gallery</h2>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                        {GalleryData.map((imageItem, index) => (
                            <ImageModal key={imageItem.id} imageUrl={imageItem.imageUrl} images={GalleryData} index={index} />
                        ))}
                    </div>
                    <nav className="flex items-center space-x-2">
                        <a className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md pointer-events-none" href="#">
                            <span aria-hidden="true">«</span>
                            <span>Previous</span>
                        </a>
                        <a className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full" href="#" aria-current="page">1</a>
                        <a className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">2</a>
                        <a className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>
                        <a className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
                            <span>Next</span>
                            <span aria-hidden="true">»</span>
                        </a>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default ImageGallery;
