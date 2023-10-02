import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerData from '../../data/BannerData';
import axios from 'axios';

const Banner = () => {
    const settings = {
        autoplay: true,
        fade: true,
        infinite: true,
        autoplaySpeed: 7000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    };

    const [banner, setBanner] = useState();

    const SliderData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const bannerData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Slider"
                );
                setBanner(bannerData); // Assuming you want to slice the filtered data
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        SliderData();
    }, []);
    // console.log(banner);

    return (
        <section className='relative lg:h-[750px] md:h-[600px] sm:h-[500px] h-[400px] w-full overflow-hidden'>
            <div className='w-full h-full absolute inset-0'>
                <Slider {...settings}>
                    {banner && banner.map((data) => (
                        <div key={data.id} className='relative w-full lg:h-[750px] md:h-[600px] sm:h-[500px] h-[400px]'>
                            <img className='w-full h-full object-cover' src={data.slider_image} alt="image" />
                            <div className='absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-60 z-20'></div>
                            <div className="container inset-0 absolute z-20 text-white flex flex-col justify-center items-center">
                                <small className='sm:text-xl text-lg font-medium md:mt-[78px] mt-[40px] text-center'>{data.caption}</small>
                                <h1 className='lg:text-7xl md:text-4xl text-2xl font-semibold text-center'>{data.title}</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Banner;
