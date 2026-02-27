import React from 'react'
import style from './shero.module.css'
import img from '../../assets/images/ServicesImage.png'

export default function ServiceHero() {
  return (
    <div className='mb-32 mt-27'>
      <div className="container">
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='font-semibold text-[56px] text-[#1D3444] leading-18 tracking-[-3%] mb-6'>We serve clients <br /> with ground <br /> breaking solutions</h1>
            <p className='font-medium txet-[16px] text-[#5B5B5B] leading-7.5 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.</p>
            <button className='py-4.5 px-8 text-white bg-[#F58A07] rounded-[30px] cursor-pointer hover:bg-[#c76e00]'>Work With Us</button>
          </div>
          <div className={`${style.f}`}>
            <img src={img} alt="" width={650}/>
          </div>
        </div>
      </div>
    </div>
  )
}
