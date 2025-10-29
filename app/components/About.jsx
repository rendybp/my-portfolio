'use client'

import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { delay, motion, scale } from "motion/react"
import InfoModal from './InfoModal'

const About = ({isDarkMode}) => {
    const [selectedInfo, setSelectedInfo] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleInfoClick = (info) => {
        setSelectedInfo(info)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedInfo(null), 300) // Clear after animation
    }

    return (
        <>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id='about' className='w-full px-6 lg:px-8 py-7 2xl:py-10 scroll-mt-20'>
            <div className='mx-auto max-w-6xl'>
                <motion.h4 
                initial={{opacity: 0, y:-20}}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay:0.3}}
                className='text-center mb-1 text-lg font-ovo'>Introduction</motion.h4>
                <motion.h2 
                initial={{opacity: 0, y:-20}}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.5, delay:0.5}}
                className='text-center text-5xl font-ovo'>About me</motion.h2>

                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8}}
                className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 2xl:gap-20 my-8 lg:my-7 2xl:my-10'>
                    <motion.div 
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6}}
                    className='w-48 sm:w-64 2xl:w-80 rounded-3xl flex-shrink-0'>
                        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay:0.8}}
                    className='flex-1 max-w-2xl'>
                        <p className='mb-6 lg:mb-7 2xl:mb-10 font-ovo text-justify leading-relaxed 2xl:leading-loose'>
                            I am a detail-oriented and versatile professional with over five years of combined experience in administration, finance management, and web development. Skilled in managing school financial operations and ensuring compliance through ARKAS and other government systems, I bring a structured and analytical approach to every task. In addition, I have developed efficient and user-friendly web applications using Laravel, WordPress, and modern JavaScript frameworks, with a focus on functionality, scalability, and user experience. I'm passionate about applying technology to improve workflow efficiency, data accuracy, and organizational performance. My multidisciplinary background allows me to bridge the gap between technical development and operational management, transforming complex ideas into practical, impactful digital solutions.
                        </p>

                        <motion.ul 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.8, delay:1}}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 xl:gap-6'>
                            {infoList.map(({icon, iconDark, title, description}, index) => (
                                <motion.li 
                                whileHover={{scale: 1.05}}
                                key={index}
                                onClick={() => handleInfoClick({icon, iconDark, title, description})}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 xl:p-5 2xl:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 2xl:w-7 mt-2 2xl:mt-3'/>
                                    <h3 className='my-3 xl:my-4 font-semibold text-gray-700 dark:text-white text-base xl:text-sm 2xl:text-base'>{title}</h3>
                                    <p className='text-gray-600 text-sm xl:text-xs 2xl:text-sm dark:text-white/80 leading-relaxed'>{description}</p>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.h4 
                        initial={{y: 20, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{delay:1.3, duration:0.5}}
                        className='my-4 lg:my-5 2xl:my-6 text-gray-700 font-ovo dark:text-white/80 text-base xl:text-sm 2xl:text-base'>I am familiar with</motion.h4>
                        <motion.ul 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:1.5, duration:0.6}}
                        className='grid items-center gap-2 sm:gap-3 lg:gap-4 grid-cols-[repeat(auto-fit,minmax(45px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(50px,1fr))]'>
                            {toolsData.map(({icon, link}, index)=>(
                                <motion.li 
                                whileHover={{scale: 1.1}}
                                className='flex items-center justify-center w-11 sm:w-12 2xl:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500' key={index}>
                                    <a target='_blank' href={link}><Image src={icon} alt='Tool' className='w-5 sm:w-7'/></a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>

        {/* Info Modal */}
        <InfoModal 
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            info={selectedInfo}
            isDarkMode={isDarkMode}
        />
        </>
    )
}

export default About