import React from 'react'
import Image from 'next/image'
import Banner1 from './banner1'
import Portfolio from './portfolio'
import Promotion1 from './promotion1'

const Services = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto px-4 py-10 relative'>
                <Image className='lg:absolute top-[-20px] left-[-5rem] z-[-1]' src={'/images/img-service.png'} width={500} height={0} alt='Explore'></Image>
                <div className='lg:grid lg:grid-cols-3 lg:gap-4'>
                    <div className='lg:col-start-2 lg:col-span-2 lg:pl-14 mt-20 lg:mt-0'>
                        <h2 className='title-sm font-medium'>OUR SERVICES</h2>
                        <h3 className='title-md mb-7'>Achieving the ideal harmony of narrative, numbers, and aesthetics.</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <div className='card-services'>
                                <div className='flex w-full lg:w-auto'>
                                    <h2 className='basis-3/4 font-bold text-lg'>IM / Investment Pitch Decks</h2>
                                    <img className='basis-1/6 md:basis-1/4' src='/images/service/s-icon-1.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex w-full lg:w-auto'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Financial Modelingand Analyses</h2>
                                    <img className='basis-1/6 md:basis-1/4' src='/images/service/s-icon-2.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex w-full lg:w-auto'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Investors Connect</h2>
                                    <img className='basis-1/6 md:basis-1/4' src='/images/service/s-icon-3.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex w-full lg:w-auto'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Sales Presentations</h2>
                                    <img className='basis-1/6 md:basis-1/4' src='/images/service/s-icon-4.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex w-full lg:w-auto'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Corporate Profiles</h2>
                                    <img className='basis-1/6 md:basis-1/4' src='/images/service/s-icon-5.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex w-full lg:w-auto'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Business Valuation</h2>
                                    <img className='basis-1/6 md:basis-1/4' src='/images/service/s-icon-6.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex w-full lg:w-auto'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Sales Presentations</h2>
                                    <img className='basis-1/6 md:basis-1/4' src='/images/service/s-icon-5.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex w-full lg:w-auto'>
                                    <h2 className='basis-3/4 font-bold text-lg'>IM / Investment Pitch Decks</h2>
                                    <img className='basis-1/6 md:basis-1/4' src='/images/service/s-icon-6.png'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner1 />
            <Portfolio />
            <Promotion1 />
        </>
    )
}

export default Services