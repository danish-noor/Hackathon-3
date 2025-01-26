import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-[#FAFAFA] py-4 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center border-b-2">
      {/* Navigation Links */}
      <ul className="w-full py-4 sm:px-0 gap-3 flex flex-col md:flex-row items-center">
        <li className="text-[#007580] hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="hover:underline">
          <Link href="/productspage">Product</Link>
        </li>
        <li className="hover:underline">
          <Link href="/singleproductpage">Page</Link>
        </li>
        <li className="hover:underline">
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
  );
};

export default Navbar;

