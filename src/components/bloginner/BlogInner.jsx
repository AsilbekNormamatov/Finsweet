import React from 'react'
import img from '../../assets/images/BlogInnerImage.png'
import img1 from '../../assets/images/BlogImage.svg'


export default function BlogInner() {
    return (
        <div>
            <div className="container">
                <div className='pt-28.25 pb-20'>
                    <img src={img} alt="" />
                </div>
                <div className='flex justify-center'>
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
                        <h1 className='font-semibold text-[64px] text-[#1D3444] leading-18 tracking-[-3%] mb-6'>Breaking the code How <br /> did we build our Figma <br /> plugin </h1>
                        <p className='font-medium txet-[16px] text-[#5B5B5B] leading-7 mb-6 max-w-185'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p> <br />
                        <p className='font-medium txet-[16px] text-[#5B5B5B] leading-7 mb-6 max-w-185'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p> <br /> 
                        <p className='font-medium txet-[16px] text-[#5B5B5B] leading-7 mb-6 max-w-185'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice.</p> <br /> <br />
                        <h1 className='font-semibold text-[48px] text-[#1D3444] leading-18 tracking-[-3%] mb-6'>Transform Your Idea Into Reality <br /> with Ether a Leading Digital <br /> Agency</h1>
                        <p className='font-medium txet-[16px] text-[#5B5B5B] leading-7 mb-6 max-w-185'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.</p>
                        <p className='font-medium txet-[16px] text-[#5B5B5B] leading-7 mb-6 max-w-185'>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, ‘Designing voice and tone for error messages.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
