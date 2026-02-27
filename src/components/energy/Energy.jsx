import React from 'react'
import style from './energy.module.css'
import img from '../../assets/images/Image6.png'

export default function Energy() {
  return (
    <div className='mb-32'>
      <div className='bg-[#F58A07]'>
        <div className={`${style.f} flex gap-18 items-center`}>
            <div>
                <img src={img} alt="" width={650}/>
            </div>
            <div>
                <h1 className='font-semibold text-[36px] text-white leading-14 tracking-[-3%] mb-10'>Energy of a start-up <br /> combined with 30 <br /> years of experience.</h1>
                <button className='font-semibold text-16px] leading-[107%] py-5 px-8 bg-white text-[#F58A07] cursor-pointer rounded-[30px] hover:bg-[#d5d5d5] transition-[.3s]'>See Job Vacancies</button>
            </div>
        </div>
      </div>
    </div>
  )
}
