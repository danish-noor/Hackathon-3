import Image from 'next/image'
import React from 'react'

const Header2 = () => {
  return (
    <div className="wrapper h-[84px] bg-[#F0F2F3] pl-[300px] pt-[14px] pr-[300px] pb-[14px] flex justify-between opacity-100  ">
        <div className='w-[166px] h-[40px] flex'>
            <div ><Image src='/Images/Logo Icon.png' alt='sofa' width={1000} height={1000} className='w-[40px] h-[40px]' /></div>
            <div className='w-[118px] h-[31px] font-medium text-[26px] pl-[8px] text-[#272343] opacity-100'>Comforty</div>
        </div>
        
        <div className='w-[120px] h-[44px] flex justify-between items-center bg-[#FFFFFF] rounded-[8px]'>
            <div className='w-[56px] h-[22px] flex gap-4 pl-[6px]'>
                    <Image src='/Images/Buy 2.png' alt='cart' width={1000} height={1000} className='w-[22px] h-[22px]' />
                <div className=' w-[26px] h-[13px] flex'>Cart </div>

                <Image src='/Images/No.png' alt='cart' width={1000} height={1000} className='w-[20px] h-[20px]' />

            </div>

        </div>
    </div>
  )
}

export default Header2