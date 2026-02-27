import React from 'react'
import style from './helping.module.css'
import img from '../../assets/images/Image5.png'
import { LuMoveRight } from 'react-icons/lu'

export default function Helping() {
    return (
        <div className='bg-[#EDF7FF] pt-12 pb-12.5 max-w-287.5 rounded-[20px] px-5 mx-auto mb-32'>
            <div className="container">
                <div className={`${style.c} flex gap-6 mb-20`}>
                    <button className='py-2 px-6 bg-white text-[#F58A07] font-semibold text-[16px] rounded-[30px] cursor-pointer'>Business strategy</button>
                    <button className='py-2 px-6 border border-[#A8BCCC] text-[#063255]/30 font-semibold text-[16px] rounded-[30px] cursor-pointer'>Digitalization</button>
                    <button className='py-2 px-6 border border-[#A8BCCC] text-[#063255]/30 font-semibold text-[16px] rounded-[30px] cursor-pointer'>Risk assessment</button>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='font-semibold text-[42px] leading-14 tracking-[-3%] mb-6.25'>Helping clients with <br /> research and strategy <br /> for their business</h1>
                        <p className='max-w-112.5 font-medium text-16px] leading-7.5 text-[#5B5B5B] mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque. <br /> <br />

                            Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque. </p>
                        <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>See all services <LuMoveRight /></button>
                    </div>
                    <div className={`${style.f}`}>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
