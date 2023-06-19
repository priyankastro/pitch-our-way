import React from 'react'
import Banner2 from './banner2'

const Blog = () => {
    return (
        <>
            <div className='max-w-screen-lg mx-auto px-4 py-2'>
                <div className='text-center'>
                    <h2 className='title-sm font-medium'>BLOGS</h2>
                    <h3 className='title-md mb-7'>Discover Insights, Best Practices, and more</h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='py-5'>
                        <img src='/images/experience/e-1.png' className='w-full'></img>
                        <h3 className='font-semibold mt-5 mb-2'>Funding winter is NOT the reason why startups are not doing Series A rounds</h3>
                        <p className='text-sm font-light mb-2'>
                            There&apos;s no doubt that liquidity in the market...
                        </p>
                        <button className='tag px-3 py-1 rounded text-xs'>Read More</button>
                    </div>
                    <div className='py-5'>
                        <img src='/images/experience/e-2.png' className='w-full'></img>
                        <h3 className='font-semibold mt-5 mb-2'>Funding winter is NOT the reason why startups are not doing Series A rounds</h3>
                        <p className='text-sm font-light mb-2'>
                            There&apos;s no doubt that liquidity in the market...
                        </p>
                        <button className='tag px-3 py-1 rounded text-xs'>Read More</button>
                    </div>
                    <div className='py-5'>
                        <img src='/images/experience/e-1.png' className='w-full'></img>
                        <h3 className='font-semibold mt-5 mb-2'>Funding winter is NOT the reason why startups are not doing Series A rounds</h3>
                        <p className='text-sm font-light mb-2'>
                            There&apos;s no doubt that liquidity in the market...
                        </p>
                        <button className='tag px-3 py-1 rounded text-xs'>Read More</button>
                    </div>
                    <div className='py-5'>
                        <img src='/images/experience/e-2.png' className='w-full'></img>
                        <h3 className='font-semibold mt-5 mb-2'>Funding winter is NOT the reason why startups are not doing Series A rounds</h3>
                        <p className='text-sm font-light mb-2'>
                            There&apos;s no doubt that liquidity in the market...
                        </p>
                        <button className='tag px-3 py-1 rounded text-xs'>Read More</button>
                    </div>
                </div>
                <div className='text-center mt-10'>
                    <h2 className='title-md mb-5 text-[1.5rem]'>Get into details now?</h2>
                    <button className='btn rounded-lg px-14 py-2 text-sm'>view all blogs</button>
                </div>
            </div>
            <Banner2 />
        </>
    )
}

export default Blog