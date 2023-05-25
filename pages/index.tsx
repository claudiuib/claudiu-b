import React from 'react'
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import { SocialIcon } from 'react-social-icons';
import Image ,{StaticImageData} from 'next/image';
import profileImage from '../assets/image_profile.jpg'
import Link from 'next/link';

type IndexItemProps ={
  name:string;
  url:string;

  
}

export default function Index(props:IndexItemProps) {
  let {url,name} = props;

  return (
   
<div className='flex justify-center   bg-[rgb(36,36,36)] w-full'>

  <div className='w-1/2 '>
    <div className='flex justify-center mt-12'>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image className='rounded-full ring-1 ring-[#99999B] w-40 h-40' src={profileImage} alt='profile' />
      </motion.div>
    
    </div>
    <div className='flex justify-center'>
    <Hero/>
    </div>
  </div>

  <div className='w-1/2 bg-[rgb(36,36,36)]'>
    <div className='w-[400px]'>
   
 
    <p className='text-white text-left  text-base leading-loose mt-12'>
    
    Hello! I'm passionate about web development, mobile development, machine learning, and artificial intelligence. As a web developer, I love creating dynamic and interactive websites that engage users . My interest in machine learning and AI drives me to explore innovative solutions and find ways to enhance decision-making processes. I'm constantly learning and staying up-to-date with the latest technologies in these fields to broaden my knowledge and contribute to the ever-evolving world of technology.
</p>

    
    </div>
    <div className='mt-4'>
    <button className="bg-[#00A67E] hover:bg-[#00614B] text-white font-bold py-2 px-4 rounded-lg">
      <Link href={"/contact"}>
 Contact Me
 </Link>
</button>
    </div>

    <div className='mt-20  mb-32'>
      <SocialIcon className=' mr-2 rounded-full ring-2 ring-[#99999B]' url="https://www.linkedin.com/in/claudiu-iulian-busteaga/" />
      <SocialIcon className=' mr-2 rounded-full ring-2 ring-[#99999B]'url="https://github.com/claudiuib" />
    </div>
  </div>
  </div> 


 
  )
}
