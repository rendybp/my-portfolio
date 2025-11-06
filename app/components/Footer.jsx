import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <a href="#top">
                        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                    </a>
                    <a href="mailto:contact.rendibp@gmail.com">contact.rendibp@gmail.com</a>
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Rendi Buana. All rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/rendybp">Github</a></li>
                    <li><a target='_blank' href="https://instagram.com/rend.bp">Instagram</a></li>
                    <li><a target='_blank' href="https://linkedin.com/in/rendi-buana-perdana/">Linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer