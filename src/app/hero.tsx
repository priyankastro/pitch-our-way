import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <div className='banner' />
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex items-center h-[700px]'>
                        <div>
                            <h1 className='font-extrabold text-xs tracking-wider rounded-3xl bg-[#ffffff99] w-fit px-[1.4rem] py-[0.4rem]'>FIND THE RIGHT WAY</h1>
                            <p className='large-text mb-7'>Powerful deck, strategic projections, and investor-aligned fundraise.</p>
                            <p className='text-md leading-7 mb-7 font-medium'>Our comprehensive startup support includes tailored services by consultants and investors who perfectly align with your target pitch audience, ensuring maximum effectiveness and success.</p>
                            <button className='btn btn-cta rounded-3xl'>TALK TO US!</button>
                        </div>
                    </div>
                </div>
                <Image className='absolute top-[-1rem] right-5 z-[-1]' src={'/images/banner2.png'} width={720} height={720} alt='Explore'></Image>
            </div>
        </>
    )
}

export default Hero