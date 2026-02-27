import React from 'react'
import style from './abouthero.module.css'
import img from '../../assets/images/AboutImage.png'

export default function AboutHero() {
  return (
    <div className='mb-20 mt-27'>
      <div className="container">
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='font-semibold text-[56px] text-[#1D3444] leading-18 tracking-[-3%] mb-6'>We value human, <br /> organizational, and <br /> operational <br /> intelligence, not just <br /> artificial</h1>
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
