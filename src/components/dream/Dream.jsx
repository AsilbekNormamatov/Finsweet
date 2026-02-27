import React from 'react'
import style from './dream.module.css'
import img1 from '../../assets/images/Image7.png'
import img2 from '../../assets/images/Image.svg'
import { IoPlaySharp } from 'react-icons/io5'

export default function Dream() {
    return (
        <div className='py-32'>
            <div className="container">
                <div className={`${style.f} flex justify-between items-center`}>
                    <div>
                        <h1 className='font-semibold text-[42px] leading-14 tracking-[-3%] capitalize mb-6'>Finsweet was a dream <br /> to work with</h1>
                        <p className='max-w-120 font-medium text-[16px] text-[#5B5B5B] leading-7.5 mb-10'>Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci. Vivamus eleifend nec felis vel auctor.</p>
                        <div className='flex gap-6 items-center'>
                            <img src={img2} alt="" />
                            <div>
                                <h1 className='font-medium text-[24px] leading-[171%]'>Chikelu Neo</h1>
                                <span className='font-medium text-[16px] text-[#F58A07] leading-[171%]'>CEO at MazeAI</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.i}`}>
                        <div className='flex items-center gap-4.25'>
                            <button className='p-4.25 rounded-[50%] cursor-pointer bg-white'><IoPlaySharp className='w-4.25 h-4.25 text-[#F58A07]'/></button>
                            <span className='font-semibold text-[16px] leading-[102%] text-white'>Play Video</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
