"use client"
import clsx from 'clsx'
import React, { useState } from 'react'

const Locate = () => {
    const stateList = [
        { name: 'Delhi', address: 'Block E 1, Jhandewalan Extension, Jhandewalan, New Delhi, Delhi', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.878941172065!2d77.19813044411075!3d28.646557168213963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6765dc0fa9%3A0xd74d1ed4423f8cce!2sJhandewalan%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1686425468815!5m2!1sen!2sin' },
        { name: 'Chandigarh', address: 'Block A 2, Chandigarh Extension, Jhandewalan, New Delhi, Chandigarh', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.878941172065!2d77.19813044411075!3d28.646557168213963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6765dc0fa9%3A0xd74d1ed4423f8cce!2sJhandewalan%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1686425468815!5m2!1sen!2sin' },
        { name: 'Lucknow', address: 'Block A 2, Lucknow Extension, Jhandewalan, New Delhi, Lucknow', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.878941172065!2d77.19813044411075!3d28.646557168213963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd6765dc0fa9%3A0xd74d1ed4423f8cce!2sJhandewalan%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1686425468815!5m2!1sen!2sin' },
        { name: 'Bangalore', address: 'Block A 2, Bangalore Extension, Jhandewalan, New Delhi, Bangalore', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62241.30634492821!2d77.63299803797186!3d12.838000428070316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a5cfc0fce5af71d!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1687258602662!5m2!1sen!2sin' },
    ]
    const canada = { name: 'Canada', address: 'Block E 1, Canada Extension, Jhandewalan, Canada', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11028909.587053513!2d-104.70536561011032!3d47.55601837566831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x70f8425629621e09!2sOntario%2C%20Canada!5e0!3m2!1sen!2sin!4v1687262835118!5m2!1sen!2sin' }
    const [activeCountry, setActiveCountry] = useState('India')
    const [activeLocation, setActiveLocation] = useState(stateList[0])
    const [toggle, setToggle] = useState(0)
    const handleClickCountry = (x: any) => {
        setActiveCountry(x);
        x == 'Canada'? setActiveLocation(canada): setActiveLocation(stateList[0]);
    }
    const handleToggle = (x: any) => {
        if (x < 0) {
            setActiveLocation(stateList[stateList.length - 1]);
            setToggle(stateList.length - 1);
        }
        else if (x > stateList.length - 1) {
            setActiveLocation(stateList[0]);
            setToggle(0);
        }
        else {
            setActiveLocation(stateList[x]);
            setToggle(x);
        }
    }
    return (
        <>
            <div className='mx-auto px-4 pt-0 lg:pt-20'>
                <div className='text-center'>
                    <h2 className='title-sm font-medium'>get in touch</h2>
                    <div className='flex justify-center gap-x-2 mb-10'>
                        <button className={`${clsx({ ['active']: activeCountry == 'India' })} btn-light-blue`} onClick={()=>handleClickCountry('India')}>India</button>
                        <button className={`${clsx({ ['active']: activeCountry == 'Canada' })} btn-light-blue`} onClick={()=>handleClickCountry('Canada')}>Canada</button>
                    </div>
                    <div className={`${clsx({ ['invisible']: activeCountry != 'India' })} flex justify-center gap-x-2 lg:gap-x-7 mb-10`}>
                        {stateList.map((x, i) =>
                            <button onClick={() => setActiveLocation(x)} key={i} className={`btn-coral ${clsx({ ['active']: x.name == activeLocation.name })}`}>{x.name}</button>
                        )}
                    </div>
                </div>

            </div>
            <div className='flex flex-col md:relative'>
                <iframe src={activeLocation.url} width="100%" height="600" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className='max-w-screen-2xl mx-auto lg:px-4 md:absolute top-0 left-0 flex items-center w-full h-full order-first'>
                    <div className='card-location lg:ml-40'>
                        <h3 className='title-sm font-medium text-center mb-3'>our location</h3>
                        <h2 className='text-xl font-bold text-center mb-5 text-white'>{activeCountry} Office</h2>
                        <h1 className='font-bold text-sm mb-2'>{activeLocation.name}:</h1>
                        <p className='text-sm mb-3'>{activeLocation.address}</p>
                        {activeCountry == 'India' && <div className='flex justify-center mt-5 gap-x-3'>
                            <button onClick={() => handleToggle(toggle - 1)}><img src='/images/icon-prev.png' /></button>
                            <button onClick={() => handleToggle(toggle + 1)}><img src='/images/icon-next.png' /></button>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Locate