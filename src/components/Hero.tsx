import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="wrapper h-[900px] pl-[300px] pt-[14px] pr-[300px] pb-[14px] flex justify-between ">
        <div className="w-[1740px] h-[850px] bg-[#F0F2F3] opacity-100  rounded-bl-[48px] flex justify-between items-center">
          <div className="w-[457px] h-[437px]  opacity-100 px-[70px] py-[129px]">
            <div className="w-[177px] h-[14px] text-[#272343] ">
              WELCOME TO CHAIRY
            </div>
            <div className="w-[457px] h-[198px] font-bold text-[40px] text-[#272343] ">
              Best Furniture Collection For Your Interior.
            </div>
            <button className="w-[171px] h-[52px] bg-[#029FAE] text-[#FAFAFA] rounded-[8px] ">
              Shop Now
            </button>
          </div>
          <div className="px-[70px] py-[129px]">
            <Image
              src="/Images/chair1.png"
              alt="chair1"
              width={1000}
              height={1000}
              className="w-[334px] h-[484px] "
            />
          </div>
        </div>

      
      </div>

      <div className="w-[1321px] h-[129px]  flex justify-between items-center pl-[300px] pr-[100px] pb-[100px]">
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
              className="w-[63px] h-[65px] "
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
