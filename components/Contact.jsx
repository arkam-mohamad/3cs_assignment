'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { teamMembers } from '@/constants';

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(useGSAP, ScrollTrigger)


const Contact = () => {

  useGSAP(()=>{
    gsap.from('.team-member-card', {
      scrollTrigger: {
        trigger: '.team-members',
        toggleActions: 'play reset restart reset',
      },
      x: -100,
      opacity: 0,
      duration: 1.5,
      stagger: 1,
      ease: 'back.inOut(16)',
    })
  },[])
  

  return (
    <section id='contact-us' className='bg-[#342a45] py-[80px] px-14 flex flex-col gap-10 '>
      <h5 className='font-semibold'>Innovators</h5>
      <h2 className='font-bold text-4xl'>Meet Our Team</h2>
      <p className='text-[#e0e0e0] text-[18px] '>Get to know the talented individuals behind our agency.</p>
      <div className='flex justify-center gap-10 mt-5 team-members '>
        {
          teamMembers.map(teamMember => (
            <div key={teamMember.memberName} className='flex flex-col gap-5 shadow-lg shadow-[#4d425f] w-[300px] rounded-lg team-member-card '>
              <Image width={300} height={450} alt={teamMember.memberName} src={teamMember.img} className='rounded-l-[8px] rounded-r-[8px] rounded-b-[0px] ' />
              <div className='flex flex-col gap-3 pl-3 pb-3 '>
                <h4 className='text-xl font-extrabold '>{teamMember.memberName}</h4>
                <p className='text-[#e0e0e0]  text-xl'>{teamMember.position}</p>
                <p className='text-[#e0e0e0] w-[90%] '>{teamMember.bio} </p>
                <ul className='flex gap-5 my-0 '>
                  <li className='hover:text-[#a364ff]'><Link href={'#'}><FaLinkedin /></Link></li>
                  <li className='hover:text-[#a364ff]'><Link href={'#'}><FaXTwitter /></Link></li>
                  <li className='hover:text-[#a364ff]'><Link href={'#'}><CiGlobe /></Link></li>
                </ul>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Contact