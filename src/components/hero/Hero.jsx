import React from 'react'
import img from '../../assets/images/Image.png'
import img1 from '../../assets/images/Logo1.svg'
import img2 from '../../assets/images/Logo2.svg'
import img3 from '../../assets/images/Logo3.svg'
import { NavLink } from 'react-router-dom'

export default function Hero() {
    return (
        <div className='bg-[#DCEAF5] w-full pt-14.5 mb-24'>
            <div className="container">
                <div className='flex items-end justify-between'>
                    <div className='max-w-137.5 pb-36.75'>
                        <h1 className='font-semibold text-[54px] leading-18 tracking-[-3%] mb-3'>Prosper with our bespoke solutions</h1>
                        <p className='font-medium text-[16px] leading-7.5 text-[#5B5B5B] mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
                        <div className='flex gap-1 mb-14'>
                            <button className='py-4 px-8 bg-[#F58A07] rounded-[30px] text-white cursor-pointer hover:bg-[#f9951c] transition-[.3s] font-semibold'>See our services</button>
                            <button className='py-4 px-8 cursor-pointer rounded-[30px] hover:bg-[gray] hover:text-white transition-[.3s] font-semibold'>See All Services </button>
                        </div>
                        <p className='text-[18px] leading-7.5 text-[#394149]/50 mb-4.5'>Worked with 100+ Companies</p>
                        <div className='flex gap-12'>
                            <NavLink><img src={img1} alt="" /></NavLink>
                            <NavLink><img src={img2} alt="" /></NavLink>
                            <NavLink><img src={img3} alt="" /></NavLink>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" width={900}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
