'use client'
import Image from 'next/image'
import React from 'react'
import aboutImage from '../public/about.svg'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)


const About = () => {

  useGSAP(()=>{
    gsap.from('.left-button', {
      scrollTrigger: {
        trigger: '.about-us-buttons',
        toggleActions: 'play reset restart reset',
      },
      x: -100,
      opacity: 0,
      duration: 1,
    });

    gsap.from('.right-button', {
      scrollTrigger: {
        trigger: '.about-us-buttons',
        toggleActions: 'play reset restart reset',
      },
      x: 100,
      opacity: 0,
      duration: 1,
    });

    gsap.from('.about-us-image', {
      scrollTrigger: {
        trigger: '.about-us-image',
        toggleActions: 'play reset restart reset',
        scrub: true,
        end: '+=900'
      },
      x: 400,
      rotation: 180
    });

  },[])

  
  return (
    <section id='about-us' className='flex gap-5 pl-14 py-[80px] bg-[#342a45] about-us '>
      <div className='flex flex-col py-5 gap-8'>
        <h5 className='font-semibold'>Innovative</h5>
        <h2 className='text-4xl font-bold w-[80%] '>Transforming Web Design with Creative Solutions</h2>
        <p className='text-[#e0e0e0] '> At our agency, we take a unique approach to web design, combining creativity and technical expertise to deliver exceptional results. Our team of experts is dedicated to creating visually stunning and user-friendly websites that leave a lasting impression.</p>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-3'>
            <h4 className='font-bold text-xl'>Expertise</h4>
            <p className='text-[#e0e0e0] '> We have a team of skilled designers and developers who bring your vision to life.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='font-bold text-xl'>Quality</h4>
            <p className='text-[#e0e0e0] '>We are committed to delivering high quality websites that exceed client expectations.</p>
          </div>
        </div>
        <div className='flex items-center gap-5 mt-3 about-us-buttons'>
          <button className='flex items-center justify-center bg-[#6c35de] w-[180px] py-2 text-xl rounded-lg purple-button button border-2 border-[#fff0] left-button '>Learn More</button>
          <button className='flex items-center justify-center bg-[#fff] w-[180px] py-2 text-[#6c35de] text-xl rounded-lg purple-button button border-2 border-[#fff0] hover:bg-[#a364ff] hover:text-white right-button '>Sign Up</button>
        </div>
      </div>
      <Image width={800}  alt='AI generated image of about us' src={aboutImage} className='about-us-image' />
    </section>
  )
}

export default About