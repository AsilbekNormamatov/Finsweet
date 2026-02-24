import React from 'react'
import img from '../../assets/images/Image4.png'

export default function StartUp() {
    return (
        <div className='mb-20'>
            <div className="container">
                <div className='flex justify-between items-center pt-10 pb-20'>
                    <div className='pt-15'>
                        <h1 className='font-semibold text-[42px] leading-14 tracking-[-3%] mb-8'>The energy of a start-up <br />  combined with 30 years <br /> of experience.</h1>
                        <p className='font-medium text-[16px] text-[#5B5B5B] leading-7.5 mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Curabitur sit amet eros blandit, hendrerit elit et, mattis <br /> purus. Vivamus commodo suscipit tellus et <br /> pellentesque.</p>
                        <div className='flex gap-6.5'>
                            <div>
                                <span className='font-bold text-[36px] leading-12.5 text-[#F58A07]'>15+</span>
                                <h1 className='font-semibold text-[24px] leading-[107%] tracking-[-3%]'>Awards received</h1>
                                <p className='font-medium text-[16px] text-[#5B5B5B] leading-7'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscin. Curabitur <br /> sit amet eros elit et.</p>
                            </div>
                            <div>
                                <span className='font-bold text-[36px] leading-12.5 text-[#F58A07]'>500+</span>
                                <h1 className='font-semibold text-[24px] leading-[107%] tracking-[-3%]'>Clients served</h1>
                                <p className='font-medium text-[16px] text-[#5B5B5B] leading-7'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscin. Curabitur <br /> sit amet eros elit et.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt="" width={600}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
