import React from "react";

interface Category {
  id: number;
  image: string;
  title: string;
  products: string;
}

const categories: Category[] = [
  {
    id: 1,
    image: "/images/Category1.png",
    title: "Wing Chair",
    products: "3,584 Products",
  },
  {
    id: 2,
    image: "/images/category2.png",
    title: "Wooden Chair",
    products: "157 Products",
  },
  {
    id: 3,
    image: "/images/category3.png",
    title: "Desk Chair",
    products: "154 Products",
  },
];

const TopCategories = (): JSX.Element => {
  return (
    <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-10">
      <h2 className="pt-6 text-2xl font-semibold text-gray-800 mb-6 text-center">
        Top Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-[377px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{category.title}</h3>
              <p className="text-sm">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;


  