import React from 'react'
import map from '../../assets/images/Map.svg'

export default function ContactHero() {
    return (
        <div className='pt-25 pb-32'>
            <div className="container">
                <div className='flex items-center gap-20 mb-16 flex-wrap'>
                    <div>
                        <h1 className='font-semibold text-[46px] leading-16 tracking-[-3%] mb-6'>Have a question ? Let’s <br /> get in touch with us.</h1>
                        <p className='font-medium text-[18px] leading-7.5 text-[#5B5B5B]'>Fill up the Form  and ou team will get back to within 24 hrs</p>
                    </div>
                    <div className='flex items-start gap-19 flex-wrap'>
                        <div>
                            <h1 className='font-medium text-[24px] leading-7.5 tracking-[-3%] text-[#0D1317] mb-4'>Location</h1>
                            <p className='font-medium text-[18px] leading-7.5 text-[#5B5B5B]'>DLF Cybercity, Bhubaneswar, <br /> India, &52050</p>
                        </div>
                        <div>
                            <h1 className='font-medium text-[24px] leading-7.5 tracking-[-3%] text-[#0D1317] mb-4'>Contact Us</h1>
                            <a href="#" className='font-medium text-[18px] leading-7.5 text-[#5B5B5B]'>020 7993 2905</a> <br />
                            <a href="#" className='font-medium text-[18px] leading-7.5 text-[#5B5B5B]'>hi@finsweet.com</a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-start'>
                    <div>
                        <form action="">
                            <input type="text" placeholder='First Name' className='py-4.5 pl-8 pr-88 rounded-[27px] bg-[#D2DAED2B] mb-4 focus:outline-0' /> <br />
                            <input type="text" placeholder='Last Name' className='py-4.5 pl-8 pr-88 rounded-[27px] bg-[#D2DAED2B] mb-4 focus:outline-0' /> <br />
                            <input type="email" placeholder='Email address' className='py-4.5 pl-8 pr-88 rounded-[27px] bg-[#D2DAED2B] mb-4 focus:outline-0' /> <br />
                            <textarea name="messages" id="Typemessage" placeholder='Type message' className='pt-8 pl-8 pr-93.75 pb-25 bg-[#D2DAED2B] rounded-[27px] mb-8 focus:outline-0'></textarea>
                            <button type='submit' className='py-4.5 px-8 rounded-[30px] bg-[#F58A07] text-white cursor-pointer hover:bg-[#ce7202] transition-[.3s]'>Submit</button>
                        </form>
                    </div>
                    <div>
                        <img src={map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
