
import Buttton from '../../components/Buttton'
import Images5 from '../../components/Images5'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  return (
    <>
    <div className='max-w-full mx-4 pl-[160px] flex gap-[100px]'>
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
     
    <div className='max-w-full px-32 lg:w-[1447px] h-[409px] my-[100px] flex flex-col justify-between items-center'>
    <div className='max-w-full mx-4 lg:w-[1446px] h-[35px] flex justify-between items-center'>
    <h2 className="lg:w-[401px] pt-[30px] text-[28px] font-semibold text-gray-800 mb-6">Featured Products</h2>
    <h3 className='w-[69px] h-[22px] text-[16px] font-semibold leading-[21.78px] border-b-2 border-[#000000]'>view all</h3>
    </div>
    <div className='max-w-full mx-4 lg:w-[1446px] h-[375px] flex justify-between items-center gap-6'>
    <Images5 />
    </div>
    </div>
    </>
  )
}

export default SingleProductPage