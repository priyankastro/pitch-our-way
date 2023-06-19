import React from 'react'

const Locate = () => {
    return (
        <>
            <div className='mx-auto px-4 pt-0 lg:pt-20'>
                <div className='text-center'>
                    <h2 className='title-sm font-medium'>get in touch</h2>
                    <div className='flex justify-center gap-x-2 mb-10'>
                        <button className='btn-light-blue active'>India</button>
                        <button className='btn-light-blue'>Canada</button>
                    </div>
                    <div className='flex justify-center gap-x-1 lg:gap-x-7 mb-10'>
                        <button className='btn-coral active'>Delhi</button>
                        <button className='btn-coral'>Chandigarh</button>
                        <button className='btn-coral'>Lucknow</button>
                        <button className='btn-coral'>Canada</button>
                    </div>
                </div>

            </div>
            <div className='flex flex-col md:relative'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.878941172065!2d77.19813044411075!3d28.646557168213963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6765dc0fa9%3A0xd74d1ed4423f8cce!2sJhandewalan%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1686425468815!5m2!1sen!2sin" width="100%" height="600" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='max-w-screen-2xl mx-auto lg:px-4 md:absolute top-0 left-0 flex items-center w-full h-full order-first'>
                    <div className='card-location lg:ml-40'>
                        <h3 className='title-sm font-medium text-center mb-3'>our location</h3>
                        <h2 className='text-xl font-bold text-center mb-5 text-white'>India Office</h2>
                        <h1 className='font-bold text-sm mb-2'>Delhi:</h1>
                        <p className='text-sm mb-3'>Block E 1, Jhandewalan Extension, Jhandewalan, New Delhi, Delhi</p>
                        <h1 className='font-bold text-sm mb-2'>Delhi:</h1>
                        <p className='text-sm mb-3'>Block E 1, Jhandewalan Extension, Jhandewalan, New Delhi, Delhi</p>
                        <h1 className='font-bold text-sm mb-2'>Delhi:</h1>
                        <p className='text-sm mb-3'>Block E 1, Jhandewalan Extension, Jhandewalan, New Delhi, Delhi</p>
                        <div className='flex justify-center mt-5 gap-x-3'>
                            <button><img src='/images/icon-prev.png' /></button>
                            <button><img src='/images/icon-next.png' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Locate