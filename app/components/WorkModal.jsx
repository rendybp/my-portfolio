'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'

const WorkModal = ({ isOpen, onClose, work }) => {
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

    if (!work) return null

    // Get detailed content based on work title
    const getWorkDetails = (title) => {
        const details = {
            'Web Developer': {
                company: 'ajakonline.com',
                period: 'January 2022 - December 2023',
                duration: '2 years',
                employmentType: 'Full-time',
                location: 'Surakarta, Central Java, Indonesia',
                overview: 'Led the development and maintenance of the ajakonline.com e-commerce platform, focusing on creating seamless user experiences and implementing robust backend solutions.',
                responsibilities: [
                    'Developed and maintained responsive web applications using Laravel and React',
                    'Collaborated with UI/UX designers to implement pixel-perfect designs',
                    'Optimized website performance, reducing load time by 40%',
                    'Integrated payment gateways and third-party APIs',
                    'Implemented RESTful APIs for mobile app integration',
                    'Conducted code reviews and mentored junior developers',
                    'Managed database design and optimization using MySQL'
                ],
                achievements: [
                    'Successfully launched 3 major feature updates',
                    'Improved website conversion rate by 25%',
                    'Reduced bug reports by 60% through comprehensive testing',
                    'Implemented automated deployment pipeline using CI/CD'
                ],
                skills: ['Laravel', 'React', 'JavaScript', 'PHP', 'MySQL', 'REST API', 'Git', 'CSS3', 'Tailwind CSS', 'jQuery'],
                projects: [
                    'E-commerce Platform Redesign',
                    'Customer Dashboard Implementation',
                    'Payment Gateway Integration',
                    'Real-time Order Tracking System'
                ]
            },
            'Social Media Administrator': {
                company: 'Hitz Barbershop',
                period: 'March 2020 - December 2021',
                duration: '1 year 10 months',
                employmentType: 'Part-time',
                location: 'Surakarta, Central Java, Indonesia',
                overview: 'Managed social media presence and digital marketing strategies for Hitz Barbershop, a popular grooming establishment in Surakarta, focusing on brand awareness and customer engagement.',
                responsibilities: [
                    'Created and managed content for Instagram, Facebook, and TikTok',
                    'Designed promotional graphics and videos for social media campaigns',
                    'Responded to customer inquiries and managed online bookings',
                    'Analyzed social media metrics and prepared monthly performance reports',
                    'Coordinated with photographers for professional content creation',
                    'Managed paid advertising campaigns across social platforms',
                    'Developed content calendar and scheduled posts for optimal engagement'
                ],
                achievements: [
                    'Grew Instagram followers from 2,000 to 15,000 in 18 months',
                    'Increased customer bookings through social media by 150%',
                    'Achieved 300% engagement rate increase through strategic content',
                    'Successfully launched 5+ viral marketing campaigns'
                ],
                skills: ['Social Media Marketing', 'Content Creation', 'Adobe Photoshop', 'Canva', 'Video Editing', 'Facebook Ads', 'Instagram Marketing', 'Analytics', 'Customer Service'],
                projects: [
                    'Brand Identity Social Campaign',
                    'Customer Testimonial Video Series',
                    'Interactive Contest Campaigns',
                    'Influencer Collaboration Program'
                ]
            },
            'Administrative Staff': {
                company: 'State Junior High School 1 Kartasura',
                period: 'August 2018 - February 2020',
                duration: '1 year 7 months',
                employmentType: 'Contract',
                location: 'Kartasura, Sukoharjo, Central Java, Indonesia',
                overview: 'Provided comprehensive administrative support to ensure smooth daily operations of the school, managing student records, coordinating events, and supporting academic administration.',
                responsibilities: [
                    'Managed student enrollment and registration processes',
                    'Maintained and updated student academic records and databases',
                    'Coordinated school events and parent-teacher meetings',
                    'Processed documentation for student certifications and transfers',
                    'Assisted teachers with administrative tasks and report preparation',
                    'Managed correspondence with parents and external stakeholders',
                    'Organized and archived school documents and records',
                    'Supported the principal with scheduling and calendar management'
                ],
                achievements: [
                    'Digitized 5,000+ student records, improving data accessibility',
                    'Reduced document processing time by 50%',
                    'Successfully coordinated 10+ large-scale school events',
                    'Implemented new filing system for better organization'
                ],
                skills: ['Microsoft Office', 'Data Entry', 'Record Management', 'Event Coordination', 'Communication', 'Time Management', 'Database Management', 'Customer Service'],
                projects: [
                    'Student Records Digitization Project',
                    'Annual School Event Coordination',
                    'Parent Communication System',
                    'Document Management System Implementation'
                ]
            },
            'Finance Administrator': {
                company: 'State Junior High School 1 Kartasura',
                period: 'August 2017 - July 2018',
                duration: '1 year',
                employmentType: 'Contract',
                location: 'Kartasura, Sukoharjo, Central Java, Indonesia',
                overview: 'Managed financial operations and bookkeeping for the school, ensuring accurate financial records, budget tracking, and compliance with government regulations for educational institutions.',
                responsibilities: [
                    'Processed student fee payments and maintained payment records',
                    'Prepared monthly financial reports and budget tracking',
                    'Managed petty cash and expense reimbursements',
                    'Coordinated with government agencies for funding and grants',
                    'Maintained accurate ledgers and financial documentation',
                    'Assisted in annual budget planning and allocation',
                    'Processed vendor payments and managed supplier invoices',
                    'Ensured compliance with financial regulations and policies'
                ],
                achievements: [
                    'Maintained 100% accuracy in financial reporting',
                    'Streamlined payment processing, reducing delays by 70%',
                    'Successfully managed budget of IDR 500M+ annually',
                    'Implemented digital payment tracking system'
                ],
                skills: ['Accounting', 'Bookkeeping', 'Microsoft Excel', 'Financial Reporting', 'Budget Management', 'Data Analysis', 'Attention to Detail', 'Financial Compliance'],
                projects: [
                    'Digital Financial Record System',
                    'Budget Optimization Initiative',
                    'Automated Payment Tracking',
                    'Annual Financial Audit Support'
                ]
            }
        }
        
        return details[title] || details['Web Developer']
    }

    const details = getWorkDetails(work.title)

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
                            className='relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl pointer-events-auto'
                        >
                            {/* Close Button */}
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                className='sticky top-4 right-4 float-right z-10 w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors'
                            >
                                <svg className='w-6 h-6 text-gray-800 dark:text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </motion.button>

                            <div className='p-6 lg:p-8'>
                                {/* Header with Background Image */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.4 }}
                                    className='relative mb-6'
                                >
                                    {/* Background Banner */}
                                    <div 
                                        className='h-32 rounded-xl bg-cover bg-center relative overflow-hidden'
                                        style={{backgroundImage: `url(${work.bgImage})`}}
                                    >
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-black/20'></div>
                                    </div>
                                    
                                    {/* Title Info */}
                                    <div className='mt-4'>
                                        <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>{work.title}</h2>
                                        <div className='flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400 mb-3'>
                                            <span className='flex items-center gap-1'>
                                                <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                                                </svg>
                                                {details.company}
                                            </span>
                                            <span className='text-gray-400'>•</span>
                                            <span className='flex items-center gap-1'>
                                                <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                                                </svg>
                                                {details.period}
                                            </span>
                                            <span className='text-gray-400'>•</span>
                                            <span className='text-sm font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full'>
                                                {details.duration}
                                            </span>
                                        </div>
                                        <div className='flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400'>
                                            <span className='flex items-center gap-1'>
                                                <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                                </svg>
                                                {details.location}
                                            </span>
                                            <span className='text-gray-400'>•</span>
                                            <span className='flex items-center gap-1'>
                                                <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                                </svg>
                                                {details.employmentType}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Overview */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    className='mb-6'
                                >
                                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Overview</h3>
                                    <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                                        {details.overview}
                                    </p>
                                </motion.div>

                                {/* Key Responsibilities */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className='mb-6'
                                >
                                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Key Responsibilities</h3>
                                    <ul className='space-y-2'>
                                        {details.responsibilities.map((item, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                                                className='flex items-start gap-3 text-gray-600 dark:text-gray-400'
                                            >
                                                <motion.div 
                                                    whileHover={{ scale: 1.2 }}
                                                    className='flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2'
                                                />
                                                <span>{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Achievements */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.4 }}
                                    className='mb-6'
                                >
                                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Key Achievements</h3>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                        {details.achievements.map((achievement, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className='p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800'
                                            >
                                                <div className='flex items-start gap-3'>
                                                    <motion.div 
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                        className='flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center'
                                                    >
                                                        <svg className='w-4 h-4 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M5 13l4 4L19 7' />
                                                        </svg>
                                                    </motion.div>
                                                    <span className='text-sm text-gray-700 dark:text-gray-300 font-medium'>{achievement}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Skills */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.4 }}
                                    className='mb-6'
                                >
                                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Skills Used</h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {details.skills.map((skill, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.6 + index * 0.03, duration: 0.3 }}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                className='px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800'
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Notable Projects */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.4 }}
                                    className='mb-6'
                                >
                                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Notable Projects</h3>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                        {details.projects.map((project, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                                                whileHover={{ scale: 1.03 }}
                                                className='p-3 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center gap-2'
                                            >
                                                <div className='flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center'>
                                                    <svg className='w-5 h-5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                                                    </svg>
                                                </div>
                                                <span className='text-sm text-gray-700 dark:text-gray-300 font-medium'>{project}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.4 }}
                                    className='flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800'
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                            onClose()
                                        }}
                                        className='flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2'
                                    >
                                        <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                        </svg>
                                        Contact Me
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={onClose}
                                        className='px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'
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

export default WorkModal
