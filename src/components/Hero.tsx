import Image from "next/image";
import React from "react";
import Cards from "./Cards";
import TopCategories from "./TopCategories";

const Hero: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <main className="w-full bg-white py-4 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
        <div className="w-full bg-[#F0F2F3] rounded-bl-[48px] p-8 lg:py-[108px] lg:px-[70px] flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-[557px]">
            <p className="text-[14px] text-[#272343]">WELCOME TO CHAIRY</p>
            <h1 className="font-bold text-[40px] lg:text-[57px] text-[#272343] leading-tight mt-4">
              Best Furniture Collection <br /> For Your Interior.
            </h1>
            <button className="mt-8 px-6 py-3 bg-[#029FAE] text-white rounded-md hover:bg-[#027f91] transition">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="mt-8 lg:mt-0">
            <Image
              src="/Images/chair1.png"
              alt="Chair Image"
              width={434}
              height={584}
              className="w-[300px] lg:w-[434px] h-auto"
            />
          </div>
        </div>
      </main>
      {/* patners  */}
      <div className="w-full py-4 sm:px-6 md:px-8 lg:px-16 flex flex-col sm:flex-col-1 md:flex-cols-2 lg:flex-row">
        {/* Brand Section */}
        <div className="w-full flex justify-center lg:justify-between items-center mx-auto gap-6 sm:mx-6">
          <div>
          <Image
            src="/Images/zap.png"
            alt="Zap Logo"
            width={85}
            height={87}
            className="w-[70px] lg:w-[85px] h-auto"
          />
          </div>
          <div>
          <Image
            src="/Images/pipe.png"
            alt="Pipe Logo"
            width={107}
            height={109}
            className="w-[90px] lg:w-[107px] h-auto"
          />
          </div>
          <div>
          <Image
            src="/Images/cib.png"
            alt="Cib Logo"
            width={135}
            height={139}
            className="w-[110px] lg:w-[135px] h-auto"
          /></div>
          <div>
          <Image
            src="/Images/z.png"
            alt="Z Logo"
            width={63}
            height={65}
            className="w-[50px] lg:w-[63px] h-auto"
          /></div>
          <div>
          <Image
            src="/Images/burnt.png"
            alt="Burnt Logo"
            width={98}
            height={101}
            className="w-[80px] lg:w-[98px] h-auto"
          /></div>
          <div>
          <Image
            src="/Images/panda.png"
            alt="Panda Logo"
            width={113}
            height={115}
            className="w-[90px] lg:w-[113px] h-auto"
          /></div>
          <div>
          <Image
            src="/Images/moz.png"
            alt="Moz Logo"
            width={84}
            height={87}
            className="w-[70px] lg:w-[84px] h-auto"
          /></div>
        </div>
      </div>
      {/* related card  */}
          <div className="py-4 sm:mx-6 md:mx-8 lg:mx-16 flex flex-col sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4">
            <h2 className="pt-[150px] text-2xl font-semibold text-gray-800 mb-6 ">
              Featured Products
            </h2>
            <main >
              <Cards />
            </main>
          </div>
          <TopCategories/>
    </div>
  );
};

export default Hero;


