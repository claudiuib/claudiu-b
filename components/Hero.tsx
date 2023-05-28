import React from 'react'
import {Cursor, useTypewriter}  from 'react-simple-typewriter'

type Props={}

export default function Hero({}:Props) {
 const[text,count]=useTypewriter ({
    words:["Hi,I am  Claudiu ","<Love Coding>","Creator","Tech passionate"],
    loop:true,
    delaySpeed:2000,

  });

  return(
    <div className='leading-loose mt-12'>
        <h1 className='text-4xl'>
            <span className='text-white '>{text}</span>
            <Cursor cursorColor='grey' />
        </h1>
    </div>
  )
}
