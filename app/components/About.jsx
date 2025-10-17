import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { delay, motion, scale } from "motion/react"

const About = ({isDarkMode}) => {
    return (
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        id='about' className='w-full px-6 lg:px-8 py-10 scroll-mt-20'>
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
                className='flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 my-16'>
                    <motion.div 
                    initial={{opacity: 0, scale: 0.9}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.6}}
                    className='w-64 sm:w-80 rounded-3xl'>
                        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
                    </motion.div>
                    <motion.div 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay:0.8}}
                    className='flex-1 max-w-2xl'>
                        <p className='mb-10 font-ovo text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus dolores beatae asperiores ipsa nemo esse totam, sit reiciendis sapiente cumque sint ea fuga eligendi nihil vel! Fugit, deserunt corrupti facere ipsa expedita veniam est vero id aspernatur, rerum quis aut incidunt sint labore quae ab similique nisi illo at obcaecati qui vitae reiciendis itaque? Atque, ullam totam beatae aspernatur odio pariatur aliquam voluptatibus quos reiciendis, suscipit eos ea voluptatum distinctio sequi adipisci earum autem rerum accusamus ex cupiditate, sunt eum dolorum nulla ipsa. Sit nisi velit dolorum quasi officiis, odio ipsam voluptas placeat iste doloribus, culpa provident porro ab.
                        </p>

                        <motion.ul 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.8, delay:1}}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                            {infoList.map(({icon, iconDark, title, description}, index) => (
                                <motion.li 
                                whileHover={{scale: 1.05}}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                                </motion.li>
                            ))}
                        </motion.ul>
                        <motion.h4 
                        initial={{y: 20, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{delay:1.3, duration:0.5}}
                        className='my-6 text-gray-700 font-ovo dark:text-white/80'>I am familiar with</motion.h4>
                        <motion.ul 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:1.5, duration:0.6}}
                        className='grid items-center gap-3 sm:gap-5 grid-cols-[repeat(auto-fit,minmax(50px,1fr))]'>
                            {toolsData.map((tool, index)=>(
                                <motion.li 
                                whileHover={{scale: 1.1}}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500' key={index}>
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About