import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header1 = () => {
  return (
    <main className="wrapper w-[1920px] h-[45px] bg-[#272343] px-[300px] py-[14.5px] flex justify-between items-center ">
      <section className="w-[231px] h-[16px] flex justify-between items-center">
        <div className=" w-[16px] h-[16px]">
          <Image
            src="/Images/Vector-1.png"
            alt="check"
            width={100}
            height={100}
          />
        </div>
        <p className="font-inter text-[13px] text-[#FFFFFF] ">
          Free shipping on all orders over $50
        </p>
      </section>

      <section className="w-[202px] h-[17px] gap-[24px] mr-[40px] flex justify-between items-center  ">
        <div className="w-[37px] h-[17px] font-Inter text-[13px] text-[#FFFFFF] hover:underline cursor-pointer flex justify-between items-center text-center">
          Eng
          <div className="w-[7px] h-[3.5px] ">
            <Image
              src="/Images/Vector.png"
              alt="vector3"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="w-[30px] h-[17px] font-Inter text-[13px] text-[#FFFFFF] hover:underline cursor-pointer">
          <Link href={"/faqpage"}>Faqs</Link>
        </div>

        <div className="w-[87px] h-[17px] flex justify-between items-center ">
          <div className="w-[16px] h-[16px]">
            <Image
              src="/Images/alert-circle1.png"
              alt="N-p"
              width={1000}
              height={1000}
            />
          </div>
           
           <div className="w-[78px] h-[17px]">
          <p className=" font-Inter text-[13px] text-[#FFFFFF] leading-[16.9px] font-normal hover:underline cursor-pointer ">
            Need Help
          </p>
        </div>
        </div>
      </section>
    </main>
  );
};

export default Header1;
