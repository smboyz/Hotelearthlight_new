import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import GalleryData from '../../data/GalleryData';
import ImageModal from './ImageModal';
import axios from 'axios';

const ImageGallery = () => {

    const [gall, setGall] = useState();
    const [gall_1, setGall_1] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Number of items to display per page
    const [Pages, setTotalPages] = useState(1);

    const HomeData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            
            if (response.data) {
                const gallData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Image_Gallery"
                );
                setGall(gallData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {

                const gall_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Image_Gallery_1"
                );

                // Calculate the total number of pages based on the items per page
                setTotalPages(Math.ceil(gall_1Data.length / itemsPerPage));

                // Calculate the start and end indices for the current page
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;

                // Slice the data to display only the items for the current page
                const paginatedGall_1Data = gall_1Data.slice(
                    startIndex,
                    endIndex
                );

                setGall_1(paginatedGall_1Data); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        HomeData();
    }, [currentPage]);
    // console.log(gall_1);

    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src={gall && gall.slider_image} alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>{gall && gall.caption}</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>{gall && gall.name}</p>
                    </span>
                </div>
            </section>
            <section className="py-10">
                <div className="container flex flex-col items-center">
                    <h2 className='text-2xl font-bold text-orange-500 mb-6'>{gall && gall.name}</h2>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                        {gall_1 && gall_1.map((imageItem, index) => (
                            <ImageModal key={imageItem.id} imageUrl={imageItem.bannerimage} images={gall_1} index={index} />
                        ))}
                    </div>
                    <nav className="flex justify-center items-center space-x-2 pt-8">
                        <button
                            className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                        </button>
                        {Array.from({ length: Pages }).map((_, index) => (
                            <button
                                key={index + 1}
                                className={`w-10 h-10 ${currentPage === index + 1
                                    ? "bg-blue-500 text-white"
                                    : "text-gray-500 hover:text-blue-600"
                                    } p-4 inline-flex items-center text-sm font-medium rounded-full`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === Pages}
                        >
                            <span className="sr-only">Next</span>
                            <span aria-hidden="true">»</span>
                        </button>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default ImageGallery;
