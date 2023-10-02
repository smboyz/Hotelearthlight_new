import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ModalImage from "react-modal-image";
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [data, setData] = useState();

  const headerData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/globals/');
      // Handle the response data here
      response.data && setData(response.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    // Axios GET request to fetch data
    headerData();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmationMessage(`Thank you for subscribing with email: ${email}`);
    setEmail(''); // Clear the input field
  }
  return (
    <footer className='bg-black text-white text-sm bg-opacity-90'>
      <div className="container grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4">
        <div className='w-full'>
          <img className='w-2/5' src={data && data.logo} alt="logo" />
          <p className='mt-2'>{data && data.Sitedescription}</p>
        </div>
        <div className='flex flex-col lg:items-center items-start w-full'>
          <div className='xl:w-1/2 lg:w-full'>
            <h2 className='sm:text-xl text-lg font-medium text-orange-500 mb-2'>Company</h2>
            <nav>
              <ul className='flex flex-col gap-1 items-start w-full'>
                <li><NavLink to="/About" className='flex items-center gap-1 hover:ms-2 hover:text-yellow-500 transition-all duration-200 ease-linear'><i className="fa-solid fa-chevron-right text-xs"></i>About</NavLink></li>
                <li><NavLink to="/Services" className='flex items-center gap-1 hover:ms-2 hover:text-yellow-500 transition-all duration-200 ease-linear'><i className="fa-solid fa-chevron-right text-xs"></i>Services</NavLink></li>
                <li><NavLink to="/Feature" className='flex items-center gap-1 hover:ms-2 hover:text-yellow-500 transition-all duration-200 ease-linear'><i className="fa-solid fa-chevron-right text-xs"></i>Features</NavLink></li>
                <li><NavLink to="/Rooms" className='flex items-center gap-1 hover:ms-2 hover:text-yellow-500 transition-all duration-200 ease-linear'><i className="fa-solid fa-chevron-right text-xs"></i>Rooms & Suites</NavLink></li>
                <li><NavLink to="/Gallery" className='flex items-center gap-1 hover:ms-2 hover:text-yellow-500 transition-all duration-200 ease-linear'><i className="fa-solid fa-chevron-right text-xs"></i>Gallery</NavLink></li>
                <li><NavLink to="/Contact" className='flex items-center gap-1 hover:ms-2 hover:text-yellow-500 transition-all duration-200 ease-linear'><i className="fa-solid fa-chevron-right text-xs"></i>Contact</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='flex flex-col items-start w-full'>
          <h2 className='sm:text-xl text-lg font-medium text-orange-500 mb-2'>Contact Us</h2>
          <div className='flex flex-col gap-1 items-start'>
            <span className='flex items-center gap-1'><i className="fa-solid fa-location-dot"></i>{data && data.SiteAddress}</span>
            <span className='flex items-center gap-1'><i className="fa-solid fa-phone"></i><a href="tel:+977-56580454">{data && data.SiteContact},</a><a href="tel:9851126312">{data && data.Sitefax}</a></span>
            <span className='flex items-center gap-1'><i className="fa-solid fa-envelope"></i><a href="mailto:reservation@hotelearthlight.com">{data && data.SiteEmail}</a></span>
          </div>
          <div className='flex items-center gap-2 mt-3 h-auto'>
            <a href={data && data.Sitefacebooklink} className='w-[30px] h-[30px] flex items-center justify-center text-white rounded-full bg-emerald-500 transition-all duration-100 ease-linear hover:h-[35px] hover:w-[35px]'><i className="fa-brands fa-facebook-f"></i></a>
            <a href={data && data.Siteinstagram} className='w-[30px] h-[30px] flex items-center justify-center text-white rounded-full bg-emerald-500 transition-all duration-100 ease-linear hover:h-[35px] hover:w-[35px]'><i className="fa-brands fa-instagram"></i></a>
            <a href={data && data.Sitetwitterlink} className='w-[30px] h-[30px] flex items-center justify-center text-white rounded-full bg-emerald-500 transition-all duration-100 ease-linear hover:h-[35px] hover:w-[35px]'><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
        <div className='w-full'>
          <h2 className='sm:text-xl text-lg font-medium text-orange-500 mb-2'>For newsletter</h2>
          <form onSubmit={handleSubmit} className='md:w-full sm:w-2/3 w-11/12'>
            <div className='flex gap-2 bg-transparent p-2 border border-gray-200 rounded-[4px] xl:w-full md:w-2/3 w-full'>
              <div className='flex-grow'>
                <input type="email" id="email" name="email" placeholder="Your Email" required value={email} onChange={handleEmailChange} className='focus:outline-none bg-transparent rounded-sm w-full' />
              </div>
              <button type="submit" className='px-2 py-1 bg-emerald-600 rounded-md'>Subscribe</button>
            </div>
          </form>
          <p id="confirmation-message">{confirmationMessage}</p>
          <div className='flex items-center mt-2 w-full gap-2'>
            <h2 className='sm:text-xl text-lg font-medium text-orange-500'>QR Code:</h2>
            <ModalImage className='w-[90px] h-[90px]' small={data && data.qr_code} large={data && data.qr_code} alt="qr code" />
          </div>
        </div>
      </div>
      <div className="container py-4 border-t">
        <p>Copyright &copy; 2023 Hotel Earth Light. All rights reserved. Powered by <a href="https://radiantnepal.com/" target='_blank' rel='noreferrer' className='text-yellow-500 border-b border-yellow-500'>Radiant Infotech Nepal</a></p>
      </div>
    </footer>
  )
}

export default Footer;
