import React from 'react'

const About = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            <div className='grid grid-cols-2'>
                <div className="col-start-2">
                    <div className='card-ln relative'>
                        <div className='flex'>
                            <img src='/images/ln-card.png'></img>
                            <div className='px-5'>
                                <h4 className='my-5 font-bold text-lg'>A true product market fit</h4>
                                <p className='mb-5'>How to know if you have it...</p>
                                <p>#productmarketfit #gotomarket #startups</p>
                            </div>
                        </div>
                        <img className='absolute bottom-2 right-2' src='/images/icon-ln.png'></img>
                    </div>
                </div>
                <div className="col-start-1">
                    <h2 className='title-sm font-medium'>OUR METRICS</h2>
                    <h3 className='title-md'>What Makes Us Credible as a Start-Up Consultant</h3>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4 my-20'>
                <div className='card-rounded'>
                    <div className='w-full'>
                        <h4>750+</h4>
                        <p className='font-medium'>Startups worked</p>
                    </div>
                </div>
                <div className='card-rounded'>
                    <div className='w-full'>
                        <h4>8+</h4>
                        <p className='font-medium'>Countries served</p>
                    </div>
                </div>
                <div className='card-rounded'>
                    <div className='w-full'>
                        <h4>600+</h4>
                        <p className='font-medium'>Investors connect</p>
                    </div>
                </div>
                <div className='card-rounded'>
                    <div className='w-full'>
                        <h4>$1.7Bn</h4>
                        <p className='font-medium'>Investment raised</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About