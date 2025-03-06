import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
type Props = {}
 
export default function Header({}: Props) {
  return (
    
 
    <header className="sticky top-0 flex items-start justify-between">
        <div>
 
            <SocialIcon url='https://www.x.com/zuwubz'
            fgColor='grey'
            bgColor='transparent' />
 
            <SocialIcon url='https://www.linkedin.com/in/cody-mcleod-382b42194/'
            fgColor='grey'
            bgColor='transparent'/>
 
            <SocialIcon url='https://discord.com/users/255517607233323008'
            fgColor='grey'
            bgColor='transparent'/>
        
        </div>
 
        <div className='flexm flex-row items-center text-gray cursor-pointer'>
        <SocialIcon className='cursor-pointer'
            network='email'
            fgColor='grey'
            bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray'>Get In Touch</p>
        </div>
        </header>
  )
};

