'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../public/3cs-logo.svg'
import Link from 'next/link'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Navbar = () => {
  

  useGSAP(()=>{
    gsap.from('.navbar', {
      scrollTrigger: {
        trigger: '.navbar',
        toggleActions: 'play reset restart reset',
      },
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.25,
    });

    gsap.from('.logo', {
      scrollTrigger: {
        trigger: '.navbar',
        toggleActions: 'play reset restart reset',
      },
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 1.25,
    });
    gsap.from('.nav-button', {
      scrollTrigger: {
        trigger: '.navbar',
        toggleActions: 'play reset restart reset',
      },
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 1.25,
    });

  },[])
  
  
  return (
    <nav className='flex justify-around items-center px-10 py-2 border-b-2 border-b-[#4d425f] navbar '>
      <Image width={120}  alt='3cs logo' src={logo} className='logo' />
      <ul className='flex items-center gap-10 text-xl'>
        <li><Link href='#about-us'>About Us</Link></li>
        <li><Link href='#services'>Services</Link></li>
        <li><Link href='#contact-us'>Contact Us</Link></li>
      </ul>
      <button className='flex items-center justify-center bg-[#6c35de] px-5 py-2 text-xl rounded-lg purple-button bg-gradient-to-r from-[#6c35de] to-[#a364ff] nav-button '>Log In</button>
    </nav>
  )
}

export default Navbar