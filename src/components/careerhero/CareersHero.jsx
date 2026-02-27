import React from 'react'
import style from './careerhero.module.css'
import img from '../../assets/images/CareersImage.png'

export default function CareersHero() {
    return (
        <div className='mb-32 mt-27'>
            <div className="container">
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='font-semibold text-[56px] text-[#1D3444] leading-18 tracking-[-3%] mb-6'>We hired people <br /> who are very <br /> passionate about <br /> what they do</h1>
                        <p className='font-medium txet-[16px] text-[#5B5B5B] leading-7.5 mb-8'>Through True Rich Attended does no end it his mother since <br /> real had half every him case in packages enquire we up <br /> ecstatic unsatiable saw.</p>
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
