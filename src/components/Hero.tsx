import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Hero;


