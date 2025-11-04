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
            'Web Development': {
                fullDescription: 'Web development involves designing, coding, and maintaining dynamic websites and web applications that deliver seamless functionality and engaging user experiences. I specialize in building efficient, scalable, and visually appealing sites using modern frameworks like Laravel, React, and Next.js, as well as CMS platforms such as WordPress and Elementor. My approach focuses on performance, responsive design, and clean architecture to ensure every project runs smoothly and meets client objectives.',
                technologies: [
                    'HTML5',
                    'CSS3',
                    'JavaScript',
                    'PHP',
                    'React',
                    'Next.js',
                    'Tailwind CSS',
                    'Node.js',
                    'Laravel',
                    'WordPress',
                    'Elementor',
                    'MySQL',
                    'WordPress Plugins',
                    'Theme Customization'
                ],
                features: [
                    'Responsive Design - Websites that work seamlessly across all devices',
                    'Modern Interfaces - Clean, intuitive layouts with smooth user interactions',
                    'Performance Optimization - Fast and efficient websites built with best coding practices',
                    'SEO Friendly - Structured and optimized content for better search visibility',
                    'Cross-browser Compatibility - Consistent experience across all browsers',
                    'WordPress Customization - Template design, plugin integration, and easy content management'
                ],
                deliverables: [
                    'Fully functional website or web application',
                    'Custom WordPress website with Elementor and plugins',
                    'Responsive design templates',
                    'Source code and documentation',
                    'Deployment and post-launch support'
                ]
            },
            'Mobile App Development': {
                fullDescription: 'Mobile app development focuses on building high-performance, user-friendly applications that work seamlessly across Android and iOS devices. I develop cross-platform apps using Flutter and React Native, integrating clean interfaces, efficient data handling, and real-time connectivity. My focus is on functionality, performance, and seamless integration with APIs to deliver reliable mobile solutions for everyday use.',
                technologies: [
                    'Flutter',
                    'React Native',
                    'Dart',
                    'JavaScript',
                    'Firebase',
                    'SQLite',
                    'REST APIs',
                    'JSON',
                    'Push Notifications',
                    'State Management (Provider, Riverpod, Redux)'
                ],
                features: [
                    'Cross-platform Development - Create mobile apps for Android and iOS from a single codebase',
                    'API Integration - Connect mobile apps with backend systems through RESTful APIs',
                    'Offline Capability - Local data storage and synchronization using SQLite',
                    'Realtime Connectivity - Seamless data sync and authentication with Firebase',
                    'Clean Interface - Focus on simplicity, usability, and performance'
                ],
                deliverables: [
                    'Fully functional mobile app for Android and iOS',
                    'API-connected mobile interfaces',
                    'Local database integration (SQLite)',
                    'Firebase-enabled authentication and real-time data',
                    'Source code and documentation for further deployment'
                ]
            },
            'Administrative Services': {
                fullDescription: 
                    'Administrative services focus on organizing, documenting, and managing daily operational tasks within an organization. I help businesses, schools, or professionals streamline their administrative workflows through accurate data processing, well-structured documentation, and efficient digital tools that ensure clarity and productivity.',

                technologies: [
                    'Microsoft Excel',
                    'Microsoft Word',
                    'Microsoft PowerPoint',
                    'Canva',
                    'Notion',
                    'Zoom',
                    'Google Workspace (Docs, Sheets, Forms, Drive)',
                    'Email & Correspondence Management Tools',
                    'Digital Archiving Systems'
                ],

                features: [
                    'Data Management - Collecting, processing, and organizing data for better accessibility and reporting',
                    'Document Preparation - Creating formal letters, reports, and administrative materials with clarity and accuracy',
                    'Scheduling & Coordination - Managing calendars, meetings, and event logistics efficiently',
                    'Record Keeping - Maintaining structured digital and physical archives for easy retrieval',
                    'Presentation & Reporting - Designing professional reports and visual materials to support decision-making'
                ],

                deliverables: [
                    'Administrative & Financial Documents',
                    'Organized Data Spreadsheets',
                    'Meeting and Event Schedules',
                    'Presentation Slides and Reports',
                    'Document Templates and Checklists'
                ]
            },
            'Graphics Design': {
                fullDescription: 'Graphic design focuses on creating visually engaging digital content for communication, promotion, and storytelling. I design social media visuals, marketing materials, and motion graphics that help brands and organizations deliver their message clearly and creatively. My approach emphasizes visual consistency, clarity, and attention to detail across every project.',
                technologies: [
                    'Adobe Photoshop',
                    'Adobe Illustrator',
                    'Canva',
                    'Figma',
                    'Adobe After Effects',
                    'Adobe Premiere Pro',
                    'CapCut',
                    'DaVinci Resolve',
                    'Google Slides / PowerPoint'
                ],
                features: [
                    'Marketing Visuals - Digital banners, posters, and promotional materials for campaigns',
                    'Social Media Design - Posts, stories, and content optimized for engagement',
                    'Presentation Design - Visually impactful slide decks and reports',
                    'Motion Graphics - Animated text, logo intros, and simple explainer videos',
                    'Video Editing - Trimming, transitions, and color adjustments for short-form content',
                    'Content Editing - Image enhancement and simple video compositions'
                ],
                deliverables: [
                    'High-resolution graphics and exported videos (PNG, JPG, MP4)',
                    'Editable source files (PSD, AI, AE, etc)',
                    'Social media content packages',
                    'Short promotional videos and animations',
                    'Presentation or digital campaign assets'
                ]
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
                                    className='flex flex-col sm:flex-row items-start gap-4 mb-6'
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
                                                className='p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2'
                                            >
                                                <div className='flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-1.5'></div>
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
