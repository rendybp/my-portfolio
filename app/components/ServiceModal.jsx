'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const ServiceModal = ({ isOpen, onClose, service }) => {
    // Close modal on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose()
        }
        
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!service) return null

    // Get detailed content based on service title
    const getServiceDetails = (title) => {
        const details = {
            'Web design': {
                fullDescription: 'Web development is the process of building, programming, and maintaining websites and web applications. It encompasses both front-end development (what users see and interact with) and back-end development (server-side logic and database management).',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Laravel'],
                features: [
                    'Responsive Design - Websites that work seamlessly across all devices',
                    'Modern UI/UX - Clean, intuitive interfaces with smooth interactions',
                    'Performance Optimization - Fast loading times and efficient code',
                    'SEO Friendly - Built with search engine optimization in mind',
                    'Cross-browser Compatibility - Consistent experience across all browsers'
                ],
                deliverables: ['Fully functional website', 'Source code', 'Documentation', 'Post-launch support']
            },
            'Mobile app': {
                fullDescription: 'Mobile app development involves creating software for mobile devices such as smartphones and tablets. This includes native apps for iOS and Android, as well as cross-platform solutions that work on multiple operating systems.',
                technologies: ['Flutter', 'React Native', 'Dart', 'Firebase', 'SQLite', 'REST APIs', 'Push Notifications'],
                features: [
                    'Native Performance - Smooth, fast apps that feel native to the platform',
                    'Cross-platform Development - Write once, deploy on iOS and Android',
                    'Offline Functionality - Apps that work without internet connection',
                    'Push Notifications - Keep users engaged with timely updates',
                    'Cloud Integration - Seamless sync across devices'
                ],
                deliverables: ['iOS and Android apps', 'Backend integration', 'App store deployment', 'Maintenance and updates']
            },
            'UI/UX design': {
                fullDescription: 'UI/UX design focuses on creating a seamless user experience through thoughtful interface design. It combines visual design, interaction design, and user research to create products that are both beautiful and functional.',
                technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer', 'Prototyping Tools'],
                features: [
                    'User Research - Understanding your target audience and their needs',
                    'Wireframing & Prototyping - Creating interactive mockups before development',
                    'Visual Design - Beautiful, on-brand interface designs',
                    'Usability Testing - Ensuring designs work for real users',
                    'Design Systems - Consistent, scalable design components'
                ],
                deliverables: ['Design mockups', 'Interactive prototypes', 'Design system', 'Design specifications']
            },
            'Graphics design': {
                fullDescription: 'Creative design solutions to enhance visual communication through compelling graphics, branding materials, and digital assets. From logos to marketing materials, I create designs that effectively communicate your message.',
                technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva', 'InDesign', 'After Effects'],
                features: [
                    'Brand Identity - Logos, color palettes, and brand guidelines',
                    'Marketing Materials - Flyers, posters, social media graphics',
                    'Digital Assets - Icons, illustrations, and infographics',
                    'Print Design - Business cards, brochures, and packaging',
                    'Motion Graphics - Animated logos and explainer videos'
                ],
                deliverables: ['High-resolution files', 'Vector formats', 'Brand guidelines', 'Multiple variations']
            }
        }
        
        return details[title] || details['Web design']
    }

    const details = getServiceDetails(service.title)

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50'
                    />

                    {/* Modal */}
                    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none'>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ 
                                type: 'spring', 
                                damping: 25, 
                                stiffness: 300,
                                duration: 0.4 
                            }}
                            className='relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl pointer-events-auto p-3'
                        >
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                className='sticky top-4 right-4 float-right z-10 w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer'
                            >
                                <svg className='w-6 h-6 text-gray-800 dark:text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </motion.button>

                            <div className='p-6 lg:p-8'>
                                {/* Header */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.4 }}
                                    className='flex items-start gap-4 mb-6'
                                >
                                    <motion.div 
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg'
                                    >
                                        <Image src={service.icon} alt={service.title} className='w-8 h-8' />
                                    </motion.div>
                                    <div className='flex-1'>
                                        <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>{service.title}</h2>
                                        <p className='text-gray-600 dark:text-gray-400'>{details.fullDescription}</p>
                                    </div>
                                </motion.div>

                                {/* Technologies */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className='mb-6'
                                >
                                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Technologies & Tools</h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {details.technologies.map((tech, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                className='px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium'
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Features */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className='mb-6'
                                >
                                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>What I Provide</h3>
                                    <ul className='space-y-3'>
                                        {details.features.map((feature, index) => {
                                            const [title, desc] = feature.split(' - ')
                                            return (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                                                    className='flex items-start gap-3'
                                                >
                                                    <motion.div 
                                                        whileHover={{ scale: 1.2 }}
                                                        className='flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5'
                                                    >
                                                        <svg className='w-4 h-4 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                                                        </svg>
                                                    </motion.div>
                                                    <div>
                                                        <span className='font-semibold text-gray-900 dark:text-white'>{title}</span>
                                                        <span className='text-gray-600 dark:text-gray-400'> - {desc}</span>
                                                    </div>
                                                </motion.li>
                                            )
                                        })}
                                    </ul>
                                </motion.div>

                                {/* Deliverables */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.4 }}
                                    className='mb-6'
                                >
                                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Deliverables</h3>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                        {details.deliverables.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                                                whileHover={{ scale: 1.05 }}
                                                className='p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-sm flex items-center gap-2'
                                            >
                                                <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                                                {item}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.4 }}
                                    className='flex gap-3'
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                            onClose()
                                        }}
                                        className='flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow cursor-pointer'
                                    >
                                        Get Started
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={onClose}
                                        className='px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer'
                                    >
                                        Close
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ServiceModal
