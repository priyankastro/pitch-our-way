import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='max-w-screen-xl mx-auto px-4 py-16'>
                <div className='flex gap-8'>
                    <div className='basis-2/5 px-7'>
                        <h3 className='font-bold text-lg mb-6'>About Us</h3>
                        <p>Lets foster the strength of your startup by our ways! A complete investment readiness solution for entrepreneurs and an incredible support for the foundersin their fundraise journey</p>
                    </div>
                    <div className='basis-1/4 px-7'>
                        <h3 className='font-bold text-lg mb-6'>Quick Links</h3>
                        <li><a href='/' className='ml-4'>Home</a></li>
                        <li><a href='/' className='ml-4'>About Us</a></li>
                        <li><a href='/' className='ml-4'>Services</a></li>
                        <li><a href='/' className='ml-4'>Get Set Funded</a></li>
                        <li><a href='/' className='ml-4'>Blog</a></li>
                        <li><a href='/' className='ml-4'>Contact Us</a></li>
                    </div>
                    <div className='flex-auto px-7'>
                        <h3 className='font-bold text-lg mb-6'>Contact Us</h3>
                        <div className='flex gap-4 mb-3'>
                            <img src='/images/icon-home.png' className='mt-2 h-full'/>
                            <div>
                                <h3>ADDRESS:</h3>
                                <p>Block E 1, Jhandewalan Extension, Jhandewalan, New Delhi, Delhi</p>
                            </div>
                        </div>
                        <div className='flex gap-4 mb-3'>
                            <img src='/images/icon-mail.png' className='mt-2 h-full'/>
                            <div>
                                <h3>EMAIL:</h3>
                                <p>info@pitchourway.com</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <img src='/images/icon-phone.png' className='mt-2 h-full'/>
                            <div>
                                <h3>PHONE:</h3>
                                <p>+91-8800606116</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer