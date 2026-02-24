import React from 'react'
import img1 from '../../assets/images/Image1.png'
import img2 from '../../assets/images/Image2.png'
import img3 from '../../assets/images/Image3.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import { LuMoveRight } from 'react-icons/lu'

export default function Sector() {
  return (
    <div className='py-24'>
      <div className="container">
        <h1 className='font-semibold text-[48px] leading-14 tracking-[-3%] mb-6.75'>We help more than 1500 <br /> companies from all sectors</h1>
        <p className='font-medium text-[16px] leading-7.5 text-[#5B5B5B] mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros <br /> blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et <br /> pellentesque.</p>
        <div className='flex justify-between items-center'>
            <div>
                <div className='mb-8'><img src={img1} alt="" /></div>
                <div>
                    <h1 className='font-medium text-[24px] leading-[107%] tracking-[-3%] mb-4.5'>Business strategy</h1>
                    <p className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Curabitur sit amet eros blandit, <br /> hendrerit elit et, </p>
                    <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Learn More <LuMoveRight /></button>
                </div>
            </div>
            <div>
                <div className='mb-8'><img src={img2} alt="" /></div>
                <div>
                    <h1 className='font-medium text-[24px] leading-[107%] tracking-[-3%] mb-4.5'>Digitalization</h1>
                    <p className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Curabitur sit amet eros blandit, <br /> hendrerit elit et, </p>
                    <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Learn More <LuMoveRight /></button>
                </div>
            </div>
            <div>
                <div className='mb-8'><img src={img3} alt="" /></div>
                <div>
                    <h1 className='font-medium text-[24px] leading-[107%] tracking-[-3%] mb-4.5'>Risk assessment</h1>
                    <p className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Curabitur sit amet eros blandit, <br /> hendrerit elit et, </p>
                    <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Learn More <LuMoveRight /></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
