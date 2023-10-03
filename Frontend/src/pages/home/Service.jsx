import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ServiceData from '../../data/ServiceData';
import axios from 'axios';

const Service = () => {

    const [serv, setServ] = useState();
    const [serv_1, setServ_1] = useState();

    const HomeData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const servData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Services"
                );
                setServ(servData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const serv_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Services_1"
                );
                setServ_1(serv_1Data); // Assuming you want to slice the filtered data
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
        <section className="py-10">
            <div className="container flex flex-col items-center">
                <h2 className='text-2xl font-bold text-orange-500 mb-6'>{serv && serv.name}</h2>
                <div className='flex flex-col md:gap-0 gap-6 w-full'>
                    {serv_1 && serv_1.slice(0, 2).map((data, index) => (
                        <div key={data.id} className='w-full relative'>
                            <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'ms-auto'}`}>
                                <img className='w-full lg:h-[500px] md:h-[400px] h-[200px] object-cover md:rounded-sm' src={data.bannerimage} alt={data.title} />
                            </div>
                            <div className={`${index % 2 === 0 ? 'md:right-0' : 'md:left-0'} md:absolute flex flex-col  md:top-1/2 md:-translate-y-1/2 md:rounded-lg md:w-2/3 bg-gray-100 md:bg-opacity-80 md:border md:border-gray-200 items-center lg:py-10 md:py-6 lg:px-12 md:px-8 py-3 px-5`}>
                                <h2 className='sm:text-xl text-lg font-semibold mb-2 border-b-2 border-orange-500'>{data.title}</h2>
                                <p className='lg:text-base sm:text-sm text-[13px]' dangerouslySetInnerHTML={{ __html: data.short_desc }}></p>
                            </div>
                        </div>
                    ))}
                </div>
                <NavLink to="/Services" className='inline-block bg-emerald-600 py-2 px-3 text-white rounded-md hover:bg-orange-500 transition-all duration-200 ease-linear mt-6'>View All</NavLink>
            </div>
        </section>
    )
}

export default Service;