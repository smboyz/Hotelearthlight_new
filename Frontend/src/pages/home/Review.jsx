import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewData from '../../data/ReviewData';

const Review = () => {
    const sliderRef = useRef(null);
    const settings = {
        autoplay: true,
        infinite: true,
        autoplaySpeed: 7000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    const handlePreviousClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }
    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }

    return (
        <section className='py-10 relative mb-4'>
            <img className='absolute w-full h-full inset-0 object-cover' src="/src/assets/images/review-image.avif" alt="background" />
            <div className='absolute w-full h-full inset-0 bg-black opacity-70'></div>
            <div className="container flex flex-col items-center group relative z-10">
                <h2 className='text-2xl font-semibold mb-6 text-orange-500'>Tripadvisor Reviews</h2>
                <div className='relative w-full flex flex-col items-center'>
                    <div className='lg:w-1/2 md:w-7/12 sm:w-8/12 w-10/12 bg-white sm:py-5 py-2 bg-opacity-20 rounded-lg border border-gray-200 text-white'>
                        <Slider {...settings} ref={sliderRef}>
                            {ReviewData.map((data) => (
                                <div key={data.id} className='w-full flex-col items-center gap-2 custom-flex'>
                                    <p className='text-center sm:text-base text-sm'>" {data.feedBack} "</p>
                                    <span className='flex gap-1 text-orange-500 sm:text-base text-sm'>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </span>
                                    <big className='font-medium sm:text-[19px] text-base'>{data.personName}</big>
                                    <b className='sm:text-base text-[15px]'>{data.reviewDate}</b>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className='flex justify-between items-center absolute w-full h-full inset-0'>
                        <button onClick={handlePreviousClick} className='h-[30px] w-[30px] flex items-center justify-center rounded-full bg-opacity-0 text-xl group-hover:ms-3 group-hover:bg-orange-500 group-hover:bg-opacity-100 text-white transition-all duration-200 ease-linear'>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button onClick={handleNextClick} className='h-[30px] w-[30px] flex items-center justify-center rounded-full bg-opacity-0 text-xl group-hover:me-3 group-hover:bg-orange-500 group-hover:bg-opacity-100 text-white transition-all duration-200 ease-linear'>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review;
