import React from 'react'
import style from './team.module.css'
import img1 from '../../assets/images/AboutImage2.png'
import img2 from '../../assets/images/AboutImage4.png'
import img3 from '../../assets/images/AboutImage5.png'
import img4 from '../../assets/images/AboutImage6.png'

export default function TeamWork() {
  return (
    <div className='mb-32'>
      <div className="container">
        <h1 className='font-semibold text-[46px] lea14 tracking-[-3%] mb-6.25'>Teamwork is the only <br /> way we work</h1>
        <p className='font-medium text-[16px] leading-7.5 text-[#5B5B5B] mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros <br /> blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et <br /> pellentesque.</p>
        <div className={`${style.f} flex justify-between flex-wrap`}>
            <div className={`${style.box} bg-[url(/src/assets/images/AboutImage2.png)]`}>
                <div className={`${style.child}`}>
                    <span className='font-semibold text-[14px] text-gray-300 leading-1.5'>Support Assist</span>
                    <h1 className='font-semibold text-white text-[24px] mb-1.5 leading-8'>Selby Stuart</h1>
                    <p className='leading-[199%] text-white'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Curabitur sit amet eros.</p>
                </div>
            </div>
            <div className={`${style.box} bg-[url(/src/assets/images/AboutImage4.png)]`}>
                <div className={`${style.child}`}>
                    <span className='font-semibold text-[14px] text-gray-300 leading-1.5'>Support Assist</span>
                    <h1 className='font-semibold text-white text-[24px] mb-1.5 leading-8'>Selby Stuart</h1>
                    <p className='leading-[199%] text-white'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Curabitur sit amet eros.</p>
                </div>
            </div>
            <div className={`${style.box} bg-[url(/src/assets/images/AboutImage5.png)]`}>
                <div className={`${style.child}`}>
                    <span className='font-semibold text-[14px] text-gray-300 leading-1.5'>Support Assist</span>
                    <h1 className='font-semibold text-white text-[24px] mb-1.5 leading-8'>Selby Stuart</h1>
                    <p className='leading-[199%] text-white'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Curabitur sit amet eros.</p>
                </div>
            </div>
            <div className={`${style.box} bg-[url(/src/assets/images/AboutImage6.png)]`}>
                <div className={`${style.child}`}>
                    <span className='font-semibold text-[14px] text-gray-300 leading-1.5'>Support Assist</span>
                    <h1 className='font-semibold text-white text-[24px] mb-1.5 leading-8'>Selby Stuart</h1>
                    <p className='leading-[199%] text-white'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Curabitur sit amet eros.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
