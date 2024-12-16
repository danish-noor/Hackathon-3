import React from 'react'
import FeaturedProducts from './Featuredproducts'
import Cards from './Cards'

const ProductGrid = () => {
  return (
    <div>
      <div className=" wrapper flex justify-between px-[300px] pt-[150px] text-2xl font-semibold text-gray-800 mb-6">Our Products</div>
   
    <main className="wrapper w-[1920px] h-[461px] px-[300px] mt-[30px] flex justify-between ">
        <Cards />
        </main>
        <main className="wrapper w-[1920px] h-[461px] px-[300px] mt-[30px] flex justify-between ">
        <Cards />
        </main>
    
    </div>
  )
}

export default ProductGrid