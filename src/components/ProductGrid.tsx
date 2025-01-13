import React from "react";
import Cards from "./Cards";

const ProductGrid: React.FC = () => {
  return (
    <div className="sm:mx-6 md:mx-8 lg:mx-16 flex flex-col sm:flex-col-2 md:flex-col-3 lg:flex-col4">
      <div className="pt-[150px] text-2xl font-semibold text-gray-800 mb-6 ">
        Our Products
      </div>

      {/* Product Rows */}
      <main>
        <Cards />
        <Cards />
      </main>
    </div>
  );
};

export default ProductGrid;
