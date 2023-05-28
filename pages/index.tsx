import React from 'react'
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Image, { StaticImageData } from 'next/image';
import profileImage from '../assets/image_profile.jpg'
import Link from 'next/link';

type IndexItemProps = {
  name: string;
  url: string;
};

export default function Index(props: IndexItemProps) {
  let { url, name } = props;

  return (
    <div className='flex items-center bg-[rgb(36,36,36)] min-h-screen'>
      <div className='w-1/2 md:w-1/2 flex flex-col md:flex-row'>
        <div className='flex flex-col mt-10 mb-10 md:mb-32 mx-auto md:ml-20 md:mr-18'>
          <SocialIcon className='rounded-full ring-2 ring-[#99999B]' url='https://www.linkedin.com/in/claudiu-iulian-busteaga/' />
          <SocialIcon className='mt-6 rounded-full ring-2 ring-[#99999B]' url='https://github.com/claudiuib' />
        </div>
        <div className="flex flex-col  md:mt-6 mx-auto">
          <Image
            className='rounded-full ring-1 ring-[#99999B] w-50 h-50 mx-auto'
            src={profileImage}
            alt='profile'
            width={160}
            height={160}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >

          </motion.div>


        </div>

      </div>
    



      <div className='w-1/2 md:w-1/2 bg-[rgb(36,36,36)]'>
        <div className='max-w-[400px] mx-auto px-4'>
          <p className='text-white text-base leading-loose'>
            Hello! I'm Claudiu, passionate about web development, mobile development, machine learning, and artificial
            intelligence. As a web developer, I love creating dynamic and interactive websites that engage users. My
            interest in machine learning and AI drives me to explore innovative solutions and find ways to enhance
            decision-making processes. I'm constantly learning and staying up-to-date with the latest technologies in
            these fields to broaden my knowledge and contribute to the ever-evolving world of technology.
          </p>
        </div>
        <div className='mt-10 mx-auto flex justify-center'>
          <button className='bg-[#00A67E] hover:bg-[#00614B] text-white font-bold py-2 px-4 rounded-full'>
            <Link href={'/contact'}>Contact Me</Link>
          </button>
        </div>
      </div>
    
    </div>
    

  );
}
