import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CareersTeast() {
  return (
    <div className='pt-20 pb-32'>
      <div className="container">
        <div className='mb-16'>
                    <div>
                        <h1 className='font-semibold text-[64px] leading-16 tracking-[-3%] mb-16'>Testing Engineer</h1>
                    </div>
                    <div className='flex items-start gap-19 flex-wrap'>
                        <div>
                            <h1 className='font-medium text-[24px] leading-7.5 tracking-[-3%] text-[#0D1317] mb-4'>Job Discription</h1>
                            <p className='font-medium text-[18px] leading-7.5 text-[#5B5B5B]'>Remote, India , 4 to 5 Years Of Experience Department: Website Design <br /> 5 Positions Available.</p>
                        </div>
                        <div>
                            <h1 className='font-medium text-[24px] leading-7.5 tracking-[-3%] text-[#0D1317] mb-4'>Salary</h1>
                            <p className='font-medium text-[18px] leading-7.5 text-[#5B5B5B]'>$30000 Per Anum </p>
                        </div>
                    </div>
        </div>
        <div className='py-16 px-17 bg-[#C1E4FF4D] rounded-[20px]'>
            <div className='flex gap-23'>
                <div className='flex flex-col gap-10'>
                    <NavLink className='font-semibold text-[24px] leading-[109%] text-[#F58A07]'>Details</NavLink>
                    <NavLink className='font-semibold text-[24px] leading-[109%] text-[#0D1317]'>Requirements</NavLink>
                    <NavLink className='font-semibold text-[24px] leading-[109%] text-[#0D1317]'>Responsibilities</NavLink>
                </div>
                <div>
                    <p className='max-w-205 font-medium text-[16px] leading-7 text-[#5B5B5B]'>Design & Create highly engaging industry-related content in both photo, gif & video format Publish Posts on various social media channels <br /> Promote content on social networks and monitor engagement (e.g. comments and shares) <br /> Research industry-related topics <br /> Editing audio and sound design on projects <br /> Engage in opportunities to develop original content and concepts for web and mobile <br /> Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage. <br /> <br /> Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
