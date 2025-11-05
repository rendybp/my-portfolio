'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isDropdownOpen])

    return (
        <div className='w-11/12 max-w-6xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 my-5'>
            <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration: 0.8, type: 'spring', stiffness: 100}}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full w-36'/>
            </motion.div>
            <motion.h3 
            initial={{y:-20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.3}}
            className='flex items-end gap-2 text-xl md:text-2xl font-ovo'>
                Hi I'm Rendi Buana Perdana  <Image src={assets.hand_icon} alt='' className='w-6'/>
            </motion.h3>
            <motion.h1 
            initial={{y:-30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}}
            className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
                Web developer based in Indonesia
            </motion.h1>
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.7}}
            className='max-w-3xl mx-auto font-ovo'>
                I'm a web developer with a strong foundation in Laravel, JavaScript, and modern frameworks. With experience in both software development and finance administration, I'm passionate about creating efficient, user-friendly, and data-driven web solutions. My goal is to blend technology and precision to help organizations work smarter and achieve measurable results.
            </motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a 
                initial={{y:30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1}}
                href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>
                
                {/* Split CV Download Button */}
                <motion.div
                initial={{y:30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.2}}
                ref={dropdownRef}
                className='relative'
                >
                    <div className='flex border rounded-full border-gray-500 bg-white overflow-hidden'>
                        {/* Main Download Button - English CV */}
                        <a 
                            href="/resume-rendi-en.pdf" 
                            download 
                            className='pl-6 pr-[17px] py-3 flex items-center gap-2 dark:text-black hover:bg-gray-200 dark:hover:bg-gray-200 transition-colors'
                        >
                            My Resume 
                            <Image src={assets.download_icon} alt='' className='w-4'/>
                        </a>

                        {/* Dropdown Toggle */}
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className='px-3 py-3 border-l border-gray-200 hover:bg-gray-200 transition-colors dark:text-black cursor-pointer'
                        >
                            <motion.svg 
                                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className='w-4 h-4' 
                                fill='none' 
                                viewBox='0 0 24 24' 
                                stroke='currentColor'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </motion.svg>
                        </button>
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className='absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden z-10'
                            >
                                <a
                                    href="/resume-rendi-en.pdf"
                                    download
                                    className='flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors border-b border-gray-200'
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span className='text-l dark:text-black'>EN</span>
                                    <div className='flex-1'>
                                        <div className='font-semibold text-gray-900 dark:text-gray-900 text-sm'>English Version</div>
                                    </div>
                                    <Image src={assets.download_icon} alt='' className='w-4'/>
                                </a>

                                <a
                                    href="/resume-rendi-id.pdf"
                                    download
                                    className='flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors'
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    <span className='text-l dark:text-black'>ID</span>
                                    <div className='flex-1'>
                                        <div className='font-semibold text-gray-900 dark:text-gray-900 text-sm'>Indonesian Version</div>
                                    </div>
                                    <Image src={assets.download_icon} alt='' className='w-4'/>
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}

export default Header