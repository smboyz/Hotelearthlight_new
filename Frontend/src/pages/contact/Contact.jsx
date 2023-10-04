import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {

    const [data, setData] = useState();
    const [con, setCon] = useState();
    const [formData, setFormData] = useState({
        name: "",
        mobileno: "",
        email: "",
        message: "",
    });
    const [successMessage, setSuccessMessage] = useState("")

    const headerData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/globals/');
            // Handle the response data here
            response.data && setData(response.data[0]);

            const response_1 = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response_1.data) {
                const conData = response_1.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Contact"
                );
                setCon(conData[0]); // Assuming you want to slice the filtered data
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/contacts/",
                formData
            );

            // Check if the response status is 201 Created (or another success status)
            if (response.status === 201) {
                // Show a success message to the user
                setSuccessMessage("Submitted successfully!");

                // Optionally, reset the form fields
                setFormData({
                    name: "",
                    mobileno: "",
                    email: "",
                    message: "",
                });
            } else {
                // Handle other status codes (e.g., 400 for validation errors)
                console.error(
                    "Server responded with an unexpected status code:",
                    response.status
                );
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        headerData();
    }, []);
    // console.log(formData)

    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src={con && con.slider_image} alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>{con && con.title}</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <p className='px-2'>Contact</p>
                    </span>
                </div>
            </section>
            <section className="text-gray-600 body-font relative">
                <div className="container py-10 mx-auto flex flex-col items-center">
                    <h2 className='text-2xl font-bold text-orange-500 mb-6'>{con && con.caption}</h2>
                    <div className='flex md:flex-nowrap flex-wrap w-full'>
                        <div className="lg:w-2/3 md:w-1/2 w-full bg-gray-300 overflow-hidden sm:mr-10 md:py-4 py-8 ps-2 flex items-end justify-start relative">
                            <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11268.435556329363!2d84.4857690174652!3d27.59247450092586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994ef91d1c2c925%3A0x551309fc3a6b5eba!2sHotel%20Earth%20Light!5e0!3m2!1sen!2snp!4v1694938310745!5m2!1sen!2snp"></iframe>
                            <div className="bg-white relative flex flex-wrap py-4 rounded shadow-md md:mt-0 mt-[150px]">
                                <div className="lg:w-1/2 px-4">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                    <p className="mt-1 sm:text-base text-sm">{data && data.SiteAddress}</p>
                                </div>
                                <div className="lg:w-1/2 px-4 mt-3 lg:mt-0">
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                    <p className="leading-relaxed sm:text-base text-sm">{data && data.SiteEmail}</p>
                                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                    <p className="leading-relaxed sm:text-base text-sm">{data && data.SiteContact} : {data && data.Sitefax}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                            {successMessage && (
                                <div className="success-message" style={{ color: "green" }}>
                                    {successMessage}
                                </div>
                            )}
                            <form className='w-full' onSubmit={handleSubmit}>
                                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                                <div className="relative mb-4">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                                    <input type="tel" id="mobileno" name="mobileno" value={formData.mobileno} onChange={handleInputChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                                <button className="text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none rounded text-lg hover:bg-orange-500 transition-all duration-200 ease-linear">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact;
