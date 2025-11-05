'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"

const Header = () => {
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

                {/* Resume download with dropdown */}
                <motion.div
                    initial={{y:30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 1.2}}
                    className='relative'
                >
                    <ResumeDropdown />
                </motion.div>
            </div>
        </div>
    )
}

export default Header

function ResumeDropdown(){
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(()=>{
        function handleClick(e){
            if(ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        function handleKey(e){
            if(e.key === 'Escape') setOpen(false)
        }
        document.addEventListener('mousedown', handleClick)
        document.addEventListener('keydown', handleKey)
        return ()=>{
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('keydown', handleKey)
        }
    },[])

    return (
        <div ref={ref} className='inline-block text-left'>
            <button onClick={()=>setOpen(prev => !prev)} aria-haspopup='true' aria-expanded={open} className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                <span>My Resume</span>
                <Image src={assets.download_icon} alt='' className='w-4'/>
                <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                    <path fillRule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z' clipRule='evenodd' />
                </svg>
            </button>

            <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className='absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden'
                >
                    <a href='/resume-rendi-en.pdf' download className='block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'>English (EN)</a>
                    <a href='/resume-rendi-id.pdf' download className='block px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'>Indonesian (ID)</a>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}