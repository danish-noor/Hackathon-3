import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header2 = () => {
  return (
    <header className="w-full bg-[#F0F2F3] py-6 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
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

      {/* Cart Section */}
      <div className="flex items-center bg-white rounded-lg px-4 py-2">
        <Image
          src="/Images/Buy 2.png"
          alt="Cart Icon"
          width={22}
          height={22}
          className="w-6 h-6"
        />
        <Link
          href="/cartpage"
          className="text-sm text-[#272343] font-medium hover:underline pl-2"
        >
          Cart
        </Link>
        <Image
          src="/Images/No.png"
          alt="Notification Icon"
          width={20}
          height={20}
          className="w-5 h-5 ml-2"
        />
      </div>
    </header>
  );
};

export default Header2;

