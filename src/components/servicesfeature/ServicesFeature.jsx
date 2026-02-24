import React from 'react'
import img1 from '../../assets/images/ServicesImage1.png'
import img2 from '../../assets/images/ServicesImage2.png'
import img3 from '../../assets/images/ServicesImage3.png'
import img4 from '../../assets/images/ServicesImage4.png'
import img5 from '../../assets/images/ServicesImage5.png'

export default function ServicesFeature() {
    return (
        <div>
            <div className="container">
                <div className='flex items-center justify-between mb-32 flex-wrap'>
                    <div>
                        <img src={img1} alt="" width={540}/>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[46px] leading-14 tracking-[-3%]'>Business strategy</h1>
                        <p className='font-medium text-[18px] leading-7.5 text-[#5B5B5B] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.met, consectetur <br /> adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                        <ol className='list-disc pl-4'>
                            <li className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-2'>Cost strategy</li>
                            <li className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-2'>Differentiated product or service strategy</li>
                            <li className='font-medium text-[16px] text-[#5B5B5B] leading-7'>Focus on a niche strategy</li>
                        </ol>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-32 flex-wrap'>
                    <div>
                        <h1 className='font-semibold text-[46px] leading-14 tracking-[-3%] mb-6'>Digitalization</h1>
                        <p className='font-medium text-[18px] leading-7.5 text-[#5B5B5B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br /> leo odio, sagittis quis ornare quis.met, consectetur adipiscing <br /> elit. Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, <br /> sagittis.</p>
                    </div>
                    <div>
                        <img src={img2} alt="" width={540}/>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-32 flex-wrap'>
                    <div>
                        <img src={img3} alt="" width={540}/>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[46px] leading-14 tracking-[-3%]'>Risk assessment</h1>
                        <p className='font-medium text-[18px] leading-7.5 text-[#5B5B5B] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.met, consectetur <br /> adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                        <ol className='list-disc pl-4'>
                            <li className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-2'>Individual risk assessment</li>
                            <li className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-2'>Systems risk assessment</li>
                            <li className='font-medium text-[16px] text-[#5B5B5B] leading-7'>Mathematical conceptualization</li>
                        </ol>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-32 flex-wrap'>
                    <div>
                        <h1 className='font-semibold text-[46px] leading-14 tracking-[-3%] mb-6'>Artificial intelligence</h1>
                        <p className='font-medium text-[18px] leading-7.5 text-[#5B5B5B]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br /> leo odio, sagittis quis ornare quis.met, consectetur adipiscing <br /> elit. Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, <br /> sagittis.</p>
                    </div>
                    <div>
                        <img src={img4} alt="" width={540}/>
                    </div>
                </div>
                <div className='flex items-center justify-between mb-32 flex-wrap'>
                    <div>
                        <img src={img5} alt="" width={540}/>
                    </div>
                    <div>
                        <h1 className='font-semibold text-[46px] leading-14 tracking-[-3%]'>Smart Contracts</h1>
                        <p className='font-medium text-[18px] leading-7.5 text-[#5B5B5B] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.met, consectetur <br /> adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.</p>
                        <ol className='list-disc pl-4'>
                            <li className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-2'>Smart contract implementation</li>
                            <li className='font-medium text-[16px] text-[#5B5B5B] leading-7 mb-2'>Smart legal contracts</li>
                            <li className='font-medium text-[16px] text-[#5B5B5B] leading-7'>Basic contract law</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
