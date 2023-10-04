import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Data from '../../data/FeaturedData';
import img from '/src/assets/images/features-bg.webp'
import axios from 'axios';

const HotelChar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [chart, setChart] = useState();
    const [chart_1, setChart_1] = useState();

    const HomeData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const chartData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Chart"
                );
                setChart(chartData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const chart_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Chart_1"
                );
                setChart_1(chart_1Data); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        HomeData();
    }, []);
    // console.log(chart);

    return (
        <section
            style={{
                backgroundImage: `url(${chart && chart.slider_image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
            }}
            className="py-14 flex items-center relative"
        >
            <div className='absolute w-full h-full inset-0 bg-black opacity-60'></div>
            <div className="container relative w-full z-20 text-white">
                <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-10'>
                    {chart_1 && chart_1.map((dataItem) => (
                        <div key={dataItem.id} className='flex flex-col gap-1 items-center bg-white bg-opacity-20 py-5 border border-gray-300 rounded-md'>
                            <i className={`${dataItem.icon_image} md:text-xl text-lg text-orange-500`}></i>
                            <VisibilitySensor
                                onChange={(isVisible) => {
                                    if (isVisible) {
                                        setIsVisible(true);
                                    }
                                }}>
                                <CountUp className='md:text-2xl text-xl font-semibold ' end={isVisible ? dataItem.caption : 0} duration={3} formattingFn={(value) => `${value}+`} />
                            </VisibilitySensor>
                            <h3 className='md:text-2xl text-xl font-medium text-orange-500 text-center'>{dataItem.name.toUpperCase()}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HotelChar;
