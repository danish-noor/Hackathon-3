import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header1 = () => {
  return (
    <header className="w-full bg-[#171718] py-4 sm:px-6 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
      {/* Free Shipping Section */}
      <div className="flex items-center space-x-4">
        <div className="w-4 h-4">
          <Image
            src="/Images/Vector-1.png"
            alt="Check Icon"
            width={16}
            height={16}
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
          <Image
            src="/Images/Vector.png"
            alt="Dropdown Icon"
            width={7}
            height={4}
          />
        </div>

        {/* FAQ Link */}
        <div className="text-sm text-white hover:underline">
          <Link href="/faqpage">Faqs</Link>
        </div>

        {/* Need Help Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/Images/alert-circle1.png"
            alt="Help Icon"
            width={16}
            height={16}
          />
          <p className="text-sm text-white hover:underline cursor-pointer">
            Need Help
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header1;



