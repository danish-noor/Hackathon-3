import Image from 'next/image'
import React from 'react'

const Header1 = () => {
  return (
    <div className="wrapper h-[45px] bg-[#272343] pl-[300px] pt-[14px] pr-[300px] pb-[14px] flex justify-between  ">
      <div className='w-[251px] h-[14px]   '>
        <div className='flex font-inter text-[13px] text-[#FFFFFF] '>
          <Image src='/Images/Vector-1.png' alt='check' width={1000} height={1000} className='w-[12px] h-[12px] pr-[2px] '/>
          <p> Free shipping on all orders over $50</p>
          </div>
      </div>
      
      <div className='w-[242px] h-[17px] gap-[24px] opacity-70  flex items-center '>

        <div className='w-[37px] h-[17px]  font-Inter text-[13px]  text-[#FFFFFF] font-weight-400 hover:underline'>Eng</div>
        <Image src='/Images/Vector (1).png' alt='vector2'  width={1000} height={1000} className='w-[7px] h-[3.5px]'/>
        <div className='w-[30px] h-[17px]  font-Inter text-[13px]  text-[#FFFFFF] font-weight-400 hover:underline'>Faqs</div>
        <Image src='/Images/Vector (3).png' alt='vector3'  width={1000} height={1000} className='w-[8px] h-[10.5px]'/>
        <div className='w-[157px] h-[17px]  font-Inter text-[13px] text-[#FFFFFF] font-weight-400 hover:underline'>Need Help</div>
        
      </div>
        
 

    </div>
  )
}

export default Header1

