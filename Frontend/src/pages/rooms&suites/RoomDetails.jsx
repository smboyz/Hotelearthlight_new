import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import RoomData from '../../data/RoomData';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Modal from 'react-modal';
import ModalImage from "react-modal-image";
import axios from 'axios';

Modal.setAppElement('#root');

const RoomDetails = () => {
    const [price, setPrice] = useState(0)
    const { name } = useParams();
    // const data = RoomData.find((dataItem) => dataItem.roomType === roomType);

    const [room, setRoom] = useState();
    const [room_1, setRoom_1] = useState();
    const [data, setData] = useState();
    const [formData, setFormData] = useState({
        check_in: "",
        check_out: "",
        adults: "",
        children: "",
        bed_type: "",
        room_type: "",
    });
    if (name) {
        formData.room_type = name;
    }
    const [successMessage, setSuccessMessage] = useState("")

    const HomeData = async () => {
        try {
            const response_1 = await axios.get('http://127.0.0.1:8000/api/globals/');
            // Handle the response data here
            response_1.data && setData(response_1.data[0]);

            const response = await axios.get(
                "http://127.0.0.1:8000/api/navigations/"
            );
            // Filter the response data by status and page_type
            if (response.data) {
                const roomData = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Rooms & Suites"
                );
                setRoom(roomData[0]); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const room_1Data = response.data.filter(
                    (item) => item.status === "Publish" && item.page_type === "Rooms & Suites_1"
                );
                setRoom_1(room_1Data.find(dataItem => dataItem.name === name)); // Assuming you want to slice the filtered data
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
                "http://127.0.0.1:8000/api/bookrooms/",
                formData
            );

            // Check if the response status is 201 Created (or another success status)
            if (response.status === 201) {
                // Show a success message to the user
                setSuccessMessage("Submitted successfully!");

                // Optionally, reset the form fields
                setFormData({
                    check_in: "",
                    check_out: "",
                    adults: "",
                    children: "",
                    bed_type: "",
                    room_type: "",
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
        HomeData();
    }, []);
    // console.log(room);
    // console.log(room_1);
    console.log(formData);

    const initialFormData = {
        checkIn: null,
        checkOut: null,
        adults: 1,
        children: 0,
        bedType: '',
        roomType: '',
    };

    if (name) {
        initialFormData.name = name;
    }


    // Create state for form data
    // const [formData, setFormData] = useState(initialFormData);
    // Handle form input changes
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };
    const handleDateChange = (name, date) => {
        setFormData({ ...formData, [name]: date });
    };

    useEffect(() => {
        if (formData.bed_type === 'single') {
            setPrice(room_1.meta_title)
        }
        else if (formData.bed_type === 'double') {
            setPrice(room_1.meta_keyword)
        }
    }, [formData.bed_type])

    // Handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Send the formData to your backend for processing
    //     // You can use an HTTP POST request to your server's API
    //     console.log(formData);
    //     alert("Form submitted successfully!")
    //     // Reset the form to its initial state
    //     setFormData(initialFormData);
    // };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.classList.add('overflow-hidden')
    }
    const closeModal = () => {
        setIsOpen(false);
        document.body.classList.remove('overflow-hidden')
    }

    return (
        <>
            <section className='h-[350px] relative'>
                <img className='absolute h-full w-full inset-0 object-cover' src={room && room.slider_image} alt="background" />
                <div className='absolute h-full w-full inset-0 bg-black opacity-60'></div>
                <div className='container text-white relative z-20 flex flex-col items-center justify-center h-full w-full'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold md:mt-[78px] mt-[40px] text-center'>{room && room.caption}</h1>
                    <span className='flex text-lg text-gray-100'>
                        <NavLink to="/" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Home</NavLink>
                        <NavLink to="/Rooms" className="relative px-2 after:absolute after:content-[''] after:h-[80%] after:top-[10%] after:w-[1px] after:bg-gray-100 after:right-0 hover:text-yellow-500">Rooms</NavLink>
                        <p className='px-2'>{room && room.title}</p>
                    </span>
                </div>
            </section>
            <section className='py-10'>
                <div className="container grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className='w-full md:rounded-ss-[70px] md:rounded-ee-[70px] md:rounded-none rounded-lg overflow-hidden my-auto'>
                        <img className='w-full md:h-[400px] sm:h-[300px] h-[250px] object-cover custom-animation' src={room_1 && room_1.bannerimage} alt={room_1 && room_1.name} />
                    </div>
                    <div className='flex flex-col gap-1 items-start'>
                        <h2 className='sm:text-2xl text-xl font-bold text-orange-500 mb-1'>{room_1 && room_1.name}</h2>
                        <b className='flex items-center gap-1'>Ac: <p className='text-orange-500'>{room_1 && room_1.caption}</p></b>
                        <b className='flex items-center gap-1'>Room Size: <p className='text-orange-500'>{room_1 && room_1.icon_image}</p></b>
                        <b className='flex items-center gap-1'>Wifi: <p className='text-orange-500'>{room_1 && room_1.title}</p></b>
                        <b className='flex items-center gap-1'>Single Bed: <p className='text-orange-500'>{room_1 && room_1.meta_title}</p></b>
                        <b className='flex items-center gap-1'>Double Bed: <p className='text-orange-500'>{room_1 && room_1.meta_keyword}</p></b>
                        <div className='bg-gray-100 p-2 flex flex-col items-start'>
                            <h3 className='sm:text-xl text-lg font-medium border-b-2 border-orange-500'>Description</h3>
                            <p className=' text-gray-700 lg:text-base text-sm' dangerouslySetInnerHTML={{ __html: room_1 && room_1.short_desc }}></p>
                        </div>
                        <button onClick={openModal} className='text-white bg-emerald-600 py-2 px-3 rounded-md mt-1 hover:bg-orange-500'>Book Now</button>
                    </div>
                </div>
            </section>
            <section>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='h-full w-full flex justify-center items-center'>
                    <div className='xl:w-1/2 lg:w-8/12 w-10/12 bg-white py-2 px-10 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] flex flex-col items-center'>
                        <button className='w-[35px] h-[35px] flex justify-center items-center bg-gray-200 rounded-full ms-auto mb-2' onClick={closeModal}><i className="fa-solid fa-xmark text-xl"></i></button>
                        <h2 className='lg:text-4xl sm:text-2xl text-xl font-semibold text-orange-500 sm:mb-2 mb-1 text-center'>{data && data.SiteName}</h2>
                        <h3 className='lg:text-2xl sm:text-xl text-lg font-bold border-b-2 border-orange-500 sm:mb-2 mb-1 text-center'>Book Room</h3>
                        {successMessage && (
                            <div className="success-message" style={{ color: "green" }}>
                                {successMessage}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className='flex w-full flex-col justify-between items-center gap-2'>
                            <div className='flex sm:flex-row flex-col gap-2 w-full'>
                                <div className='flex flex-col items-start bg-white p-1 border border-black rounded-md w-full'>
                                    <label htmlFor="checkIn" className='text-[13px]'>Check-in:</label>
                                    <Datetime id='check_in' name='check_in' value={formData.check_in} onChange={(date) => handleDateChange('check_in', date)} inputProps={{ placeholder: 'Select a date', className: "focus:outline-none placeholder:text-black w-full text-sm", required: 'required' }} className='w-full' />
                                </div>
                                <div className='flex flex-col items-start bg-white p-1 border border-black rounded-md w-full'>
                                    <label htmlFor="checkOut" className='text-[13px]'>Check-out:</label>
                                    <Datetime id='check_out' name='check_out' value={formData.check_out} onChange={(date) => handleDateChange('check_out', date)} inputProps={{ placeholder: 'Select a date', className: "focus:outline-none placeholder:text-black w-full text-sm", required: 'required' }} className='w-full' />
                                </div>
                            </div>
                            <div className='flex sm:flex-row flex-col gap-2 w-full'>
                                <div className='flex flex-col items-start bg-white p-1 border border-black rounded-md w-full'>
                                    <label htmlFor="adults" className='text-[13px]'>Adults:</label>
                                    <input type="number" id="adults" name="adults" value={formData.adults} onChange={handleInputChange} min="1" required className='focus:outline-none text-sm w-full' />
                                </div>
                                <div className='flex flex-col items-start bg-white p-1 border border-black rounded-md w-full'>
                                    <label htmlFor="children" className='text-[13px]'>Children:</label>
                                    <input type="number" id="children" name="children" value={formData.children} onChange={handleInputChange} min="0" className='focus:outline-none text-sm w-full' />
                                </div>
                            </div>
                            <div className='flex sm:flex-row flex-col gap-2 w-full'>
                                <div className='flex flex-col items-start bg-white p-1 border border-black rounded-md w-full'>
                                    <label htmlFor="bedType" className='text-[13px]'>Bed Type:</label>
                                    <select id="bed_type" name="bed_type" value={formData.bed_type} onChange={handleInputChange} required className='focus:outline-none text-sm w-full' >
                                        <option value="" disabled>Select bed type</option>
                                        <option value="single">Single</option>
                                        <option value="double">Double</option>
                                    </select>
                                </div>
                                <div className='flex flex-col items-start bg-white p-1 border border-black rounded-md w-full'>
                                    <label htmlFor="roomType" className='text-[13px]'>Room Type:</label>
                                    <input type="text" id='room_type' name='room_type' value={formData.room_type} onChange={handleInputChange} required className='focus:outline-none text-sm w-full' />
                                </div>
                            </div>
                            <button type="submit" className='text-white bg-emerald-600 py-2 px-3 rounded-md hover:bg-orange-500'>SUBMIT</button>
                        </form>
                        <div className='w-full flex flex-col items-center'>
                            <ModalImage className='sm:w-[200px] w-[120px] sm:h-[200px] h-[120px]' small={data && data.qr_code} large={data && data.qr_code} alt="qr code" />
                            <p className='sm:text-xl text-lg font-semibold text-center'>Price:{price}</p>
                            <p className='text-center'>QR code for payment</p>
                        </div>
                    </div>
                </Modal>
            </section>
        </>
    )
}

export default RoomDetails;
