import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id='services' className='w-full px-6 lg:px-8 py-10 scroll-mt-20'>
            <div className='mx-auto max-w-7xl'>
                <motion.h4 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: 0.3, duration: 0.5}}
                className='text-center mb-1 text-lg font-ovo'>What I Offer</motion.h4>
                <motion.h2 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: 0.5, duration: 0.5}}
                className='text-center text-5xl font-ovo'>My Services</motion.h2>

                <motion.p 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.7, duration: 0.5}}
                className='text-center max-w-2xl mx-auto mt-4 lg:mt-5 mb-8 lg:mb-12 font-ovo text-sm lg:text-base'>
                    I am a web developer from Indonesia with 5 years of experience in various programming language such as Javascript, PHP, React, Laravel, etc.
                </motion.p>

                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.9, duration: 0.6}}
                className='grid gap-4 lg:gap-5 xl:gap-6 my-6 lg:my-8 xl:my-10 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
                    {serviceData.map(({icon, title, description, link}, index)=>(
                        <motion.div 
                        whileHover={{scale: 1.05}}
                        key={index} className='border border-gray-400 rounded-lg px-6 py-8 lg:px-8 lg:py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                            <Image src={icon} alt='' className='w-8 lg:w-10'/>
                            <h3 className='text-base lg:text-lg my-3 lg:my-4 text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-xs lg:text-sm text-gray-600 leading-relaxed dark:text-white/80'>
                                {description}
                            </p>
                            <a href={link} className='flex items-center gap-2 text-xs lg:text-sm mt-4 lg:mt-5'>
                                Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Services