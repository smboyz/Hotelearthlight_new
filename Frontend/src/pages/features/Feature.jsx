import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Data from '../../data/KeyFeatureData';
import axios from 'axios';

const Feature = () => {

    const [feat, setFeat] = useState();
    const [feat_1, setFeat_1] = useState();
    const [feat_2, setFeat_2] = useState();
    const [feat_3, setFeat_3] = useState();

    const HomeData = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const featData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Features"
                );
                setFeat(featData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const feat_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Features_1"
                );
                setFeat_1(feat_1Data);
            }

            if (response.data) {
                const feat_2Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Features_2"
                );
                setFeat_2(feat_2Data);
            }

            if (response.data) {
                const feat_3Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Features_3"
                );
                setFeat_3(feat_3Data);
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
                <img className='absolute h-full w-full inset-0 object-cover' src={feat && feat.slider_image} alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>{feat && feat.caption}</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>{feat && feat.name}</p>
                    </span>
                </div>
            </section>
            <section className='py-10'>
                <div className="container">
                    <div className='flex md:flex-row flex-col items-center gap-6 w-full'>
                        <div className='md:w-8/12 w-full flex flex-col md:items-start items-center'>
                            <h2 className='text-2xl font-bold text-orange-500 mb-2'>{feat && feat.meta_title}</h2>
                            <h3 className='sm:text-xl text-lg font-bold border-b-2 border-orange-500 mb-1'>{feat && feat.title}</h3>
                            <div className='p-2 bg-gray-100 lg:text-base text-sm'>
                                <p className='mb-1' dangerouslySetInnerHTML={{ __html: feat && feat.short_desc }}></p>
                            </div>
                        </div>
                        <div className='md:w-4/12 w-full'>
                            <img className='w-full lg:h-auto md:h-[300px] h-auto ms-auto object-cover p-1 border-2 border-dashed border-orange-500' src="/src/assets/images/earthlight.png" alt="image" />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 w-full mt-10 '>
                        {/* {Data.map((dataItem) => ( */}
                        <div className='flex flex-col items-start'>
                            <h3 className='sm:text-xl text-lg font-medium border-b-2 border-orange-500 mb-1'>{feat_1 && feat_1[0].caption}</h3>
                            <ul className='text-gray-700 flex flex-col items-start gap-1 sm:text-base text-sm'>
                                {feat_1 && feat_1.map((listItem) => (
                                    <li className='flex items-center gap-1'><i className="fa-solid fa-check"></i>{listItem.name}</li>
                                ))}
                            </ul>
                        </div>
                        {/* ))} */}
                        <div className='flex flex-col items-start'>
                            <h3 className='sm:text-xl text-lg font-medium border-b-2 border-orange-500 mb-1'>{feat_2 && feat_2[0].caption}</h3>
                            <ul className='text-gray-700 flex flex-col items-start gap-1 sm:text-base text-sm'>
                                {feat_2 && feat_2.map((listItem) => (
                                    <li className='flex items-center gap-1'><i className="fa-solid fa-check"></i>{listItem.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col items-start'>
                            <h3 className='sm:text-xl text-lg font-medium border-b-2 border-orange-500 mb-1'>{feat_3 && feat_3[0].caption}</h3>
                            <ul className='text-gray-700 flex flex-col items-start gap-1 sm:text-base text-sm'>
                                {feat_3 && feat_3.map((listItem) => (
                                    <li className='flex items-center gap-1'><i className="fa-solid fa-check"></i>{listItem.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature;