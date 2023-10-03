import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import VideoData from '../../data/VideoData';
import axios from 'axios';

const VideoGallery = () => {

    const [video, setVideo] = useState();
    const [video_1, setVideo_1] = useState();

    const HomeData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const videoData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Video_Gallery"
                );
                setVideo(videoData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const video_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Video_Gallery_1"
                );
                setVideo_1(video_1Data); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        HomeData();
    }, []);

    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src={video && video.slider_image} alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>{video && video.caption}</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>{video && video.name}</p>
                    </span>
                </div>
            </section>
            <section className="py-10">
                <div className="container flex flex-col items-center">
                    <h2 className='text-2xl font-bold text-orange-500 mb-6'>{video && video.name}</h2>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full'>
                        {video_1 && video_1.map((videoItem) => (
                            <div key={videoItem.id} className='w-full'>
                                <video controls className='w-full h-[200px]' data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                                    <source className='inline-block w-full h-full' src={videoItem.video} type="video/mp4" />
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
