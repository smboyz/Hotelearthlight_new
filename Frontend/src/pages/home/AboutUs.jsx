import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const AboutUs = () => {

    const [about, setAbout] = useState();

    const AboutData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const aboutData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Home/About"
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
    // console.log(about)

    return (
        <section className='py-10'>
            <div className="container">
                <div className='grid md:grid-cols-2 gap-5 w-full'>
                    <div className="relative md:block hidden w-full bg-no-repeat bg-cover pb-4 bg-[url('/src/assets/images/transparent-bg.png')]">
                        <img src={about && about.bannerimage} alt="image" className='h-[400px] w-[60%] object-cover ms-auto' />
                        <img src={about && about.image} alt="image" className='absolute top-[calc(50%-125px)] object-cover left-5 z-10 w-[80%] h-[250px]' />
                    </div>
                    <div className='flex flex-col md:items-start items-center gap-2'>
                        <h2 className='text-2xl font-semibold text-orange-500'>{about && about.name}</h2>
                        <div className='text-gray-700 lg:text-base text-sm flex flex-col md:items-start items-center'>
                            <big className='sm:text-3xl text-black text-2xl font-bold '>{about && about.caption}</big>
                            <p className=' mb-1' dangerouslySetInnerHTML={{ __html: about && about.short_desc }}></p>
                        </div>
                        <NavLink to="/About" className='inline-block bg-emerald-600 py-2 px-3 text-white rounded-md hover:bg-orange-500 transition-all duration-200 ease-linear'>About Us</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
