import React from 'react'
import img from '../../assets/images/AboutImage1.png'

export default function About() {
  return (
    <div className='mb-24'>
      <div className="container">
        <div className='flex items-center justify-between'>
            <div>
                <h1 className='font-semibold text-[46px] leading-14 tracking-[-3%] mb-8'>We want to get local <br /> identification in every <br /> corner of the world in this <br /> era of global citizenship.</h1>
                <p  className='font-medium text-[16px] leading-7.5 text-[#5B5B5B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Curabitur sit amet eros blandit, hendrerit elit et, mattis <br /> purus. Vivamus commodo suscipit tellus et <br /> pellentesque.</p>
            </div>
            <div><img src={img} alt="" /></div>
        </div>
      </div>
    </div>
  )
}
