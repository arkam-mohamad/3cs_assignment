'use client'
import Image from 'next/image'
import React from 'react'
import heroImage from '../public/3cs-hero.svg'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)


const Hero = () => {

  useGSAP(()=>{
    gsap.from('.hero-item', {
      scrollTrigger: {
        trigger: '.hero-content',
        toggleActions: 'play reset restart reset',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.25,
      stagger: 0.5,
    })
  },[])
  
  
  return (
    <div className='flex flex-col items-center p-10 text-center gap-10 hero '>
      <div className='flex flex-col items-center gap-10 hero-content '>
        <h1 className='text-5xl font-semibold w-[50%] hero-item'> Transforming your online presence with innovative solutions</h1>
        <p className='text-xl w-[65%] text-[#e0e0e0] hero-item '> We are a leading web design, web development, digital marketing, and social media marketing agency. Our team of experts is dedicated to delivering exceptional results that drive growth and success for your business.</p>
        <div className='flex items-center gap-5 hero-item'>
          <button className='flex items-center justify-center bg-[#6c35de] w-[180px] py-2 text-xl rounded-lg purple-button button border-2 border-[#fff0] '>Learn More</button>
          <button className='flex items-center justify-center bg-[#fff] w-[180px] py-2 text-[#6c35de] text-xl rounded-lg purple-button button border-2 border-[#fff0] hover:bg-[#a364ff] hover:text-white  '>Sign Up</button>
        </div>
      </div>
      <Image width={900} src={heroImage} alt='AI generated computer image' className='hero-image' />
    </div>
  )
}

export default Hero