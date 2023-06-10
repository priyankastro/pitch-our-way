import React from 'react'

const Experience = () => {
    return (
        <div className='max-w-screen-lg mx-auto px-4 py-20'>
            <h2 className='title-sm font-medium'>EXPERIENCE THAT MATTERS</h2>
            <h3 className='title-md mb-7'> Looking to raise your next funding round? Enlist our expertise to transform your startup journey into a captivating narrative. Let&apos;s begin!</h3>
            <div className='grid grid-cols-3 gap-16'>
                <div className='py-5'>
                    <img src='/images/experience/e-1.png' className='w-full'></img>
                    <h3 className='font-semibold mt-5 mb-2'>$8M, Series A</h3>
                    <q className='text-sm font-medium'>
                        Deepak & his team at Slyds are outstanding at what they do. Always operating under impossible deadlines, they have produced world-class slide decks of very high quality that always get rave reviews.
                    </q>
                    <h4 className='mt-5 text-coral-blue font-semibold'>Rajan Bajaj- Founder & CEO</h4>
                </div>
                <div className='py-5'>
                    <img src='/images/experience/e-2.png' className='w-full'></img>
                    <h3 className='font-semibold mt-5 mb-2'>$8M, Series A</h3>
                    <q className='text-sm font-medium'>
                        SlydS team had great understanding of the market. We received timely advice from them not only on the design but content, story and flow of my pitch. Kudos guys, keep up.
                    </q>
                    <h4 className='mt-5 text-coral-blue font-semibold'>Harsh Jain - Founder</h4>
                </div>
                <div className='py-5'>
                    <img src='/images/experience/e-3.png' className='w-full'></img>
                    <h3 className='font-semibold mt-5 mb-2'>$8M, Series A</h3>
                    <q className='text-sm font-medium'>
                        Team SlydS understands business. Its in their DNA. They work closely with the investment banker and the clients like an extended team. Good designs quick timelines.
                    </q>
                    <h4 className='mt-5 text-coral-blue font-semibold'>Byju</h4>
                </div>
            </div>
        </div>
    )
}

export default Experience