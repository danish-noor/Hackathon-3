import Buttton from '@/components/Buttton'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='wrapper'>
        <div className='wrapper w-[1320px] h-[578px] flex gap-8 '>
            <div className='w-[672px] h-[478px] mt-[100px] bg-[#007580] '>
                <div className='w-[495px] h-[161px] pt-[64px] pl-[64px] '>
                <h2 className='w-[325px] h-[39px] text-[30px] leading-[38.73px] font-roboto text-[#FFFFFF] mb-[20px]'>About Us - Comforty</h2>
                <div className='text-[#FFFFFF] '>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </div>
                </div>
                <div className='w-[] h-[] pt-[179px] pl-[64px]'>
                    <Buttton />
                </div>
            </div>
            <div className='w-[619px] h-[478px] mt-[100px] border-2 border-red-900'>
                <Image src="/Images/chair2.png" alt='chair' width={100} height={100} className='w-full h-full' />
            </div>
        </div>

    </div>
  )
}

export default AboutUs