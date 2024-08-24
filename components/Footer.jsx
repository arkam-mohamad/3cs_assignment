import Image from 'next/image'
import React from 'react'
import logo from '../public/3cs-logo.svg'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='px-14 py-[80px] bg-[#342a45]  '>
      <section className='flex  '>
        <div className='flex-1 flex flex-col  gap-5'>
          <Image width={100} alt='3cs logo' src={logo} className='mb-[-20px] ml-[-20px] ' />
          <p className='text-[#e0e0e0] w-[70%] '>Stay up to date on the latest features and releases by joining our newsletter.</p>
          <div className='flex gap-3 items-center news-letter'>
            <input type="email" placeholder='Your email' className='p-3 py-4 w-[350px] rounded ' />
            <button className="button bg-[#6c35de] rounded-md p-3 py-4 w-[125px] ">Subscribe</button>
          </div>
          <small className='w-[70%] '> By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
        </div>
        <div className='flex-1 flex justify-around link-columns '>
          <div className='flex flex-col gap-8 '>
            <h4 className='font-bold '>Column One</h4>
            <ul className='text-[#e0e0e0] flex flex-col gap-5 '>
              <li>Link One</li>
              <li>Link Two</li>
              <li>Link Three</li>
              <li>Link Four</li>
              <li>Link Five</li>
            </ul>
          </div>
          <div className='flex flex-col gap-8 '>
            <h4 className='font-bold '>Column Two</h4>
            <ul className='text-[#e0e0e0] flex flex-col gap-5 '>
              <li>Link Six</li>
              <li>Link Seven</li>
              <li>Link Eight</li>
              <li>Link Nine</li>
              <li>Link Ten</li>
            </ul>
          </div>
          <div className='flex flex-col gap-8 '>
            <h4 className='font-bold '>Follow Us</h4>
            <ul className='text-[#e0e0e0] flex flex-col gap-5 '>
              <li className='flex items-center gap-5 hover:text-[#a364ff] cursor-pointer '><FaFacebook /> Facebook </li>
              <li className='flex items-center gap-5 hover:text-[#a364ff] cursor-pointer '><FaInstagram /> Instagram </li>
              <li className='flex items-center gap-5 hover:text-[#a364ff] cursor-pointer '><FaXTwitter /> X </li>
              <li className='flex items-center gap-5 hover:text-[#a364ff] cursor-pointer '><FaLinkedin /> LinkedIn </li>
              <li className='flex items-center gap-5 hover:text-[#a364ff] cursor-pointer '><FaYoutube /> Youtube </li>
            </ul>
          </div>
        </div>
      </section>
      <div className='mt-16 pt-10 border-t border-[#ffc7ff] flex justify-between items-center copyright-column '>
        <p className='text-[#e0e0e0] '>&copy; 2024 <b className='text-[#ffc7ff] underline '>ARKAM</b>. All rights reserved</p>
        <div className='text-[#e0e0e0] flex gap-5 items-center '>
          <p className='underline '>Privacy Policy</p>
          <p className='underline '>Terms of Service</p>
          <p className='underline '>Cookies Settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer