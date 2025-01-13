import Image from "next/image";
import React from "react";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div>
      {/* Main Footer Section */}
      <div className="w-full bg-white border-t-2 border-gray-300 py-20 sm:px-6 md:px-8 lg:px-16 flex flex-col sm:flex-col-1 lg:flex-row justify-between items-center">
        <div className="w-[350px] h-[198px] ">
          {/* Logo and Description */}
          <div className="w-full sm:px-0 gap-3 flex flex-col md:flex-row items-center">
            <Image
              src="/Images/Logo Icon.png"
              alt="Logo"
              width={40}
              height={40}
            />
            <h1 className="text-[26px] font-medium text-[#272343]">Comforty</h1>
          </div>
          <p className="text-sm px-6 sm:text-base md:text-lg lg:text=xl xl:text-2xl 2xl:text-3xl leading-normal sm:leading-relaxed text-[16px] text-[#272343] mt-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          {/* Social Icons */}
          <div className=" px-6 flex gap-4 text-[24px] text-[#272343] mt-4">
            <FiFacebook className="hover:text-[#007580]" />
            <CiTwitter className="hover:text-[#007580]" />
            <FaInstagram className="hover:text-[#007580]" />
            <FiLinkedin className="hover:text-[#007580]" />
            <FaYoutube className="hover:text-[#007580]" />
          </div>
        </div>

        {/* Categories Section */}
        <div className="flex justify-between flex-col sm:flex-col-1 md:flex-cols-1 lg:flex-row  gap-20">
         <div className="w-[105px] h-[203px]"> 
          <h2 className="text-[20px] font-medium text-[#9A9CAA] mb-4">
            CATEGORY
          </h2>
          <ul className="space-y-2 text-[16px] text-[#272343]">
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li className="text-[#007580]">Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
         </div>

        {/* Support Section */}
        <div className="w-[156px] h-[108px]  ">
          <h2 className="text-[20px] font-medium text-[#9A9CAA] mt-">
            SUPPORT
          </h2>
          <ul className="space-y-2 text-[16px] text-[#272343]">
            <li>Help & Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-[424px] h-[142px] ">
          <h2 className="text-[20px] font-medium text-[#9A9CAA] mb-4 flex">
            NEWSLETTER
          </h2>
          <div className="w-[285px] h-[46px] flex items-center gap-24 bg-[#FAFAFA] border-2 rounded-md px-2 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent flex-1 text-sm outline-none"
            />
            <button className="w-[127px] h-[46px] bg-[#029FAE] text-white text-sm px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
          <p className="w-[424px] h-[46px] text-[15px] text-[#272343] opacity-70 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        
        </div>
      </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full bg-gray-100 py-4 text-center sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>
          &copy; 2024 - Designed & Developed by{" "}
          <a
            href="#"
            className="text-gray-700 font-semibold hover:underline">
            Danish Noor
          </a>
        </p>
        <Image
          src="/Images/Footer13.png"
          alt="Payment Icons"
          width={150}
          height={50}
        />
      </div>
    </div>
  );
};

export default Footer;



