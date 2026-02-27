import React from 'react'
import style from './careersposition.module.css'
import { useNavigate } from 'react-router-dom'
import CareersTeast from '../careerstteasting/CareersTeast'
import { PiTrolleySuitcaseDuotone } from 'react-icons/pi'

export default function CareersPosition() {
  const navigate = useNavigate()
  const toTeast = ()=>{
    navigate('/careersteast')
  }
  return (
    <div className='mb-32 '>
      <div className="container">
        <h1 className='font-semibold text-[46px] leading-14 tracking-[-3%] mb-16'>See our open positions </h1>
        <div className={`${style.f} flex items-center gap-9 flex-wrap`}>
            <div className='bg-[#C1E4FF4D] py-8 pr-26 pl-10 rounded-[20px]'>
                <h1 className='font-medium text-[24px] leading-7.5 tracking-[-3%] mb-2'>Full Stack Developer</h1>
                <p className='font-medium text-[18px] leading-7 text-[#394149] mb-8'>Bengaluru · Full Time </p>
                <button onClick={toTeast} className='text-[18px] leading-[107%] text-[#F58A07] cursor-pointer hover:-translate-y-px transition-[.3s]'>Apply Now</button>
            </div>
            <div className='bg-[#C1E4FF4D] py-8 pr-26 pl-10 rounded-[20px]'>
                <h1 className='font-medium text-[24px] leading-7.5 tracking-[-3%] mb-2'>Full Stack Developer</h1>
                <p className='font-medium text-[18px] leading-7 text-[#394149] mb-8'>Bengaluru · Full Time </p>
                <button onClick={toTeast} className='text-[18px] leading-[107%] text-[#F58A07] cursor-pointer hover:-translate-y-px transition-[.3s]'>Apply Now</button>
            </div>
            <div className='bg-[#C1E4FF4D] py-8 pr-26 pl-10 rounded-[20px]'>
                <h1 className='font-medium text-[24px] leading-7.5 tracking-[-3%] mb-2'>Full Stack Developer</h1>
                <p className='font-medium text-[18px] leading-7 text-[#394149] mb-8'>Bengaluru · Full Time </p>
                <button onClick={toTeast} className='text-[18px] leading-[107%] text-[#F58A07] cursor-pointer hover:-translate-y-px transition-[.3s]'>Apply Now</button>
            </div>
            <div className='bg-[#C1E4FF4D] py-8 pr-26 pl-10 rounded-[20px]'>
                <h1 className='font-medium text-[24px] leading-7.5 tracking-[-3%] mb-2'>Full Stack Developer</h1>
                <p className='font-medium text-[18px] leading-7 text-[#394149] mb-8'>Bengaluru · Full Time </p>
                <button onClick={toTeast} className='text-[18px] leading-[107%] text-[#F58A07] cursor-pointer hover:-translate-y-px transition-[.3s]'>Apply Now</button>
            </div>
            <div className='bg-[#C1E4FF4D] py-8 pr-26 pl-10 rounded-[20px]'>
                <h1 className='font-medium text-[24px] leading-7.5 tracking-[-3%] mb-2'>Full Stack Developer</h1>
                <p className='font-medium text-[18px] leading-7 text-[#394149] mb-8'>Bengaluru · Full Time </p>
                <button onClick={toTeast} className='text-[18px] leading-[107%] text-[#F58A07] cursor-pointer hover:-translate-y-px transition-[.3s]'>Apply Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}
