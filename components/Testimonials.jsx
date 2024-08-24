'use client'
import React from 'react'
import { FaWebflow } from "react-icons/fa6";
import profile from '../public/profile.svg'
import Image from 'next/image';

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)


const Testimonials = () => {

  useGSAP(()=>{
    gsap.from('.testimonial-image', {
      scrollTrigger: {
        trigger: '.testimonials',
        toggleActions: 'play reset restart reset',
      },
      duration: 1.8,
      delay: 0.3,
      scale: 0,
      rotateY: 720,
    })
  },[])
  

  return (
    <section className='flex flex-col items-center gap-10 text-center px-14 py-[80px] testimonials '>
      <div className='flex items-center gap-3 '>
        <FaWebflow className='text-4xl ' />
        <h4 className='text-3xl font-bold '>Webflow</h4>
      </div>
      <p className='text-[#e0e0e0] font-semibold text-2xl w-[50%] '> Our experience working with this agency has been nothing short of exceptional. Their web design and development team delivered a stunning website that perfectly captured our brand identity and exceeded our expectations. We highly recommend their services.</p>
      <div className='flex flex-col items-center '>
        <Image width={60} alt='John Doe' src={profile} className='rounded-full aspect-square object-cover mb-3 testimonial-image ' />
        <h5 className='font-semibold text-xl '>John Doe</h5>
        <p className='font-light'>Marketing Manager, ABC Company</p>
      </div>
    </section>
  )
}

export default Testimonials