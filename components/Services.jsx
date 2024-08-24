'use client'
import Image from 'next/image'
import React from 'react'
import exp1 from '../public/exp1.svg'
import exp2 from '../public/exp2.svg'
import exp3 from '../public/exp3.svg'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)


const Services = () => {

  useGSAP(()=>{
    gsap.from('.service-column', {
      scrollTrigger: {
        trigger: '.services',
        toggleActions: 'play reset restart reset',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.25,
      stagger: 0.5,
      ease: 'back.inOut(10)'
    });
    
    gsap.from('.service-item', {
      scrollTrigger: {
        trigger: '.services',
        toggleActions: 'play reset restart reset',
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.25,
      stagger: 0.5,
      ease: 'back.inOut(8)'
    });

  },[])
  

  return (
    <section id='services' className='p-14 py-[100px] flex flex-col items-center gap-10 services '>
      <h3 className='font-bold text-3xl w-[50%] text-center '>Websites that captivate.  Designs that inspire. Results that matter.</h3>
      <div className='flex gap-10 services-column'>
        <div className='flex flex-col items-center gap-4 text-center service-column'>
          <Image width={50}  alt='service 1' src={exp1} className='service-item' />
          <h4 className='font-semibold text-2xl service-item '> Boost your online presence with our digital marketing expertise.</h4>
          <p className='text-[#e0e0e0] service-item '> We offer a comprehensive range of digital marketing services including SEO, PPC, and content marketing.</p>
          <button className='flex items-center justify-center bg-[#6c35de] w-[180px] py-2 text-xl rounded-lg purple-button  border-2 border-[#fff0] service-item-button service-item'>Learn More</button>
        </div>
        <div className='flex flex-col items-center gap-4 text-center service-column'>
          <Image width={50}  alt='service 2' src={exp2} className='service-item' />
          <h4 className='font-semibold text-2xl service-item '>Engage your audience with compelling social media strategies.</h4>
          <p className='text-[#e0e0e0] service-item '> Our social media marketing experts will help you reach and connect with your target audience.</p>
          <button className='flex items-center justify-center bg-[#a364ff] w-[180px] py-2 text-xl rounded-lg purple-button  border-2 border-[#fff0] service-item-button service-item'>Sign Up</button>
        </div>
        <div className='flex flex-col items-center gap-4 text-center service-column'>
          <Image width={50} alt='service 3' src={exp3} className='service-item' />
          <h4 className='font-semibold text-2xl service-item '> Content that tells your story and drives customer engagement.</h4>
          <p className='text-[#e0e0e0] service-item '> Our content marketing strategies are designed to attract, engage, and convert your audience.</p>
          <button className='service-item bg-[#fff] w-[180px] py-2 text-[#6c35de] text-xl rounded-lg purple-button border-2 border-[#fff0] hover:bg-[#cb80ff] hover:text-white service-item-button service-item'>Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default Services