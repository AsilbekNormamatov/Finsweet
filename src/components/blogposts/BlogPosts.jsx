import React from 'react'
import img1 from '../../assets/images/Image1.png'
import img2 from '../../assets/images/Image2.png'
import img3 from '../../assets/images/Image3.png'
import { LuMoveRight } from 'react-icons/lu'

export default function BlogPosts() {
    return (
        <div className='pb-32'>
            <div className="container">
                <h1 className='font-semibold text-[46px] leading-14 tracking-[-3%] capitalize text-[#0D1317] mb-16'>All posts</h1>
                <div className='flex justify-between items-center flex-wrap mb-10'>
                    <div className='max-w-100 bg-[#EDF7FF] rounded-[20px]'>
                        <div className='mb-8'><img src={img1} alt="" /></div>
                        <div className='p-8'>
                            <h1 className='font-medium text-[24px] leading-[107%] tracking-[-3%] mb-4'>Why you have to digitalize in 2021</h1>
                            <p className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Learn More <LuMoveRight /></button>
                        </div>
                    </div>
                    <div className='max-w-100 bg-[#EDF7FF] rounded-[20px]'>
                        <div className='mb-8'><img src={img2} alt="" /></div>
                        <div className='p-8'>
                            <h1 className='font-medium text-[24px] leading-[107%] tracking-[-3%] mb-4'>Our internal process and longerm vision</h1>
                            <p className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Learn More <LuMoveRight /></button>
                        </div>
                    </div>
                    <div className='max-w-100 bg-[#EDF7FF] rounded-[20px]'>
                        <div className='mb-8'><img src={img3} alt="" /></div>
                        <div className='p-8'>
                            <h1 className='font-medium text-[24px] leading-[107%] tracking-[-3%] mb-4'>Helping the next generation of leaders</h1>
                            <p className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Learn More <LuMoveRight /></button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center flex-wrap'>
                    <div className='max-w-100 bg-[#EDF7FF] rounded-[20px]'>
                        <div className='mb-8'><img src={img3} alt="" /></div>
                        <div className='p-8'>
                            <h1 className='font-medium text-[24px] leading-[107%] tracking-[-3%] mb-4'>Why you have to digitalize in 2021</h1>
                            <p className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Learn More <LuMoveRight /></button>
                        </div>
                    </div>
                    <div className='max-w-100 bg-[#EDF7FF] rounded-[20px]'>
                        <div className='mb-8'><img src={img1} alt="" /></div>
                        <div className='p-8'>
                            <h1 className='font-medium text-[24px] leading-[107%] tracking-[-3%] mb-4'>Our internal process and longerm vision</h1>
                            <p className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Learn More <LuMoveRight /></button>
                        </div>
                    </div>
                    <div className='max-w-100 bg-[#EDF7FF] rounded-[20px]'>
                        <div className='mb-8'><img src={img2} alt="" /></div>
                        <div className='p-8'>
                            <h1 className='font-medium text-[24px] leading-[107%] tracking-[-3%] mb-4'>Helping the next generation of leaders</h1>
                            <p className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
                            <button className='font-medium text-[16px] text-[#F58A07] leading-[107%] flex gap-2 items-center cursor-pointer hover:-translate-y-0.5 hover:scale-110 transition delay-150 duration-300 ease-in-out'>Learn More <LuMoveRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
