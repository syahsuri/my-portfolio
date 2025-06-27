import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-ovo'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='' className='w-full rounded-3xl'/>
            </div>
            {/* Description */}
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-ovo'>
                   I am a <span className="font-semibold text-red-500">Software Engineer</span> with experience in full-stack web development 
                   and real-time systems. Throughout my career, I&#39;ve worked on international projects, building internal platforms, and company websites 
                   focusing on efficient and user-friendly solutions.</p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, title, description},index) => (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500' key={index} >
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default About