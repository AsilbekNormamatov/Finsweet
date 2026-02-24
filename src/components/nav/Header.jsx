import React from 'react'
import logo from '../../assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='py-4'>
      <div className="container">
        <div className='flex items-center justify-between'>
            <NavLink to='/'><img src={logo} alt="" /></NavLink>

            <div className='flex items-center gap-10'>
              <div className='flex  gap-8'>
                <NavLink to='/about' className='font-medium text-[16px] leading-6'>About Us</NavLink>
                <NavLink to='/careers' className='font-medium text-[16px] leading-6'>Careers</NavLink>
                <NavLink to='/services' className='font-medium text-[16px] leading-6'>Services</NavLink>
                <NavLink to='/blog' className='font-medium text-[16px] leading-6'>Blog</NavLink>
                <NavLink to='/contact' className='font-medium text-[16px] leading-6'>Contact us</NavLink>
              </div>
              <button className='py-4.5 px-8 text-[#F58A07] bg-[#F58A07]/10 hover:bg-[#F58A07] hover:text-white transition-[.3s] rounded-[30px] cursor-pointer'>Clone project</button>
            </div>
        </div>
      </div>
    </div>
  )
}
