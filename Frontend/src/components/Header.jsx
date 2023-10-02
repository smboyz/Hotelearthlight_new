import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [galleryMenu, setGalleryMenu] = useState(false);
    const [activeBlock, setActiveBlock] = useState(0);
    const [showNavbar, setShowNavbar] = useState(false);

    const [data, setData] = useState();

    const headerData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/globals/');
            // Handle the response data here
            response.data && setData(response.data[0]);

            // Fetch navigation data based on parentId and page_type
            // const navigationResponse = await axios.get(
            //     "http://127.0.0.1:8000/api/navigations/",
            //     {
            //         params: {
            //             parent_id: parentId,      // Set the parentId as a parameter
            //             page_type: "Group",       // Filter by page_type        
            //         }
            //     }
            // );

            // if (navigationResponse.data) {
            //     const navigationData = navigationResponse.data.filter(
            //         (item) => item.status === "Publish"
            //     );
            //     setNavigation(navigationData);
            // }
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    useEffect(() => {
        // Axios GET request to fetch data
        headerData();
    }, []);
    console.log(data);

    const location = useLocation();
    useEffect(() => {
        const determineActiveBlock = () => {
            const path = location.pathname;
            if (path === "/") {
                return 0;
            }
            else if (path === "/About") {
                return 1;
            }
            else if (path === "/Services") {
                return 2;
            }
            else if (path === "/Feature") {
                return 3;
            }
            else if (path === "/Rooms" || path.startsWith("/Rooms/")) {
                return 4;
            }
            else if (path === "/ImageGallery" || path === "/VideoGallery") {
                return 5;
            }
            else if (path === "/Contact") {
                return 6;
            }
        };

        setActiveBlock(determineActiveBlock());
    }, [location.pathname]);

    const handleButtonClick = (index) => {
        setActiveBlock(index)
    }

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const closeNav = () => {
        setShowNavbar(false);
    }

    return (
        <header className={`bg-white fixed top-0 left-0 w-full py-2 z-[100] ${scrolled ? 'shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] bg-opacity-100' : 'bg-opacity-80'}`}>
            <div className="container flex items-center justify-between">
                <div className='sm:w-[150px] w-[90px]'>
                    <NavLink to="/">
                        <img className='w-full' src={data && data.logo} alt="logo" />
                    </NavLink>
                </div>
                <div className={`lg:block lg:static absolute sm:top-[87px] top-[59px] right-0 lg:p-0 p-4 lg:w-auto lg:opacity-100 lg:bg-transparent bg-orange-500 lg:text-black text-white lg:transition-none transition-all duration-[0.4s] ease-linear ${showNavbar ? 'w-[200px] opacity-100' : 'w-0 opacity-0'} `}>
                    <nav className='w-full'>
                        <ul className='flex lg:flex-row flex-col lg:items-center items-start xl:gap-8 gap-5 justify-between font-medium w-full'>
                            <li onClick={() => handleButtonClick(0)} className={`${activeBlock === 0 ? 'after:w-full after:left-0' : 'after:w-0 after:left-1/2'} relative lg:w-auto w-full lg:after:absolute after:content-[''] after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-200 after:ease-linear hover:after:w-full hover:after:left-0`} >
                                <NavLink to="/" onClick={closeNav} className="inline-block w-full">Home</NavLink>
                            </li>
                            <li onClick={() => handleButtonClick(1)} className={`${activeBlock === 1 ? 'after:w-full after:left-0' : 'after:w-0 after:left-1/2'} relative lg:w-auto w-full lg:after:absolute after:content-[''] after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-200 after:ease-linear hover:after:w-full hover:after:left-0`} >
                                <NavLink to="/About" onClick={closeNav} className="inline-block w-full">About</NavLink>
                            </li>
                            <li onClick={() => handleButtonClick(2)} className={`${activeBlock === 2 ? 'after:w-full after:left-0' : 'after:w-0 after:left-1/2'} relative lg:w-auto w-full lg:after:absolute after:content-[''] after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-200 after:ease-linear hover:after:w-full hover:after:left-0`} >
                                <NavLink to="/Services" onClick={closeNav} className="inline-block w-full">Services</NavLink>
                            </li>
                            <li onClick={() => handleButtonClick(3)} className={`${activeBlock === 3 ? 'after:w-full after:left-0' : 'after:w-0 after:left-1/2'} relative lg:w-auto w-full lg:after:absolute after:content-[''] after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-200 after:ease-linear hover:after:w-full hover:after:left-0`} >
                                <NavLink to="/Feature" onClick={closeNav} className="inline-block w-full">Features</NavLink>
                            </li>
                            <li onClick={() => handleButtonClick(4)} className={`${activeBlock === 4 ? 'after:w-full after:left-0' : 'after:w-0 after:left-1/2'} relative lg:w-auto w-full lg:after:absolute after:content-[''] after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-200 after:ease-linear hover:after:w-full hover:after:left-0`} >
                                <NavLink to="/Rooms" onClick={closeNav} className="inline-block w-full">Rooms & Suites</NavLink>
                            </li>
                            <li onClick={() => handleButtonClick(5)}
                                onMouseEnter={() => { if (window.innerWidth > 1024) { setGalleryMenu(true) } }}
                                onMouseLeave={() => { if (window.innerWidth > 1024) { setGalleryMenu(false) } }}
                                className={`${activeBlock === 5 ? 'after:w-full after:left-0' : 'after:w-0 after:left-1/2'} lg:py-3 relative lg:w-auto w-full lg:after:absolute after:content-[''] after:bottom-[12px] after:h-[2px] after:bg-orange-500 after:transition-all after:duration-200 after:ease-linear hover:after:w-full hover:after:left-0`} >
                                <button onClick={() => setGalleryMenu(!galleryMenu)} className="w-full h-full flex justify-between items-center relative">Gallery<i className="fa-solid fa-chevron-down before:lg:hidden"></i></button>
                                {galleryMenu &&
                                    <div className={`lg:bg-white lg:text-black text-gray-200 ${galleryMenu ? 'block' : 'hidden'} lg:absolute lg:top-[50px] lg:left-[-20px] lg:border`}>
                                        <div className="flex flex-col w-[160px] h-full">
                                            <NavLink onClick={closeNav} className="p-2 lg:border-b lg:hover:text-orange-500 inline-block w-full" to="/ImageGallery">Image Gallery</NavLink>
                                            <NavLink onClick={closeNav} className="p-2 lg:border-b lg:hover:text-orange-500 inline-block w-full" to="/VideoGallery">Video Gallery</NavLink>
                                        </div>
                                    </div>
                                }
                            </li>
                            <li onClick={() => handleButtonClick(6)} className={`${activeBlock === 6 ? 'after:w-full after:left-0' : 'after:w-0 after:left-1/2'} relative lg:w-auto w-full lg:after:absolute after:content-[''] after:bottom-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-200 after:ease-linear hover:after:w-full hover:after:left-0`} >
                                <NavLink to="/Contact" onClick={closeNav} className="inline-block w-full">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <a target='_blank' rel='noreferrer' href="https://www.tripadvisor.com/Hotel_Review-g1367591-d17452658-Reviews-Hotel_Earth_Light-Sauraha_Chitwan_District_Narayani_Zone_Central_Region.html" className='inline-block text-white bg-emerald-600 py-2 px-3 rounded-md hover:bg-orange-500 transition-all duration-200 ease-linear w-full sm:text-base text-sm'>Tripadvisor</a>
                </div>
                <div className='w-1/12 lg:hidden'>
                    <div onClick={() => setShowNavbar(true)} className={`lg:hidden ${showNavbar ? 'hidden' : ''}`}>
                        <i className="fa-solid fa-bars text-xl"></i>
                    </div>
                    <div onClick={() => setShowNavbar(false)} className={`lg:hidden ${showNavbar ? '' : 'hidden'}`}>
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
