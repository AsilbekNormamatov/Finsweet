import React from 'react'
import style from './bloghero.module.css'
import img from '../../assets/images/BlogImage.png'
import img1 from '../../assets/images/BlogImage.svg'
import { LuMoveRight } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

export default function BlogHero() {
    const navigate = useNavigate()
    const toInner = ()=>{
        navigate('/blog-inner')
    }
    return (
        <div className='bg-[#DCEAF5] py-32 mb-32'>
            <div className="container">
                <div className={`${style.f} flex justify-between items-center`}>
                    <div>
                        <div className='flex items-center gap-6 mb-6'>
                            <div className='flex items-center gap-2'>
                                <img src={img1} alt="" />
                                <span className='text-[16px] text-[#394149] leading-8'>Andrew Jonson</span>
                            </div>
                            <div>
                                <span className='text-[16px] text-[#394149] leading-8'>Posted on 27th January 2021</span>
                            </div>
                        </div>
                        <h1 className='font-semibold text-[56px] text-[#1D3444] leading-18 tracking-[-3%] mb-6'>Our internal <br /> process and <br /> longerm vision</h1>
                        <p className='font-medium txet-[16px] text-[#5B5B5B] leading-7.5 mb-6'>It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. The <br /> Maker is a decentralized. We aim to attain the</p>
                        <button onClick={toInner} className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Read More <LuMoveRight /></button>
                    </div>
                    <div>
                        <img src={img} alt="" width={600} className='rounded-[20px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
