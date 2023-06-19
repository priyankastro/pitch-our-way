import React from 'react'

const ContactForm = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 pt-0 pb-20 lg:py-20'>
            <div className='lg:flex lg:flex-row gap-4 items-center'>
                <div className='basis-2/5 lg:px-20'>
                    <h2 className='title-md mb-7'>Form line - Fast-track your progress, schedule a call with our fundraise experts.</h2>
                </div>
                <div className='basis-3/5 md:pl-10 md:pr-20'>
                    <form className='contact-form flex flex-col gap-8'>
                        <div className='md:flex gap-8'>
                            <div className='flex-auto mb-8 md:mb-0'>
                                <label className='block text-sm font-semibold mb-2'>Company Name*</label>
                                <input type='text' placeholder='Company Name' />
                            </div>
                            <div className='flex-auto'>
                                <label className='block text-sm font-semibold mb-2'>Email*</label>
                                <input type='text' placeholder='Business Email' />
                            </div>
                        </div>
                        <div className='md:flex gap-8'>
                            <div className='flex-auto mb-8 md:mb-0'>
                                <label className='block text-sm font-semibold mb-2'>Contact Name*</label>
                                <input type='text' placeholder='Contact Name' />
                            </div>
                            <div className='flex-auto'>
                                <label className='block text-sm font-semibold mb-2'>Phone Number*</label>
                                <input type='text' placeholder='Phone Number' />
                            </div>
                        </div>
                        <div className='md:flex gap-8'>
                            <div className='flex-auto mb-8 md:mb-0'>
                                <label className='block text-sm font-semibold mb-2'>Date*</label>
                                <input type='date' placeholder='mm/dd/yyyy' />
                            </div>
                            <div className='flex-auto mb-8 md:mb-0'>
                                <label className='block text-sm font-semibold mb-2'>Time</label>
                                <input type='time' placeholder='Phone Number' />
                            </div>
                            <div className='flex-auto mt-auto'>
                                <button className='btn rounded-md w-full py-2'>Get Started</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm