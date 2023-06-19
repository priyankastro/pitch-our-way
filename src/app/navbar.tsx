"use client"
import React, { useState } from 'react'
import clsx from 'clsx'

const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <nav className='bg-white md:bg-transparent'>
            <div className="max-w-screen-xl px-0 md:px-4 py-0 md:py-2 mx-auto h-auto relative text-[15px] font-bold">
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className='flex md:items-center text-center w-full md:w-auto justify-between'>
                        <a href="/" className="">
                            <img src='/images/logo.png' className='w-auto md:w-[90%]'></img>
                        </a>
                        <button className='md:hidden p-4' onClick={() => setToggle(!toggle)}>
                            <img src='/images/icon-menu.png' />
                        </button>
                    </div>
                    <div className={`${clsx({ ['hidden']: toggle })} md:flex md:flex-row font-medium ml-auto md:space-x-14 w-full md:w-auto text-center h-[95vh] md:h-auto`}>
                        <div className='menu-item py-5'>
                            <a href="/" className="">Home</a>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#about" className="">About Us</a>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#events" className="">Services</a>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#contact" className="">Blogs</a>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#location" className="">Contact Us</a>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#location" className="btn rounded-3xl">ENQUIRY</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar