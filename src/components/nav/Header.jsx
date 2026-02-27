import React, { useState } from 'react'
import style from './header.module.css'
import logo from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { use } from 'react'

export default function Header() {
  const [bar, setBar] = useState(false)
  const toggleBar = () => {
    if (bar == false) {
      setBar(true)
    }
    else {
      setBar(false)
    }
  }
  return (
    <div className='py-4'>
      <div className="container">
        <div className='flex items-center justify-between'>
          <NavLink to='/'><img src={logo} alt="" /></NavLink>

          <div className={`${style.f} flex items-center gap-10`}>
            <div className='flex  gap-8'>
              <NavLink to='/about' className='font-medium text-[16px] leading-6'>About Us</NavLink>
              <NavLink to='/careers' className='font-medium text-[16px] leading-6'>Careers</NavLink>
              <NavLink to='/services' className='font-medium text-[16px] leading-6'>Services</NavLink>
              <NavLink to='/blog' className='font-medium text-[16px] leading-6'>Blog</NavLink>
              <NavLink to='/contact' className='font-medium text-[16px] leading-6'>Contact us</NavLink>
            </div>
            <button className='py-4.5 px-8 text-[#F58A07] bg-[#F58A07]/10 hover:bg-[#F58A07] hover:text-white transition-[.3s] rounded-[30px] cursor-pointer'>Clone project</button>
          </div>
          <div className={`hidden ${style.b} text-[40px]`}>
            <button onClick={toggleBar}><FaBars /></button>
          </div>
        </div>
      </div>
        {
          bar && (
            <div onClick={toggleBar} className='fixed top-0 bg-transparent h-screen w-full '>
              <div className='flex flex-col gap-8 bg-white h-screen w-[60%] p-10'>
                <NavLink to='/'><img src={logo} alt="" /></NavLink>
                <NavLink to='/about' className='font-medium text-[16px] leading-6'>About Us</NavLink>
                <NavLink to='/careers' className='font-medium text-[16px] leading-6'>Careers</NavLink>
                <NavLink to='/services' className='font-medium text-[16px] leading-6'>Services</NavLink>
                <NavLink to='/blog' className='font-medium text-[16px] leading-6'>Blog</NavLink>
                <NavLink to='/contact' className='font-medium text-[16px] leading-6'>Contact us</NavLink>
              </div>
            </div>
          )
        }
    </div>
  )
}
