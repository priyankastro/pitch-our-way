import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-transparent'>
            <div className="max-w-screen-xl px-4 py-2 mx-auto h-[96vh] md:h-auto relative text-[15px] font-bold">
                <div className="flex flex-col md:flex-row md:items-center">
                    <a href="/" className="order-last md:order-none md:flex md:items-center text-center absolute md:relative bottom-0 left-0 w-full md:w-auto">
                        <img src='/images/logo.png' className='w-[90%]'></img>
                    </a>
                    <div className="md:flex md:flex-row font-medium ml-auto md:space-x-14 w-full md:w-auto text-center">
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