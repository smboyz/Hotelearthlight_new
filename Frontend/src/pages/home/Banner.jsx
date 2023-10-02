import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerData from '../../data/BannerData';

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
    return (
        <section className='relative lg:h-[750px] md:h-[600px] sm:h-[500px] h-[400px] w-full overflow-hidden'>
            <div className='w-full h-full absolute inset-0'>
                <Slider {...settings}>
                    {BannerData.map((data) => (
                        <div key={data.id} className='relative w-full lg:h-[750px] md:h-[600px] sm:h-[500px] h-[400px]'>
                            <img className='w-full h-full object-cover' src={data.imageUrl} alt="image" />
                            <div className='absolute inset-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-60 z-20'></div>
                            <div className="container inset-0 absolute z-20 text-white flex flex-col justify-center items-center">
                                <small className='sm:text-xl text-lg font-medium md:mt-[78px] mt-[40px] text-center'>Welcome to Hotel Earth Light</small>
                                <h1 className='lg:text-7xl md:text-4xl text-2xl font-semibold text-center'>Experience The Freedom</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Banner;
