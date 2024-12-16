import Image from "next/image";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
    <div className="wrapper w-[1920] h-[418px] px-[300px] py-[80px] mt-2  border-t-2 border-gray-300 flex justify-between items-center ">
      <div className="flex justify-evenly pt-[10%] gap-x-[120px]">
        <div className="w-[350px] h-[198px]">
        <div className='w-[166px] h-[40px] flex'>
            <div ><Image src='/Images/Logo Icon.png' alt='sofa' width={1000} height={1000} className='w-[40px] h-[40px]' /></div>
            <div className='w-[118px] h-[31px] font-medium text-[26px] pl-[8px] text-[#272343] opacity-100 '>Comforty</div>
        </div>
          <h2 className="w-[350px] h-[72px] font-inter mb-3 font-[500] text-[16px] text-[#272343] mt-[16px]">
          Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
          Cras egestas purus 
          </h2>
          
          <div className="flex gap-[24px] w-[168px] h-[24px] text-[#272343] mt-3">
            <FiFacebook className="w-[24px] h-[24px] text-[#007580]" />
            <CiTwitter className="w-[24px] h-[24px]" />
            <FaInstagram className="w-[24px] h-[24px]" />
            <FiLinkedin className="w-[24px] h-[24px]" />
            <FaYoutube className="w-[24px] h-[24px]"/>
          </div>

        </div>

        <div>
          <h2 className="w-[85px] h-[28px] mb-4 text-[20px] font-poppins font-[500] text-[#9A9CAA]">
            CATEGORY
            </h2>
          <p className="w-[94px] h-[48px] font-poppins text-[16px] font-normal text-[#272343]">
            Sofa
          </p>
          <p className="w-[94px] h-[48px] font-poppins text-[16px] font-normal text-[#272343]">
            Armchair
          </p>
          <p className="w-[123] h-[48px] font-poppins text-[16px] font-normal text-[#272343]">
            Wing Chair
          </p>
          <p className="w-[35] h-[48px] font-poppins text-[16px] font-normal text-[#007580]">
            Desk Chair
          </p>
          <p className="w-[61] h-[48px] font-poppins text-[16px] font-normal text-[#272343]">
            Wooden Chair
          </p>
          <p className="w-[41] h-[48px] font-poppins text-[16px] font-normal text-[#272343]">
            Park Bench
          </p>
        </div>

        <div className="w-[159px] h-[196px]">
          <h2 className="w-[101px] h-[28px] mb-4 text-[20px] font-poppins font-[500] text-[#9A9CAA]">
            SUPPORT
          </h2>
          <p className="w-[129] h-[24px] mb-3 font-poppins text-[16px] font-normal text-[#272343]">
            Help & Support
          </p>
          <p className="w-[135] h-[24px] mb-3 font-poppins text-[16px] font-normal text-[#272343]">
            Terms & Conditions
          </p>
          <p className="w-[32] h-[24px] mb-3 font-poppins text-[16px] font-normal text-[#272343]">
            Privacy Policy
          </p>
          <p className="w-[66] h-[24px] font-poppins text-[16px] font-normal text-[#272343]">
            Help
          </p>
        </div>

        <div className="w-[198px] h-[210px]">
          <h2 className="w-[148px] h-[28px] mb-4 text-[20px] font-poppins font-[500] text-[#9A9CAA]">
          NEWSLETTER
          </h2>

          <div className="flex justify-between items-center gap-14 bg-[#FAFAFA] text-[#000000] w-[217px] h-[48px] pl-[16px] pt-[12px] pb-[12px] border-[1.5px] rounded-[4px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[150px] bg-[#FAFAFA] text-[#000000]"
            />
          
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#029FAE] rounded">
            Subscribe
          </button>
          </div>
          <p className="w-[194] opacity-[70%] h-[18px] font-poppins text-[12px] font-normal text-[#272343]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>
   </div>


    <div className="wrapper w-[1920] h-[75px] bg-gray-100 py-6 px-[300px] ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p className="mb-4 md:mb-0">
          &copy; 2021 - BLOGY - Designed & Developed by{" "}
          <a
            href="#"
            className="text-gray-700 font-semibold hover:underline">
            Danish Noor
          </a>
        </p>
          <div className="w-[227px] h-[27px]"  >
            <Image src="/Images/Footer13.png" alt="paypal-pic" width={500} height={500}/>
          </div>
          </div>
        </div>
      </div>


  )
};

export default Footer;
