
import Buttton from '@/components/Buttton'
import Images5 from '@/components/Images5'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  return (
    <>
    <div className='wrapper pl-[260px] flex gap-[100px]'>
    <div className='w-[675px] h-[607px] mt-[132px] rounded-[10px]'>
      <Image src="/Images/pinkchair1.png" alt="chair" width={500} height={500} className='w-full h-full' />
    </div>
    <div  className='w-[675px] h-[607px] mt-[132px] rounded-[10px] '>
     <h2 className='w-[541] h-[132] font-Inter text-[60px] font-bold leading-[66px] text-[#272343]'>Library Stool <br/> Chair</h2>
      <button className='w-[144px] h-[44px] mt-6 bg-[#029FAE] rounded-[100px] text-[#FAFAFA]'>$20.00 USD</button>
      <div className='border-b-1 border-b-[#D9D9D9] pt-4'></div>
      <div className='w-[500px] h-[101px] my-[20px] opacity-[60%] text-[#272343] leading-[33px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</div>
       <div><Buttton /></div>
    </div>
    </div>
     
    <div className='wrapper w-[1447px] h-[409px] my-[100px] flex flex-col justify-between '>
    <div className='w-[1446px] h-[35px] pr-[20px] flex justify-between items-center'>
    <h2 className="w-[401px] h-[34p] px-[300p] pt-[30px] text-[28px] font-semibold text-gray-800 mb-6 leading-[]">Featured Products</h2>
    <h3 className='w-[69px] h-[22px] text-[16px]  font-semibold leading-[21.78px] border-b-2 border-[#000000]'>view all</h3>
    </div>

    <Images5 />
   
 
    </div>
    </>
  )
}

export default SingleProductPage