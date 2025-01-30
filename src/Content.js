import React, { useEffect, useState } from 'react';
import { Icon } from 'react-icons-kit';
import { arrowUpCircle } from 'react-icons-kit/feather/arrowUpCircle';
import Fade from 'react-reveal/Fade';

function Content() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='flex flex-col relative w-screen min-h-screen overflow-hidden'>
            <div className='flex flex-row justify-center items-center bg-red-200 h-screen w-screen text-3xl text-indigo-800'>Section 1</div>
            <div className='flex flex-row justify-center items-center bg-emerald-200 h-screen w-screen text-3xl text-indigo-800'>Section 2</div>
            <div className='flex flex-row justify-center items-center bg-indigo-200 h-screen w-screen text-3xl text-indigo-800'>Section 3</div>
            <div className='flex flex-row justify-center items-center bg-rose-200 h-screen w-screen text-3xl text-indigo-800'>Section 4</div>

            <div className='h-screen w-screen fixed'>
                <Fade right>
                    <button href='#' onClick={scrollToTop} className={`absolute rounded-full shadow-md text-white shadow-red-900 duration-300 hover:shadow-none cursor-pointer right-10 bottom-10 ${scroll ? '' : 'hidden'}`}><Icon size={48} icon={arrowUpCircle} /></button>
                </Fade>
            </div>
        </div>
    );
}

export default Content;
