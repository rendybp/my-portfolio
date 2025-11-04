'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'

const InfoModal = ({ isOpen, onClose, info, isDarkMode }) => {
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

    if (!info) return null

    // Get detailed content based on info title
    const getInfoDetails = (title) => {
        const details = {
            'Languages': {
                fullTitle: 'Programming Languages & Technologies',
                subtitle: 'My Technical Stack & Expertise',
                overview: 'Throughout my career as a developer, I\'ve mastered a diverse set of programming languages and modern technologies. My expertise spans from frontend frameworks to backend systems, enabling me to build full-stack applications efficiently.',
                categories: [
                    {
                        name: 'Frontend Development',
                        icon: '🎨',
                        technologies: [
                            {
                                name: 'HTML5',
                                level: 'Expert',
                                levelPercent: 95,
                                experience: '8 years',
                                description: 'Semantic markup, accessibility standards, SEO optimization',
                                useCases: ['Responsive layouts', 'Web accessibility', 'SEO-friendly structure']
                            },
                            {
                                name: 'CSS3',
                                level: 'Expert',
                                levelPercent: 95,
                                experience: '8 years',
                                description: 'Advanced animations, Grid, Flexbox, responsive design',
                                useCases: ['Modern UI designs', 'Smooth Animations', 'Mobile-first approach']
                            },
                            {
                                name: 'JavaScript',
                                level: 'Expert',
                                levelPercent: 90,
                                experience: '7 years',
                                description: 'ES6+, async/await, DOM handling, API integration',
                                useCases: ['Interactive features', 'API calls', 'Dynamic content']
                            },
                            {
                                name: 'React.js',
                                level: 'Advanced',
                                levelPercent: 85,
                                experience: '2 years',
                                description: 'Hooks, Context API, component lifecycle, state management',
                                useCases: ['SPA development', 'Component libraries', 'Interactive dashboards']
                            },
                            {
                                name: 'Next.js',
                                level: 'Advanced',
                                levelPercent: 85,
                                experience: '1 year',
                                description: 'SSR, SSG, API routes, file-based routing, optimization',
                                useCases: ['Full-stack apps', 'SEO-optimized sites', 'Hybrid rendering']
                            },
                            {
                                name: 'Tailwind CSS',
                                level: 'Advanced',
                                levelPercent: 85,
                                experience: '1 year',
                                description: 'Utility-first CSS, custom configurations, responsive design',
                                useCases: ['Rapid prototyping', 'Clean and consistent design', 'Responsive themes']
                            }
                        ]
                    },
                    {
                        name: 'Backend Development',
                        icon: '⚙️',
                        technologies: [
                            {
                                name: 'PHP',
                                level: 'Expert',
                                levelPercent: 95,
                                experience: '7 years',
                                description: 'OOP, MVC structure, API development, security best practices',
                                useCases: ['RESTful APIs', 'Server-side logic', 'Authentication systems']
                            },
                            {
                                name: 'Laravel',
                                level: 'Advanced',
                                levelPercent: 85,
                                experience: '3 years',
                                description: 'Eloquent ORM, routing, migrations, middleware, authentication',
                                useCases: ['E-commerce platforms', 'CMS systems', 'Enterprise applications']
                            },
                            {
                                name: 'Node.js',
                                level: 'Intermediate',
                                levelPercent: 70,
                                experience: '1 year',
                                description: 'Express.js, REST APIs, real-time applications',
                                useCases: ['API servers', 'Real-time communication', 'Microservices']
                            },
                            {
                                name: 'Python',
                                level: 'Advanced',
                                levelPercent: 85,
                                experience: '4 years',
                                description: 'Data processing, automation, and backend integration using FastAPI',
                                useCases: ['Automation scripts', 'AI integration', 'Backend APIs']
                            }
                        ]
                    },
                    {
                        name: 'Database & Tools',
                        icon: '🗄️',
                        technologies: [
                            {
                                name: 'MySQL',
                                level: 'Advanced',
                                levelPercent: 85,
                                experience: '7 years',
                                description: 'Query optimization, indexing, relationships, transactions',
                                useCases: ['Relational databases', 'Data modeling', 'Performance optimization']
                            },
                            {
                                name: 'Git & GitHub',
                                level: 'Advanced',
                                levelPercent: 85,
                                experience: '6 years',
                                description: 'Version control, branching strategies, team collaboration',
                                useCases: ['Version control', 'Collaboration', 'Code management']
                            },
                            {
                                name: 'REST APIs',
                                level: 'Advanced',
                                levelPercent: 80,
                                experience: '4 years',
                                description: 'API architecture, authentication, documentation, best practices',
                                useCases: ['Third-party integrations', 'Mobile backends', 'Microservices']
                            }
                        ]
                    },
                    {
                        name: 'Mobile Development',
                        icon: '📱',
                        technologies: [
                            {
                                name: 'Flutter',
                                level: 'Intermediate',
                                levelPercent: 70,
                                experience: '2 years',
                                description: 'Widget system, state management, native features',
                                useCases: ['Cross-platform apps', 'Mobile UI', 'Native performance']
                            },
                            {
                                name: 'Dart',
                                level: 'Intermediate',
                                levelPercent: 70,
                                experience: '2 years',
                                description: 'Flutter ecosystem, async programming, OOP principles',
                                useCases: ['Flutter development', 'Mobile logic', 'App architecture']
                            }
                        ]
                    }
                ],
                learningJourney: [
                    { year: '2017', milestone: 'Began coding with HTML, CSS, and basic JavaScript in vocational high school' },
                    { year: '2018-2019', milestone: 'Learned PHP and MySQL for backend web development' },
                    { year: '2021-2022', milestone: 'Expanded into Python and REST API development' },
                    { year: '2023', milestone: 'Mastered Laravel and implemented MVC concepts in real projects' },
                    { year: '2023', milestone: 'Explored Flutter for mobile app development and native integration' },
                    { year: '2024', milestone: 'Focused on React.js and modern frontend development practices' },
                    { year: '2025', milestone: 'Adopted Next.js and Tailwind CSS for advanced full-stack projects' },
                ],
                certifications: [
                    'BNSP Certification - Junior Web Programmer (2020, renewed 2025)',
                ]
            },
            'Education': {
                fullTitle: 'Bachelor of Computer Science',
                subtitle: 'Academic Background & Achievements',
                institution: 'Duta Bangsa University',
                location: 'Surakarta, Central Java, Indonesia',
                period: '2021 - 2025',
                degree: 'Bachelor of Computer Science',
                major: 'Informatics Engineering',
                grade: 'GPA: 3.98/4.0',
                overview: 'Completed a comprehensive 4-year Bachelor\'s program in Computer Science, developing strong foundations in algorithms, data structures, and modern software engineering practices. The curriculum combined theoretical study with hands-on projects across web, mobile, and AI technologies, fostering both analytical and creative problem-solving skills.',
                coursework: [
                    {
                        category: 'Core Computer Science',
                        courses: [
                            'Information System & Technology',
                            'Data Structures & Algorithms',
                            'Object-Oriented Programming',
                            'Database Management Systems',
                            'Operating Systems',
                            'Computer Networks',
                            'Software Engineering',
                            'Informatics Logic',
                            'Control Systems',
                        ]
                    },
                    {
                        category: 'Web & Mobile Development',
                        courses: [
                            'Web Technologies',
                            'Mobile Programming',
                            'Full-Stack Development',
                            'UI/UX Design Principles',
                            'Visual Programming',
                            'RESTful API Design',
                            'Python Programming',
                            'Cloud Computing'
                        ]
                    },
                    {
                        category: 'Advanced Topics',
                        courses: [
                            'Machine Learning Fundamentals',
                            'Artificial Intelligence',
                            'Internet of Things (IoT)',
                            'Recommender Systems',
                            'Data Mining',
                            'Cybersecurity Basics',
                            'Distributed Systems',
                            'Agile Software Development',
                            'Digital Image Processing'
                        ]
                    }
                ],
                achievements: [
                    {
                        title: '3rd Place - Koni National Science Competition II',
                        description: 'Achieved 3rd place in a national-level English competition evaluating language proficiency, reading comprehension, and critical reasoning skills.',
                        icon: '🏆'
                    },
                    {
                        title: 'Outstanding Student Award',
                        description: 'Recognized as an Outstanding Student for excellence in academic performance and national achievement, combining strong technical and analytical abilities.',
                        icon: '🎓'
                    },
                    {
                        title: 'Research Publication',
                        description: 'Published a peer-reviewed national journal indexed in SINTA 4, focusing on the development of an AI-based book recommendation system using TF-IDF and FastText word embeddings.',
                        icon: '📚'
                    },
                    {
                        title: 'BNSP Certification - Junior Web Programmer',
                        description: 'Certified by the National Professional Certification Agency (BNSP) as a competent Junior Web Programmer, demonstrating verified expertise in modern web development and application design through national-level assessment.',
                        icon: '💻'
                    }
                ],
                skills: [
                    'Strong algorithmic thinking',
                    'Problem-solving abilities',
                    'Software design patterns',
                    'Code optimization',
                    'Technical documentation',
                    'Team collaboration',
                    'Project management',
                    'Research & analysis'
                ],
                activities: [
                    'Computer Science Club',
                    'Christian Student Fellowship'
                ],
                capstoneProject: {
                    title: 'Book Recommendation System Using the Vector Space Model Method Based on TF-IDF Weighting and FastText (Case Study: SMP Negeri 1 Kartasura Library)',
                    description: 'Developed an intelligent book recommendation system for the school library that combines TF-IDF weighting with FastText word embeddings to measure semantic similarity between books. The system was integrated into a Laravel-based catalog website, enabling students to discover books more accurately based on their interests.',
                    technologies: ['Laravel', 'Python', 'MySQL', 'TF-IDF', 'FastText', 'FastAPI'],
                    impact: 'The system achieved an average accuracy of 93% in recommending relevant books, demonstrating the effectiveness of combining TF-IDF and FastText in capturing contextual meaning. This project contributes to improving library resource utilization and supports personalized learning within educational environments.'
                }
            },
            'Projects': {
                fullTitle: 'Portfolio Projects & Applications',
                subtitle: 'Showcasing My Development Journey',
                overview: 'A collection of projects that demonstrate my technical skills, creativity, and ability to deliver real-world solutions. Each project showcases different aspects of full-stack development, from frontend design to backend architecture.',
                totalProjects: 12,
                featured: 5,
                projects: [
                    {
                        name: 'Personal Portfolio Website',
                        category: 'Frontend Web',
                        description:
                        'A modern, responsive portfolio website built to showcase my professional experience, projects, and skills with smooth animations and a clean user interface.',
                        image: '/project-1.png',
                        technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
                        features: [
                        'Smooth scroll and motion-based animations',
                        'Interactive project detail modals',
                        'Dark and light theme toggle',
                        'Contact form with real-time validation'
                        ],
                        highlights: [
                        'Lighthouse performance score above 95',
                        'Fully responsive and cross-browser compatible',
                        'Minimalist and fast-loading design',
                        'Deployed using Vercel with continuous integration'
                        ],
                        github: 'https://github.com/rendybp/my-portfolio',
                        liveDemo: 'https://rendibuana.me',
                        year: '2025',
                        status: 'Live'
                    },

                    {
                        name: 'Book Recommendation System',
                        category: 'Full-Stack Web',
                        description:
                        'A content-based book recommendation system developed for SMP Negeri 1 Kartasura Library, combining TF-IDF and FastText to generate personalized book suggestions.',
                        image: '/project-2.png',
                        technologies: ['Laravel', 'Bootstrap', 'MySQL', 'Python', 'TF-IDF', 'FastText', 'FastAPI'],
                        features: [
                        'AI-based recommendation using TF-IDF and FastText word embeddings',
                        'Integration between Laravel frontend and FastAPI backend',
                        'Real-time book search and recommendation',
                        'Dataset management and automatic model update',
                        'API endpoint for similarity computation'
                        ],
                        highlights: [
                        'Achieved 93% recommendation accuracy (based on evaluation dataset)',
                        'Optimized for speed using pre-trained FastText model',
                        'Supports dynamic updates without full retraining',
                        'Bridges Laravel - Python integration seamlessly'
                        ],
                        github: 'https://github.com/rendybp/bookrecsys-railway',
                        liveDemo: 'https://github.com/rendybp/bookrecsys-railway',
                        year: '2025',
                        status: 'Offline'
                    },

                    {
                        name: 'Book Loan and Return System',
                        category: 'Full-Stack Web',
                        description:
                        'A web-based library management system for handling book borrowing, returning, and fine management efficiently within school environments.',
                        image: '/project-3.png',
                        technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
                        features: [
                        'Online catalog and borrowing request system',
                        'QR code-based book loan verification',
                        'Automatic overdue and fine calculation',
                        'Book return tracking and inventory updates',
                        'Role-based user access for admin and librarian'
                        ],
                        highlights: [
                        'Mobile-friendly and responsive interface',
                        'Efficient data synchronization across user roles',
                        'Improved record accuracy and time efficiency for staff'
                        ],
                        github: 'https://github.com/ikhsanmajid/ProjectAkhirPerpustakaan',
                        liveDemo: 'https://github.com/ikhsanmajid/ProjectAkhirPerpustakaan',
                        year: '2024',
                        status: 'Offline'
                    },

                    {
                        name: 'MR Collection App',
                        category: 'Mobile App',
                        description:
                        'A mobile cataloging application for managing bag and accessory collections, featuring image upload, item descriptions, and offline capabilities.',
                        image: '/project-4.png',
                        technologies: ['Flutter', 'Dart', 'Firebase', 'Provider'],
                        features: [
                        'Image upload with Firebase Storage integration',
                        'Item details with description, price, and category',
                        'Search, filter, and sort functionalities',
                        'User authentication with Firebase Auth',
                        'Offline mode using local data persistence'
                        ],
                        highlights: [
                        'Simple and intuitive UI/UX design',
                        'Fast app performance and low memory usage',
                        'Cross-platform compatibility for Android and iOS'
                        ],
                        github: 'https://github.com/rendybp/mr_collection',
                        liveDemo: 'https://github.com/rendybp/mr_collection',
                        year: '2023',
                        status: 'Offline'
                    }
                ],
                statistics: {
                    totalCommits: '200+',
                    linesOfCode: '5000+',
                    totalPullRequest: '15+',
                    lastYearContributed: '2+'
                },
                technologies: ['React', 'Next.js', 'Laravel', 'Flutter', 'Node.js', 'MySQL', 'Tailwind CSS', 'Firebase', 'Python', 'JavaScript', 'PHP', 'Bootstrap']
            }
        }
        
        return details[title] || details['Languages']
    }

    const details = getInfoDetails(info.title)

    // Render content based on type
    const renderLanguagesContent = () => (
        <>
            {/* Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className='mb-6'
            >
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                    {details.overview}
                </p>
            </motion.div>

            {/* Technology Categories */}
            {details.categories.map((category, catIndex) => (
                <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + catIndex * 0.1, duration: 0.4 }}
                    className='mb-6'
                >
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2'>
                        <span className='text-2xl'>{category.icon}</span>
                        {category.name}
                    </h3>
                    <div className='space-y-4'>
                        {category.technologies.map((tech, techIndex) => (
                            <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + catIndex * 0.1 + techIndex * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                                className='p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700'
                            >
                                <div className='flex items-start justify-between mb-2'>
                                    <div>
                                        <h4 className='font-semibold text-gray-900 dark:text-white'>{tech.name}</h4>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>{tech.experience} experience</p>
                                    </div>
                                    <span className='px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full'>
                                        {tech.level}
                                    </span>
                                </div>
                                
                                {/* Progress Bar */}
                                <div className='mb-2'>
                                    <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${tech.levelPercent}%` }}
                                            transition={{ delay: 0.5 + catIndex * 0.1 + techIndex * 0.05, duration: 0.8 }}
                                            className='bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full'
                                        />
                                    </div>
                                </div>
                                
                                <p className='text-sm text-gray-600 dark:text-gray-400 mb-2'>{tech.description}</p>
                                
                                <div className='flex flex-wrap gap-2'>
                                    {tech.useCases.map((useCase, i) => (
                                        <span key={i} className='text-xs px-2 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-600'>
                                            {useCase}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}

            {/* Learning Journey */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className='mb-6'
            >
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Learning Journey</h3>
                <div className='relative border-l-2 border-blue-500 pl-6 space-y-4'>
                    {details.learningJourney.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                            className='relative'
                        >
                            <div className='absolute -left-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900'></div>
                            <div className='font-semibold text-blue-600 dark:text-blue-400 text-sm'>{item.year}</div>
                            <div className='text-gray-700 dark:text-gray-300'>{item.milestone}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            {/* Certifications */}
            {details.certifications && details.certifications.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.4 }}
                    className='mb-6'
                >
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Certifications</h3>
                    <div className='grid grid-cols-1 gap-3'>
                        {details.certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 + i * 0.05, duration: 0.3 }}
                                className='p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center gap-3'
                            >
                                <div className='flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold'>
                                    <svg className='w-9 h-9' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4' />
                                    </svg>
                                </div>
                                <div className='flex-1'>
                                    <div className='font-semibold text-gray-900 dark:text-white text-sm'>{cert}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    )

    const renderEducationContent = () => (
        <>
            {/* Institution Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className='mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800'
            >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-sm'>
                    <div>
                        <span className='text-gray-600 dark:text-gray-400'>Institution:</span>
                        <div className='font-semibold text-gray-900 dark:text-white'>{details.institution}</div>
                    </div>
                    <div>
                        <span className='text-gray-600 dark:text-gray-400'>Period:</span>
                        <div className='font-semibold text-gray-900 dark:text-white'>{details.period}</div>
                    </div>
                    <div>
                        <span className='text-gray-600 dark:text-gray-400'>Degree:</span>
                        <div className='font-semibold text-gray-900 dark:text-white'>{details.degree}</div>
                    </div>
                    <div>
                        <span className='text-gray-600 dark:text-gray-400'>Major:</span>
                        <div className='font-semibold text-gray-900 dark:text-white'>{details.major}</div>
                    </div>
                    <div>
                        <span className='text-gray-600 dark:text-gray-400'>Location:</span>
                        <div className='font-semibold text-gray-900 dark:text-white'>{details.location}</div>
                    </div>
                    <div>
                        <span className='text-gray-600 dark:text-gray-400'>Grade:</span>
                        <div className='font-semibold text-green-600 dark:text-green-400'>{details.grade}</div>
                    </div>
                </div>
            </motion.div>

            {/* Overview */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className='mb-6'
            >
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>{details.overview}</p>
            </motion.div>

            {/* Coursework */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className='mb-6'
            >
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Key Coursework</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {details.coursework.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                            className='p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'
                        >
                            <h4 className='font-semibold text-gray-900 dark:text-white mb-3'>{category.category}</h4>
                            <ul className='space-y-2'>
                                {category.courses.map((course, i) => (
                                    <li key={i} className='text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2'>
                                        <span className='text-blue-500 mt-1'>•</span>
                                        <span>{course}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className='mb-6'
            >
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Academic Achievements</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {details.achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className='p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800'
                        >
                            <div className='flex items-start gap-3'>
                                <span className='text-3xl'>{achievement.icon}</span>
                                <div>
                                    <h4 className='font-semibold text-gray-900 dark:text-white mb-1'>{achievement.title}</h4>
                                    <p className='text-sm text-gray-600 dark:text-gray-400'>{achievement.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Capstone Project */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className='mb-6 p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800'
            >
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>🎯 Capstone Project</h3>
                <h4 className='font-semibold text-purple-700 dark:text-purple-400 mb-2'>{details.capstoneProject.title}</h4>
                <p className='text-gray-600 dark:text-gray-400 mb-3'>{details.capstoneProject.description}</p>
                <div className='flex flex-wrap gap-2 mb-2'>
                    {details.capstoneProject.technologies.map((tech, i) => (
                        <span key={i} className='px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full'>
                            {tech}
                        </span>
                    ))}
                </div>
                <div className='mt-3 p-3 bg-white dark:bg-gray-900 rounded'>
                    <span className='text-sm font-semibold text-green-600 dark:text-green-400'>Impact: </span>
                    <span className='text-sm text-gray-700 dark:text-gray-300'>{details.capstoneProject.impact}</span>
                </div>
            </motion.div>

            {/* Skills & Activities */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                >
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Skills Gained</h3>
                    <div className='flex flex-wrap gap-2'>
                        {details.skills.map((skill, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + i * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.1 }}
                                className='px-3 py-1.5 text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg'
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.4 }}
                >
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Extracurricular Activities</h3>
                    <ul className='space-y-2'>
                        {details.activities.map((activity, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 + i * 0.1, duration: 0.3 }}
                                className='text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2'
                            >
                                <span className='text-green-500 mt-1'>✓</span>
                                <span>{activity}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </>
    )

    const renderProjectsContent = () => (
        <>
            {/* Overview & Statistics */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className='mb-6'
            >
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-4'>{details.overview}</p>
                
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                    {Object.entries(details.statistics).map(([key, value], index) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                            className='p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg text-center border border-blue-200 dark:border-blue-800'
                        >
                            <div className='text-2xl font-bold text-blue-600 dark:text-blue-400'>{value}</div>
                            <div className='text-xs text-gray-600 dark:text-gray-400 mt-1'>
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Projects List */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className='space-y-5'
            >
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>Featured Projects</h3>
                
                {details.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.02 }}
                        className='p-5 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow'
                    >
                        {/* Project Header */}
                        <div className='flex items-start justify-between mb-3'>
                            <div className='flex-1'>
                                <div className='flex items-center gap-3 mb-2'>
                                    <h4 className='text-lg font-bold text-gray-900 dark:text-white'>{project.name}</h4>
                                    <span className='px-2 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full'>
                                        {project.status}
                                    </span>
                                </div>
                                <div className='flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400'>
                                    <span className='font-medium'>{project.category}</span>
                                    <span>•</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className='text-gray-600 dark:text-gray-400 mb-3 text-sm'>{project.description}</p>

                        {/* Technologies */}
                        <div className='mb-3'>
                            <div className='flex flex-wrap gap-2'>
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className='px-2 py-1 text-xs bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-gray-600'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className='mb-3'>
                            <h5 className='text-sm font-semibold text-gray-900 dark:text-white mb-2'>Key Features:</h5>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-1.5'>
                                {project.features.map((feature, i) => (
                                    <div key={i} className='text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2'>
                                        <span className='text-green-500 mt-0.5'>✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className='mb-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg'>
                            <h5 className='text-sm font-semibold text-gray-900 dark:text-white mb-2'>Project Highlights:</h5>
                            <div className='flex flex-wrap gap-2'>
                                {project.highlights.map((highlight, i) => (
                                    <span key={i} className='text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full font-medium'>
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className='flex gap-3'>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.github}
                                target='_blank'
                                className='flex-1 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2'
                            >
                                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.840 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                                </svg>
                                GitHub
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.liveDemo}
                                target='_blank'
                                className='flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2'
                            >
                                <svg className='w-4 h-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                                </svg>
                                Live Demo
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Technology Stack Summary */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
                className='mt-6'
            >
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Technologies Used Across Projects</h3>
                <div className='flex flex-wrap gap-2'>
                    {details.technologies.map((tech, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1 + i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className='px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800'
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </>
    )

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
                            className='relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl pointer-events-auto p-3'
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
                                    className='mb-6'
                                >
                                    <div className='flex flex-col sm:flex-row items-start gap-4 mb-4'>
                                        <motion.div 
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg'
                                        >
                                            <Image src={info.iconDark} alt={info.title} className='w-8 h-8' />
                                        </motion.div>
                                        <div className='flex-1'>
                                            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-1'>{details.fullTitle}</h2>
                                            <p className='text-lg text-gray-600 dark:text-gray-400'>{details.subtitle}</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content based on type */}
                                {info.title === 'Languages' && renderLanguagesContent()}
                                {info.title === 'Education' && renderEducationContent()}
                                {info.title === 'Projects' && renderProjectsContent()}

                                {/* CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.4 }}
                                    className='flex gap-3 pt-6 border-t border-gray-200 dark:border-gray-800 mt-6'
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                            onClose()
                                        }}
                                        className='flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2 cursor-pointer'
                                    >
                                        <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                        </svg>
                                        Let's Work Together
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

export default InfoModal
