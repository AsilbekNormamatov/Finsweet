import React from 'react'
import style from './footer.module.css'
import logo from '../../assets/images/Logo4.svg'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='bg-[#063255] py-20.5'>
            <div className="container">
                <div className={`${style.f} flex items-start justify-between mb-20`}>
                    <div>
                        <NavLink to='/'><img src={logo} alt="" className='mb-8' /></NavLink>
                        <h1 className='font-semibold text-[34px] leading-11 tracking-[-3%] text-white mb-8'>Bespoke software <br /> solutions</h1>
                        <div className='flex items-center gap-4.25'>
                            <a href="#"><FaFacebookF className='w-3 h-4.5 text-[#FFFFFF]' /></a>
                            <a href="#"><FaYoutube className='w-5 h-5 text-[#FFFFFF]' /></a>
                            <a href="#"><FaInstagram className='w-5 h-5 text-[#FFFFFF]' /></a>
                            <a href="#"><FaTwitter className='w-5 h-5 text-[#FFFFFF]' /></a>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[18px] mb-6 text-white'>Company</h1>
                        <div className='flex flex-col'>
                            <NavLink to='/about' className='font-medium text-[16px] text-white mb-4'>About Us</NavLink>
                            <NavLink to='/careers' className='font-medium text-[16px] text-white mb-4'>Careers</NavLink>
                            <NavLink to='/services' className='font-medium text-[16px] text-white mb-4'>Services</NavLink>
                            <NavLink to='/blog' className='font-medium text-[16px] text-white'>Blog</NavLink>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[18px] mb-6 text-white'>Connect</h1>
                        <div className='flex flex-col'>
                            <a href="#" className='font-medium text-[16px] text-white mb-4'>hi@finsweet.com</a>
                            <a href="#" className='font-medium text-[16px] text-white'>+(123) 456-7890</a>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[18px] mb-6 text-white'>Join Newsletter</h1>
                        <form action="">
                            <div><input type="text" placeholder='Type email here' className='py-4.5 px-8 bg-white rounded-[30px] mb-4' /></div>
                            <button type='submit' className='py-4.5 px-8 bg-[#F58A07] rounded-[30px] text-white font-semibold text-[18px] leading-[107%] cursor-pointer hover:bg-[#c76e00]'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <a href="#" className='font-medium text-[16px] text-white'>© All rights reserved – Finsweet</a>
                    <div className='flex gap-8'>
                        <NavLink to='/pervacy-policy' className='font-medium text-[16px] text-white'>Privacy Policy</NavLink>
                        <a href="#" className='font-medium text-[16px] text-white'>Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
