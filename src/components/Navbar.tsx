import Link from 'next/link'
import React from 'react'



const Navbar  = () => {
  return (
    <nav className="wrapper w-[1920px] h-[84px] bg-[F0F2F3] px-[300px] py-[14px] flex justify-between items-center border-b-2 border-[#c5b7b7]  ">
        <div>
            <ul className='flex justify-between items-center gap-[15px]'> 
              <li className='text-[#007580] hover:underline'><Link href={'/'}>Home</Link></li>
                <li className='hover:underline'><Link href={'/cartpage'}>Shop</Link></li>
                <li className='hover:underline'><Link href={'/productspage'}>Product</Link></li>
                <li className='hover:underline'><Link href={'/singleproductpage'}>Page</Link></li>
                <li className='hover:underline'><Link href={'/aboutus'}>About</Link></li>
            </ul>
        </div>
        <div className='w-[168px] h-[15px] mr-[30px] flex'>
        <div className='w-[57px] h-[15px] font-inter text-[14px] text-[#636270]  from-neutral-400 leading-[15px] hover:underline'><Link href={'/contactus'}>Contact:</Link></div>
        <div className='w-[103px] h-[15px] font-inter text-[14px] text-[#272343] from-neutral-500 leading-[15px] '>((808) 555-0111)</div>
        
        </div>
    </nav>
  )
}

export default Navbar