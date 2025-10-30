'use client'

import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import ServiceModal from './ServiceModal'

const Services = () => {
    const [selectedService, setSelectedService] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleServiceClick = (service) => {
        setSelectedService(service)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedService(null), 300) // Clear after animation
    }

    return (
        <>
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
                className='text-center max-w-2xl mx-auto mt-4 2xl:mt-5 mb-8 2xl:mb-12 font-ovo'>
                    I am a web developer and administrative professional from Indonesia with over five years of experience in software development, data management, and organizational administration.
                </motion.p>

                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 0.9, duration: 0.6}}
                className='grid gap-4 lg:gap-5 xl:gap-6 my-6 lg:my-8 xl:my-10 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
                    {serviceData.map(({icon, title, description, link}, index)=>(
                        <motion.div 
                        whileHover={{scale: 1.05}}
                        key={index} 
                        onClick={() => handleServiceClick({icon, title, description, link})}
                        className='border border-gray-400 rounded-lg px-6 py-8 lg:px-8 lg:py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                            <Image src={icon} alt='' className='w-8 lg:w-10'/>
                            <h3 className='text-lg my-3 lg:my-4 text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-sm text-gray-600 leading-relaxed dark:text-white/80'>
                                {description}
                            </p>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleServiceClick({icon, title, description, link})
                                }}
                                className='flex items-center gap-2 text-sm mt-4 lg:mt-5 hover:gap-3 transition-all'
                            >
                                Read more <Image src={assets.right_arrow} alt='' className='w-4'/>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>

        {/* Service Modal */}
        <ServiceModal 
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            service={selectedService}
        />
        </>
    )
}

export default Services