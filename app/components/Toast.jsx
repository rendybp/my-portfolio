'use client'

import React from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Toast = ({ message, type, isVisible, onClose }) => {
    // Auto close after 5 seconds - but ONLY for success and error states, NOT for loading
    React.useEffect(() => {
        if (isVisible && type !== 'loading') {
            const timer = setTimeout(() => {
                onClose()
            }, 5000)
            
            return () => clearTimeout(timer)
        }
    }, [isVisible, type, onClose])

    const getToastStyle = () => {
        switch (type) {
            case 'success':
                return {
                    bgGradient: 'from-green-500 to-emerald-500',
                    icon: (
                        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    ),
                    iconBg: 'bg-green-600'
                }
            case 'loading':
                return {
                    bgGradient: 'from-blue-500 to-purple-500',
                    icon: (
                        <svg className='w-6 h-6 animate-spin' fill='none' viewBox='0 0 24 24'>
                            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                        </svg>
                    ),
                    iconBg: 'bg-blue-600'
                }
            case 'error':
                return {
                    bgGradient: 'from-red-500 to-pink-500',
                    icon: (
                        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    ),
                    iconBg: 'bg-red-600'
                }
            default:
                return {
                    bgGradient: 'from-gray-500 to-gray-600',
                    icon: (
                        <svg className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    ),
                    iconBg: 'bg-gray-600'
                }
        }
    }

    const style = getToastStyle()

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.3 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.5 }}
                    transition={{ 
                        type: 'spring',
                        damping: 25,
                        stiffness: 300,
                        duration: 0.4 
                    }}
                    className='fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto'
                >
                    <div className={`bg-gradient-to-r ${style.bgGradient} text-white rounded-2xl shadow-2xl overflow-hidden min-w-[320px] max-w-md`}>
                        <div className='flex items-center gap-4 p-4'>
                            {/* Icon */}
                            <motion.div 
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                className={`flex-shrink-0 ${style.iconBg} rounded-full p-2 shadow-lg`}
                            >
                                {style.icon}
                            </motion.div>

                            {/* Message */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className='flex-1'
                            >
                                <p className='font-semibold text-base'>{message}</p>
                                {type === 'success' && (
                                    <p className='text-xs opacity-90 mt-1'>Your message has been sent successfully!</p>
                                )}
                            </motion.div>

                            {/* Close button - only show for success/error */}
                            {type !== 'loading' && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, duration: 0.2 }}
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={onClose}
                                    className='flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors cursor-pointer'
                                >
                                    <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </motion.button>
                            )}
                        </div>

                        {/* Progress bar for auto-close (only for success/error) */}
                        {type !== 'loading' && (
                            <motion.div
                                initial={{ scaleX: 1 }}
                                animate={{ scaleX: 0 }}
                                transition={{ duration: 5, ease: 'linear' }}
                                className='h-1 bg-white/30 origin-left'
                            />
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Toast
