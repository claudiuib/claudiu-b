import React from 'react'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Image, { StaticImageData } from 'next/image';
import profileImage from '../assets/image_profile.jpg'
import Link from 'next/link';
import Hero from '@/components/Hero';
type IndexItemProps = {
  name: string;
  url: string;
};

export default function Index(props: IndexItemProps) {
  let { url, name } = props;

  return (
    <div className="flex flex-col">
       <div className='flex justify-center bg-[rgb(36,36,36)]'>
              <Hero />
            </div>
      <div className='flex flex-row items-center bg-[rgb(36,36,36)] min-h-screen'>

        <div className=' w-1/4 flex flex-col mt-10 mb-10 md:mb-32 md:ml-20  mx-auto '>
          <SocialIcon className='rounded-full ring-2 ring-[#99999B]' url='https://www.linkedin.com/in/claudiu-iulian-busteaga/' />
          <SocialIcon className='mt-6 rounded-full ring-2 ring-[#99999B]' url='https://github.com/claudiuib' />
        </div>
        <div className='w-1/4 md:w-1/2'>
          <div className='flex justify-center md:mb-8'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              className='rounded-full ring-1 ring-[#99999B]'
              src={profileImage}
              alt='profile'
              width={200}
              height={200}
            />
          </motion.div>
        </div>

        </div>

        <div className='w-full md:w-full bg-[rgb(36,36,36)]'>
          <div className='max-w-[500px] mx-auto px-4'>
          
            <p className='text-white leading-loose mt-12 text-lg'>
              Hello! I'm Claudiu-Iulian Busteaga, passionate about web development, mobile development, machine learning, and artificial
              intelligence. As a web developer, I love creating dynamic and interactive websites that engage users. My
              interest in machine learning and AI drives me to explore innovative solutions and find ways to enhance
              decision-making processes. I'm constantly learning and staying up-to-date with the latest technologies in
              these fields to broaden my knowledge and contribute to the ever-evolving world of technology.
            </p>
          </div>
          <div className='mt-4 mx-auto flex justify-center'>
            <button className='bg-[#00A67E] hover:bg-[#00614B] text-white font-bold py-2 px-4 rounded-lg'>
              <Link href={'/contact'}>Contact Me</Link>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
