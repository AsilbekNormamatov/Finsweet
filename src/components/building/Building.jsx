import React from 'react'
import style from './building.module.css'
import { FiHeart } from 'react-icons/fi'
import { PiMagicWandBold } from 'react-icons/pi'
import { SlLayers } from 'react-icons/sl'

export default function Building() {
    return (
        <div className='bg-[#EDF7FF] py-24'>
            <div className="container">
                <div className='flex justify-between mb-16'>
                    <h1 className='font-semibold text-[36px] leading-11 tracking-[-3%] max-w-153.25'>We are building software solution that solves your business challenges</h1>
                    <p className='font-medium text-[16px] text-[#1D3444] leading-7.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit <br /> amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo <br /> suscipit tellus et pellentesque.</p>
                </div>
                <div className={`flex justify-between flex-wrap ${style.f}`}>
                    <div className='max-w-100 pl-10 pr-6.5 pt-12 pb-9.25 bg-white rounded-[20px]'>
                        <SlLayers className='text-[#F58A07] w-9 h-8 mb-8' />
                        <h1 className='font-semibold text-[24px] leading-[107%] tracking-[-3%] mb-4'>Invoicing</h1>
                        <p className='font-medium text-[16px] text-[#5B5B5B] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    </div>
                    <div className='max-w-100 pl-10 pr-6.5 pt-12 pb-9.25 bg-white rounded-[20px]'>
                        <PiMagicWandBold className='text-[#F58A07] w-9 h-8 mb-8' />
                        <h1 className='font-semibold text-[24px] leading-[107%] tracking-[-3%] mb-4'>Support</h1>
                        <p className='font-medium text-[16px] text-[#5B5B5B] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    </div>
                    <div className='max-w-100 pl-10 pr-6.5 pt-12 pb-9.25 bg-white rounded-[20px]'>
                        <FiHeart className='text-[#F58A07] w-9 h-8 mb-8' />
                        <h1 className='font-semibold text-[24px] leading-[107%] tracking-[-3%] mb-4'>Surveying</h1>
                        <p className='font-medium text-[16px] text-[#5B5B5B] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
