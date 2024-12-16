import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <main className=" wrapper w-[1920] h-[958px] px-[300px] py-[108px] flex justify-between">
        <div className="w-[1321px] h-[850px] px-[70px] py-[229px] bg-[#F0F2F3] opacity-100 rounded-bl-[48px] flex justify-between items-center">
          <div className="w-[557px] h-[337px]">
            <div className="w-[177px] h-[14px] text-[14px] text-[#272343] ">
              WELCOME TO CHAIRY
            </div>
            <div className="w-[557px] h-[192px] py-[20px] font-[700] text-[57px] text-[#272343] leading-[60px] ">
              Best Furniture Collection For Your Interior.
            </div>
            <button className="w-[171px] h-[52px] bg-[#029FAE] text-[#FAFAFA] rounded-[8px] mt-[75px] ">
              Shop Now 
            </button>
          </div>
          <div className="px-[77px] py-[115p]">
            <Image
              src="/Images/chair1.png"
              alt="chair1"
              width={1000}
              height={1000}
              className="w-[434px] h-[584px] px-[777] py-"
            />
          </div>
        </div>

      
      </main>
      <div className="wrapper w-[1320px] h-[139px] flex justify-between items-center mx-[300px] my-[-30px]">
        
          <div><Image
              src="/Images/zap.png"
              alt="chair1"
              width={1000}
              height={1000}
              className="w-[85px] h-[87px] "
            /></div>
          <div><Image
              src="/Images/pipe.png"
              alt="chair1"
              width={1000}
              height={1000}
              className="w-[107px] h-[109px] "
            /></div>
          <div><Image
              src="/Images/cib.png"
              alt="chair1"
              width={1000}
              height={1000}
              className="w-[135px] h-[139px] "
            /></div>
          <div><Image
              src="/Images/z.png"
              alt="chair1"
              width={1000}
              height={1000}
              className="w-[63px] h-[65px]  border-red-700  "
            /></div>
          <div><Image
              src="/Images/burnt.png"
              alt="chair1"
              width={1000}
              height={1000}
              className="w-[98px] h-[101px] "
            /></div>
          <div><Image
              src="/Images/panda.png"
              alt="chair1"
              width={1000}
              height={1000}
              className="w-[113px] h-[115px] "
            /></div>
          <div><Image
              src="/Images/moz.png"
              alt="chair1"
              width={1000}
              height={1000}
              className="w-[84px] h-[87px]"
            /></div>
        </div>
   </>
  );
};

export default Hero;
