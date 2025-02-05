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
      <div className="w-full bg-white border-t-2 border-gray-300 py-10 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
          {/* Logo and Description */}
          <div className="flex items-center gap-3">
            <Image src="/Images/Logo Icon.png" alt="Logo" width={40} height={40} />
            <h1 className="text-xl font-medium text-[#272343]">Comforty</h1>
          </div>
          <p className="text-sm text-[#272343] mt-4 max-w-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-xl text-[#272343] mt-4">
            <FiFacebook className="hover:text-[#007580]" />
            <CiTwitter className="hover:text-[#007580]" />
            <FaInstagram className="hover:text-[#007580]" />
            <FiLinkedin className="hover:text-[#007580]" />
            <FaYoutube className="hover:text-[#007580]" />
          </div>
        </div>

        {/* Categories & Support Section */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex flex-wrap justify-around gap-10">
          <div className="text-center lg:text-left">
            <h2 className="text-lg font-medium text-[#9A9CAA] mb-4">CATEGORY</h2>
            <ul className="space-y-2 text-sm text-[#272343]">
              <li>Sofa</li>
              <li>Armchair</li>
              <li>Wing Chair</li>
              <li className="text-[#007580]">Desk Chair</li>
              <li>Wooden Chair</li>
              <li>Park Bench</li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-lg font-medium text-[#9A9CAA] mb-4">SUPPORT</h2>
            <ul className="space-y-2 text-sm text-[#272343]">
              <li>Help & Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-medium text-[#9A9CAA] mb-4">NEWSLETTER</h2>
          <div className="w-full max-w-sm flex flex-col lg:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#FAFAFA] w-full text-sm outline-none px-2 py-2 border-2 rounded-md"
            />
            <button className="w-full lg:w-28 h-10 bg-[#029FAE] text-white text-sm px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-[#272343] opacity-70 mt-2 max-w-sm text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full bg-gray-100 py-4 px-6 md:px-12 lg:px-20 text-center md:flex md:justify-between md:items-center text-sm text-gray-500">
        <p>
          &copy; 2024 - Designed & Developed by
          <a href="#" className="text-gray-700 font-semibold hover:underline ml-1">
            Danish Noor
          </a>
        </p>
        <div className="mt-4 md:mt-0 flex justify-center md:justify-end">
          <Image src="/Images/FooterLogos.png" alt="Payment Icons" width={150} height={50} />
        </div>
      </div>
    </div>
  );
};

export default Footer;






