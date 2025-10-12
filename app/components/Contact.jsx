import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='w-full px-6 lg:px-8 py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
            <div className='mx-auto max-w-7xl'>
                <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
                <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>

                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                    I'd love to hear from you! If you have any question, comments, or feedback, please use the form below.
                </p>
                <form className='max-w-2xl mx-auto'>
                    <div className='grid gap-6 mt-10 mb-8 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
                        <input type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
                        <input type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
                    </div>
                    <textarea rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
                    <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer'>
                        Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/>
                    </button>

                    <p className='mt-4'>
                        sending...
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Contact