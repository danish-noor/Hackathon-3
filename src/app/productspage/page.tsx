import Cards9 from "@/components/cards9";
import Images6 from "@/components/Images6";
import React from "react";

const AllProducts = () => {
  return (
    <>
      {/* Featured Products Section */}
      <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-16">
        <h2 className="pt-[150px] text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <main>
          <Cards9 />
        </main>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-[#1E28320D] py-10 px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center">
        <div className="max-w-4xl flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-Roboto text-center mb-6">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex flex-col sm:flex-row items-center w-full sm:max-w-lg gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:flex-1 border-b-2 border-gray-700 py-2 text-lg focus:outline-none"
            />
            <button className="w-full sm:w-auto px-6 py-2 bg-black text-white text-lg font-semibold">
              Submit
            </button>
          </div>
        </div>
        <Images6 />
      </div>
    </>
  );
};

export default AllProducts;
