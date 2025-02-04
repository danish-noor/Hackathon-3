"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { faArrowDown, faCheck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SearchInput from './SearchInput';

export default function page() {
  return (
    <div>
        {/* shippingline  */}
    <div className="w-full bg-[#171718] py-4 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
      {/* Free Shipping Section */}
      <div className="flex items-center space-x-4">
        <div className="w-4 h-4">
          <FontAwesomeIcon
        icon={faCheck}
        className="text-white flex items-center -mr-2"
        />
        </div>
        <p className="text-sm text-white font-inter">
          Free shipping on all orders over $50
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 mt-4 md:mt-0">
        {/* Language Dropdown */}
        <div className="flex items-center space-x-2 cursor-pointer text-sm text-white hover:underline">
          <span>Eng</span>
          <FontAwesomeIcon
          icon={faArrowDown}/>
        </div>

        {/* FAQ Link */}
        <div className="text-sm text-white hover:underline">
          <Link href="/faqpage">Faqs</Link>
        </div>

        {/* Need Help Section */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-white"/>
          <p className="text-sm text-white hover:underline cursor-pointer">
            Need Help
          </p>
        </div>
      </div>
    </div>
    {/* comfory cart line  */}
    <div className="w-full bg-[#F0F2F3] py-6 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center pb-2">
        <Image
          src="/Images/Logo Icon.png"
          alt="Comforty Logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <span className="text-2xl font-medium text-[#272343] pl-2 ">Comforty</span>
      </div>

      <SearchInput products={[]} />

      {/* Cart Section */}
      <div className="flex items-center bg-white rounded-lg px-4 py-2">
        <FontAwesomeIcon
        icon={faCartShopping}/>
        <Link
          href="/Product"
          className="text-sm text-[#272343] font-medium hover:underline pl-2"
        >
          Cart
        </Link>
      </div>
    </div>
    {/* navbar  */}
    <nav className="w-full bg-[#FAFAFA] py-4 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center border-b-2">
      {/* Navigation Links */}
      <ul className="w-full py-4 sm:px-0 gap-3 flex flex-col md:flex-row items-center">
        <li className="hover:underline hover:text-[#007580]">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline hover:text-[#007580]">
          <Link href="/cartpage">Shop</Link>
        </li>
        <li className="hover:text-[#007580] hover:underline">
          <Link href="/productspage">Product</Link>
        </li>
        <li className="hover:underline hover:text-[#007580]">
          <Link href="/singleproductpage">Page</Link>
        </li>
        <li className="hover:underline hover:text-[#007580]">
          <Link href="/aboutus">About</Link>
        </li>
      </ul>

      {/* Contact Section */}
      <div className="flex md:flex-row justify-between items-center">
        <div className="text-sm text-[#636270] hover:underline">
          <Link href="/contactus">Contact:</Link>
        </div>
        <div className=" w-[112px] text-sm text-[#23222a]">((808)555-0111)</div>
      </div>
    </nav>
    </div>
  )
}
