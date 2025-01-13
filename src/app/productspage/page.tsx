import Cards9 from "@/components/cards9";
import Images6 from "@/components/Images6";
import React from "react";

const AllProducts = () => {
  return ( 
    <>
    <div>
      <div className="py-4 sm:mx-6 md:mx-8 lg:mx-16 flex flex-col sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4">
            <h2 className="pt-[150px] text-2xl font-semibold text-gray-800 mb-6 ">
              Featured Products
            </h2>
            <main >
              <Cards9 />
            </main>
          </div>
          </div>

<div className=" wrapper w-[1924px] h-[754px] px-[10px] my-[20px] flex  flex-col bg-[#1E28320D]  ;">
    <div className="w-[760px] h-[165px] mt-[100px] ml-[582px] flex flex-col justify-between ">
    <h2 className="w-[760px] h-[59px] text-[50px] leading-[58.59px] font-Roboto text-center "> Or Subscribe To The Newsletter</h2>
    <div className="flex justify-between items-center mx-[15px] ">
    <div className="w-[643px] h-[19px]  border-b-2 border-[#261f1f] leading-4  font-Roboto">Email Address</div>
    <div className="w-[59px] h-[22px]  border-b-2  border-[#000000] leading-4 font-Roboto" >Submit</div>
    </div>
    </div>

   <Images6 />
  </div>

    </>
  );
};

export default AllProducts;
