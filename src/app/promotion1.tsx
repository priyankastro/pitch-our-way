import React from 'react'

const Promotion1 = () => {
    return (
        <div className='max-w-screen-lg mx-auto px-4 py-20'>
            <h3 className='title-md mb-7 text-center'>Live Deals</h3>
            <p className='text-center'>Access highly-vetted investment opportunities in startups across the various sectors.</p>
            <div className='grid grid-cols-3 gap-4 my-10'>
                <div className='card-deal'>
                    <img src='/images/deals/d-1.png'></img>
                    <div className='card-body'>
                        <div className='flex'>
                            <img src='/images/deals/d-icon-1.png'></img>
                            <div>
                                <h6 className='text-sm font-bold'>Melvano</h6>
                                <div className='flex gap-x-2'>
                                    <p className='tag'>EdTech</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-sm font-light mb-7'>Melvano Inc. is an IIT Madras startup with 3L installs that offers IITJEE and NEET courses via Melvano app & Upskil...</p>
                        <button className='btn btn-demo'>Show Interest</button>
                    </div>
                </div>
                <div className='card-deal'>
                    <img src='/images/deals/d-2.png'></img>
                    <div className='card-body'>
                        <div className='flex'>
                            <img src='/images/deals/d-icon-1.png'></img>
                            <div>
                                <h6 className='text-sm font-bold'>InfraMandi</h6>
                                <div className='flex gap-x-2'>
                                    <p className='tag'>Construction</p>
                                    <p className='tag'>real</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-sm font-light mb-7'> Inframandi is a digital B2B marketplace specializing in the purchase of construction materials...</p>
                        <button className='btn btn-demo'>Show Interest</button>
                    </div>
                </div>
                <div className='card-deal'>
                    <img src='/images/deals/d-3.png'></img>
                    <div className='card-body'>
                        <div className='flex'>
                            <img src='/images/deals/d-icon-1.png'></img>
                            <div>
                                <h6 className='text-sm font-bold'>Elecbits</h6>
                                <div className='flex gap-x-2'>
                                    <p className='tag'>IOT</p>
                                    <p className='tag'>Hardware</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-sm font-light mb-7'> A tech-enabled, smart platform helping hardware enterprises and startups to go from an idea to mass manufacturing a...</p>
                        <button className='btn btn-demo'>Show Interest</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <button className='btn rounded-lg px-10 py-1 text-sm'>View All</button>
            </div>
        </div>
    )
}

export default Promotion1