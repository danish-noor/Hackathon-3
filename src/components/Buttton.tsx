import React, { Children } from 'react'
import { IoCartOutline } from "react-icons/io5";

const Buttton = () => {
  return (
    <div className='w-[212px] h-[63px] pl-[24px] pt-[14px] rounded-[8px] gap-[9px] bg-[#029FAE] text-[#FAFAFA] flex'><IoCartOutline className='w-[29px] h-[29px]' />
    <p className='w-[116px] h-[22px] text-[18px] leading-[22px]  font-bold '>Add To Cart</p></div>
  )
}

export default Buttton