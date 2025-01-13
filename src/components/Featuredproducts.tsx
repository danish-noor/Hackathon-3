import React from "react";
import Cards from "./Cards";

export default function FeaturedProducts(): JSX.Element {
  return (
    <div className="py-4 sm:mx-6 md:mx-8 lg:mx-16 flex flex-col sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4">
      <h2 className="pt-[150px] text-2xl font-semibold text-gray-800 mb-6 ">
        Featured Products
      </h2>
      <main >
        <Cards />
      </main>
    </div>
  );
}

