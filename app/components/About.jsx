import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
    return (
        <div id='about' className='w-full px-6 lg:px-8 py-10 scroll-mt-20'>
            <div className='mx-auto max-w-6xl'>
                <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
                <h2 className='text-center text-5xl font-ovo'>About me</h2>

                <div className='flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 my-16'>
                    <div className='w-64 sm:w-80 rounded-3xl'>
                        <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
                    </div>
                    <div className='flex-1 max-w-2xl'>
                        <p className='mb-10 font-ovo'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minus dolores beatae asperiores ipsa nemo esse totam, sit reiciendis sapiente cumque sint ea fuga eligendi nihil vel! Fugit, deserunt corrupti facere ipsa expedita veniam est vero id aspernatur, rerum quis aut incidunt sint labore quae ab similique nisi illo at obcaecati qui vitae reiciendis itaque? Atque, ullam totam beatae aspernatur odio pariatur aliquam voluptatibus quos reiciendis, suscipit eos ea voluptatum distinctio sequi adipisci earum autem rerum accusamus ex cupiditate, sunt eum dolorum nulla ipsa. Sit nisi velit dolorum quasi officiis, odio ipsam voluptas placeat iste doloribus, culpa provident porro ab.
                        </p>

                        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                            {infoList.map(({icon, iconDark, title, description}, index) => (
                                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                                </li>
                            ))}
                        </ul>
                        <h4 className='my-6 text-gray-700 font-ovo dark:text-white/80'>I am familiar with</h4>
                        <ul className='grid items-center gap-3 sm:gap-5 grid-cols-[repeat(auto-fit,minmax(50px,1fr))]'>
                            {toolsData.map((tool, index)=>(
                                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500' key={index}>
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About