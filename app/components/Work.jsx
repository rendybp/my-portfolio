'use client'

import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
import WorkModal from './WorkModal'

const Work = ({ isDarkMode }) => {
    const [selectedWork, setSelectedWork] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Carousel states
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Create duplicated arrays to guarantee a seamless infinite loop buffer.
    // bufferCount safely calculates enough copies based on underlying data length.
    const bufferCount = Math.max(3, Math.ceil(15 / (workData.length || 1)));
    const copies = bufferCount * 2 + 1;
    const extendedData = Array.from({ length: copies }).flatMap(() => workData);
    const middleIndex = bufferCount * workData.length;

    const [currentIndex, setCurrentIndex] = useState(middleIndex);

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    const handleAnimationComplete = () => {
        // Evaluate bounds safely to loop cleanly back near the middle
        if (currentIndex <= middleIndex - workData.length) {
            setIsTransitioning(false);
            setCurrentIndex(prev => prev + workData.length);
        } else if (currentIndex >= middleIndex + workData.length) {
            setIsTransitioning(false);
            setCurrentIndex(prev => prev - workData.length);
        }
    };

    const handleWorkClick = (work) => {
        setSelectedWork(work)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setTimeout(() => setSelectedWork(null), 300) // Clear after animation
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                id='work' className='w-full px-6 lg:px-8 py-10 scroll-mt-20'>
                <div className='mx-auto max-w-7xl'>
                    <motion.h4
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className='text-center mb-1 text-lg font-ovo'>My Portfolio</motion.h4>
                    <motion.h2
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='text-center text-5xl font-ovo'>My latest work</motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className='text-center max-w-4xl mx-auto mt-4 lg:mt-5 mb-8 font-ovo'>
                        Welcome to my professional portfolio! Explore my work experience in web development, administration, and finance management - combining technical expertise with strong organizational and analytical skills.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className='work-carousel-container w-full relative overflow-hidden py-4 -my-4 dark:text-black'>
                        <style>{`
                        .work-carousel-container {
                            container-type: inline-size;
                        }
                        .work-carousel-track {
                            --carousel-gap: 1rem;
                            --item-width: 100cqw;
                            gap: var(--carousel-gap);
                        }
                        @container (min-width: 768px) {
                            .work-carousel-track {
                                --carousel-gap: 1.25rem;
                                --item-width: calc((100cqw - 2 * var(--carousel-gap)) / 3);
                            }
                        }
                        @container (min-width: 1024px) {
                            .work-carousel-track {
                                --carousel-gap: 1.25rem;
                                --item-width: calc((100cqw - 3 * var(--carousel-gap)) / 4);
                            }
                        }
                        .work-carousel-item {
                            flex-shrink: 0;
                            width: var(--item-width);
                        }
                    `}</style>
                        <motion.div
                            className='work-carousel-track flex items-center'
                            animate={{ x: `calc(-${currentIndex} * (var(--item-width) + var(--carousel-gap)))` }}
                            transition={isTransitioning ? { type: 'tween', ease: 'easeInOut', duration: 0.5 } : { duration: 0 }}
                            onAnimationComplete={handleAnimationComplete}
                        >
                            {extendedData.map((project, index) => (
                                <div key={index} className="work-carousel-item">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => handleWorkClick(project)}
                                        className='aspect-square w-full bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden'
                                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-500 group-hover:bottom-7'>
                                            <div>
                                                <h2 className='font-semibold'>{project.title}</h2>
                                                <p className='text-sm text-gray-700'>{project.description}</p>
                                            </div>
                                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition duration-300'>
                                                <Image src={assets.send_icon} alt='send icon' className='w-5' />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex justify-center items-center gap-4 mt-8 -mb-4"
                    >
                        <button onClick={handlePrev} aria-label="Previous Project" className="border-[0.5px] border-gray-700 dark:border-white p-3 rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition shadow-sm bg-white dark:bg-[#1a1a1a] cursor-pointer">
                            <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Previous' className="w-4 rotate-180" />
                        </button>
                        <button onClick={handleNext} aria-label="Next Project" className="border-[0.5px] border-gray-700 dark:border-white p-3 rounded-full hover:bg-lightHover dark:hover:bg-darkHover transition shadow-sm bg-white dark:bg-[#1a1a1a] cursor-pointer">
                            <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Next' className="w-4" />
                        </button>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        target="_blank" href="https://linkedin.com/in/rendi-buana-perdana/" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto mt-12 mb-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
                        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right Arrow' className='w-4' />
                    </motion.a>
                </div>
            </motion.div>

            {/* Work Experience Modal */}
            <WorkModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                work={selectedWork}
            />
        </>
    )
}

export default Work