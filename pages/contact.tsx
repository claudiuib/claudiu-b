import React from 'react';
import EmailIcon from '../assets/email.png';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
type Props = {};

export default function Contact({}: Props) {
  const handleEmailClick = () => {
    window.location.href = 'mailto:busteagaclaudiu@gmail.com';
  };

  return (
    <div className='bg-[rgb(36,36,36)] h-[500px] flex flex-col  min-h-screen'>
      <div className='flex justify-center'>
        <p className='mt-8 text-green-100 text-3xl font-semibold'>Contact</p>
      </div>
      <div className='flex justify-center'>
        <p className='mt-8 text-green-100'>Feel free to contact me</p>
      </div>
      <div className='mt-20   flex justify-center'>
      <SocialIcon className=' mr-2 rounded-full ring-2 ring-[#99999B]' url="https://www.linkedin.com/in/claudiu-iulian-busteaga/" />
      <SocialIcon className=' mr-2 rounded-full ring-2 ring-[#99999B]'url="https://github.com/claudiuib" />
    </div>
      <div className='flex justify-center items-center mt-8'>
        <Image src={EmailIcon} alt='Email Icon' className='h-6 w-6 ' />
        <p className='ml-2 text-green-100'> busteagaclaudiu@gmail.com</p>
      </div>
      <div className='flex justify-center mt-4'>
        <button
          className='bg-[#00A67E] hover:bg-[#00614B] text-white font-bold py-2 px-7 rounded-lg mt-4'
          onClick={handleEmailClick}
        >
          Send Email
        </button>
      </div>
    </div>
  );
}
