import Link from 'next/link'
import React from 'react'

const Navbar  = () => {
  return (
    <div className="wrapper h-[84px] bg-[F0F2F3] pl-[300px] pt-[14px] pr-[300px] pb-[14px] flex justify-between items-center border-b-2 border-[#c5b7b7]  ">
        <div>
            <ul className='flex justify-between items-center gap-[15px]'> 
              <li className='text-[#007580] hover:underline'><Link href={'#'}>Home</Link></li>
                <li className='hover:underline'><Link href={'#'}>Shop</Link></li>
                <li className='hover:underline'><Link href={'#'}>Product</Link></li>
                <li className='hover:underline'><Link href={'#'}>Page</Link></li>
                <li className='hover:underline'><Link href={'#'}>About</Link></li>
            </ul>
        </div>
        <div className='w-[168px] h-[15px] flex'>
        <div className='w-[57px] h-[15px] font-inter text-[14px] text-[#636270]'>Contact:</div>
        <div className='w-[103px] h-[15px] font-inter text-[14px] text-[#272343] font-medium '>((808) 555-0111)</div>
        
        </div>
    </div>
  )
}

export default Navbar