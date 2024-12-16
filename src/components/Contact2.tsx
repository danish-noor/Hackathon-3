import React from "react";
import { FaTrophy, FaShieldAlt, FaHeadset } from "react-icons/fa";

const Contact2 = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
         
          <div className="flex flex-col items-center space-y-2">
            <FaTrophy className="text-4xl text-black" />
            <h3 className="text-lg font-semibold text-black">High Quality</h3>
            <p className="text-gray-500">crafted from top materials</p>
          </div>

       
          <div className="flex flex-col items-center space-y-2">
            <FaShieldAlt className="text-4xl text-black" />
            <h3 className="text-lg font-semibold text-black">
              Warranty Protection
            </h3>
            <p className="text-gray-500">Over 2 years</p>
          </div>

         
          <div className="flex flex-col items-center space-y-2">
            <FaHeadset className="text-4xl text-black" />
            <h3 className="text-lg font-semibold text-black">24 / 7 Support</h3>
            <p className="text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2 ;
