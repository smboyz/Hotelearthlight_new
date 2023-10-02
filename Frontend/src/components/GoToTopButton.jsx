import React, { useEffect, useState } from 'react';

const GoToTopButton = () => {
    const [scrolled, setScrolled] = useState(false);
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

    const handleGoUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    return (
        <>
            <button onClick={handleGoUp} className={`fixed py-3 px-4 rounded bg-emerald-600 bottom-10 right-2 text-white z-[9999] transition-all duration-200 ease-linear hover:bg-orange-500 ${scrolled ? '' : 'hidden'}`}>
                <i className="fa-sharp fa-solid fa-arrow-up"></i>
            </button>
        </>
    )
}

export default GoToTopButton;
