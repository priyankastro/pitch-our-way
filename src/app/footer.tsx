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
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Services</a></li>
                        <li><a href='/'>Get Set Funded</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Contact Us</a></li>
                    </div>
                    <div className='flex-auto px-7'>
                        <h3 className='font-bold text-lg mb-6'>Contact Us</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer