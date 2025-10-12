import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-6 lg:px-8 py-10 scroll-mt-20'>
            <div className='mx-auto max-w-7xl'>
                <h4 className='text-center mb-2 text-lg font-ovo'>What I Offer</h4>
                <h2 className='text-center text-5xl font-ovo'>My Services</h2>

                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                    I am a web developer from Indonesia with 5 years of experience in various programming language such as Javascript, PHP, React, Laravel, etc.
                </p>

                <div className='grid gap-6 my-10 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
                    {serviceData.map(({icon, title, description, link}, index)=>(
                        <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                            <Image src={icon} alt='' className='w-10'/>
                            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                            <p className='text-sm text-gray-600 leading-5'>
                                {description}
                            </p>
                            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                                Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services