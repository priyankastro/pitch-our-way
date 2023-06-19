import React from 'react'

const Banner1 = () => {
    return (
        <div className='mid-banner my-20'>
            <div className='max-w-screen-2xl mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 content-center h-auto md:h-[600px]'>
                    <div>
                        <h1 className='title-md mb-7'>Mobile-Enabled Decks to Seize Opportunities</h1>
                        <p className='text-sm mb-7'>A staggering 90% of initial interactions between founders and investors happen on smartphones. Make the most of this opportunity to create a captivating and memorable first impression.</p>
                        <h2 className='title-md text-xl font-bold'>Smaller Screen</h2>
                        <h2 className='title-md text-xl font-bold'>Bigger Impact</h2>
                        <button className='mt-7 btn rounded-md'>Convert into Mobile Presentation</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner1