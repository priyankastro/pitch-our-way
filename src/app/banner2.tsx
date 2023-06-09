import React from 'react'

const Banner2 = () => {
    return (
        <div className='mid-banner my-20 h-[400px]'>
            <div className='max-w-screen-2xl mx-auto px-4 relative'>
                <div className='grid grid-cols-5 gap-4 content-center h-[400px]'>
                    <div className='relative'>
                        <img src='/images/logo.png' className='float-right mr-5' />
                        <img src='/images/wave.png' className='absolute bottom-[5rem] right-[1.85rem]' />
                    </div>
                    <div className='col-start-2 col-span-3 col-end-4'>
                        <h1 className='text-blue font-semibold text-2xl'>Want to be the next UNICORN?</h1>
                        <h1 className='text-blue font-semibold text-2xl mb-7'>Become a STORYTELLER.</h1>
                        <p className='text-sm mb-7'>Or hire <span className='text-blue font-semibold'>Slyds - Top Investment Presentation Builder in India</span></p>
                        <p>We have created pitch decks that have closed billions in investments for leading startups and unicorns. Time is nigh!</p>
                        <button className='mt-8 btn rounded-md'>Get Started</button>
                    </div>
                </div>
                <img src='/images/banner-3.png' className='absolute top-0 right-0 h-[400px]' />
            </div>
        </div>
    )
}

export default Banner2