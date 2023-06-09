import React from 'react'

const Recognition = () => {
    return (
        <div className='max-w-screen-lg mx-auto px-4 py-20'>
            <h2 className='title-sm font-medium'>BRAND RECOGNITION</h2>
            <h3 className='title-md mb-7'>We prominently featured!</h3>
            <div className='grid grid-cols-3 gap-4'>
                <div className='px-5 py-10'>
                    <img src='/images/portfolio/p-2.png' className='w-full'></img>
                    <h3 className='text-xl font-semibold mt-3 mb-7 blue-underline'>Your Story</h3>
                    <p className='text-sm font-medium'>
                        PPT demo at Construct fest lands Slyds with funding from Bonito Designs
                    </p>
                </div>
                <div className='px-5 py-10'>
                    <img src='/images/portfolio/p-3.png' className='w-full'></img>
                    <h3 className='text-xl font-semibold mt-3 mb-7 blue-underline'>Silicon India</h3>
                    <p className='text-sm font-medium'>
                        10 Most Promising Corporate Presentation Services Providers 2020
                    </p>
                </div>
                <div className='px-5 py-10'>
                    <img src='/images/portfolio/p-2.png' className='w-full'></img>
                    <h3 className='text-xl font-semibold mt-3 mb-7 blue-underline'>Your Story</h3>
                    <p className='text-sm font-medium'>
                        PPT demo at Construkt fest lands Slyds with funding from Bonito Designs
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Recognition