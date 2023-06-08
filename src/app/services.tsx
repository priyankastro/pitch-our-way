import React from 'react'
import Image from 'next/image'
import Banner1 from './banner1'
import Portfolio from './portfolio'
import Promotion1 from './promotion1'

const Services = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto px-4 py-10 relative'>
                <Image className='absolute top-[-20px] left-[-5rem] z-[-1]' src={'/images/img-service.png'} width={500} height={0} alt='Explore'></Image>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-start-2 col-span-2 pl-14'>
                        <h2 className='title-sm font-medium'>OUR SERVICES</h2>
                        <h3 className='title-md mb-7'>Achieving the ideal harmony of narrative, numbers, and aesthetics.</h3>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='card-services'>
                                <div className='flex'>
                                    <h2 className='basis-3/4 font-bold text-lg'>IM / Investment Pitch Decks</h2>
                                    <img className='basis-1/4' src='/images/service/s-icon-1.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Financial Modelingand Analyses</h2>
                                    <img className='basis-1/4' src='/images/service/s-icon-2.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Investors Connect</h2>
                                    <img className='basis-1/4' src='/images/service/s-icon-3.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Sales Presentations</h2>
                                    <img className='basis-1/4' src='/images/service/s-icon-4.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Corporate Profiles</h2>
                                    <img className='basis-1/4' src='/images/service/s-icon-5.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Business Valuation</h2>
                                    <img className='basis-1/4' src='/images/service/s-icon-6.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex'>
                                    <h2 className='basis-3/4 font-bold text-lg'>Sales Presentations</h2>
                                    <img className='basis-1/4' src='/images/service/s-icon-5.png'></img>
                                </div>
                            </div>
                            <div className='card-services'>
                                <div className='flex'>
                                    <h2 className='basis-3/4 font-bold text-lg'>IM / Investment Pitch Decks</h2>
                                    <img className='basis-1/4' src='/images/service/s-icon-6.png'></img>
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