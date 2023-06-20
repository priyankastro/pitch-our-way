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
                    <div className={`${clsx({ ['hidden']: toggle })} lg:hidden w-full bg-[#0000007d] h-screen fixed top-0 z-10`}></div>
                    <div className={`${clsx({ ['hidden']: toggle })} lg:flex lg:flex-row font-medium ml-auto lg:space-x-14 w-1/2 lg:w-auto text-left lg:text-right h-screen lg:h-auto fixed lg:relative top-0 right-0 z-10 bg-white lg:bg-transparent px-5 lg:px-0`}>
                        <div className={`${clsx({ ['hidden']: toggle })} menu-item py-2 h-[78px]`}>
                            <button className='float-right' onClick={() => setToggle(!toggle)}><img src='/images/btn-close.png'/></button>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#home" className="">Home</a>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#about-us" className="">About Us</a>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#services" className="">Services</a>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#blogs" className="">Blogs</a>
                        </div>
                        <div className='menu-item py-5'>
                            <a href="/#contact-us" className="">Contact Us</a>
                        </div>
                        <div className='menu-item py-5 text-center'>
                            <a href="/#location" className="btn rounded-3xl block lg:inline w-full">ENQUIRY</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar