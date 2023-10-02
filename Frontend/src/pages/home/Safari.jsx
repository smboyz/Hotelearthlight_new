import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Safari = () => {

    const [safari, setSafari] = useState();

    const SafariData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const safariData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Safari"
                );
                setSafari(safariData[0]); // Assuming you want to slice the filtered data
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        SafariData();
    }, []);

    return (
        <section className='py-10'>
            <div className="container flex flex-col items-center">
                <h2 className='text-2xl font-semibold mb-6 text-orange-500'>{safari && safari.name}</h2>
                <div className='flex md:flex-row flex-col gap-4'>
                    <div className='md:w-1/2 w-full'>
                        <img className='w-full lg:h-[300px] sm:h-[250px] h-[200px] object-cover' src={safari && safari.bannerimage} alt="national park" />
                    </div>
                    <div className='flex flex-col items-start my-auto md:w-1/2 w-full'>
                        <h3 className='text-xl font-bold border-b-2 border-orange-500 mb-1'>{safari && safari.title}</h3>
                        <p className='text-gray-700 p-2 bg-gray-100 lg:text-base text-sm' dangerouslySetInnerHTML={{ __html: safari && safari.short_desc }}></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Safari;
