import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const About = () => {

    const [about, setAbout] = useState();

    const AboutData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const aboutData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "About"
                );
                setAbout(aboutData[0]); // Assuming you want to slice the filtered data
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        AboutData();
    }, []);

    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src={about && about.slider_image} alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>{about && about.meta_title}</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>{about && about.caption}</p>
                    </span>
                </div>
            </section>
            <section className='py-10'>
                <div className="container">
                    <div className='flex items-center lg:flex-row flex-col gap-6 w-full'>
                        <div className='lg:w-8/12 w-full flex flex-col lg:items-start items-center'>
                            <h2 className='text-2xl font-semibold mb-1 text-orange-500'>{about && about.caption}</h2>
                            <h3 className='sm:text-xl text-lg text-center font-bold border-b-2 border-orange-500 mb-1' >{about && about.title}</h3>
                            <div className='text-gray-700 sm:text-[15px] text-sm bg-gray-100 p-2'>
                                <p dangerouslySetInnerHTML={{ __html: about && about.short_desc }}></p>
                            </div>
                        </div>
                        <div className='lg:w-4/12 w-full border-2 border-orange-400 p-1'>
                            <img className='w-full h-[350px] object-cover' src={about && about.bannerimage} alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
