"use client"
import React, { useState } from 'react'
import clsx from 'clsx'

const Navbar = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <nav className='bg-white lg:bg-transparent'>
            <div className="max-w-screen-xl px-0 lg:px-4 py-0 lg:py-2 mx-auto h-auto relative text-[15px] font-bold">
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className='flex lg:items-center text-center w-full lg:w-auto justify-between'>
                        <a href="/" className="">
                            <img src='/images/logo.png' className='w-auto lg:w-[90%]'></img>
                        </a>
                        <button className='lg:hidden p-4' onClick={() => setToggle(!toggle)}>
                            <img src='/images/icon-menu.png' />
                        </button>
                    </div>
                    <div className={`${clsx({ ['hidden']: toggle })} w-full bg-[#0000007d] h-[95vh] lg:h-auto absolute lg:relative top-[78px] lg:top-0 right-0 z-10`}>
                        <div className='lg:flex lg:flex-row font-medium ml-auto lg:space-x-14 w-1/2 lg:w-auto text-left lg:text-center z-10 bg-white lg:bg-transparent px-5 lg:px-0 h-[95vh] lg:h-auto'>
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
                            <div className='menu-item py-5 text-center'>
                                <a href="/#location" className="btn rounded-3xl block lg:inline w-full">ENQUIRY</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar