import React from "react";


interface Product {
  id: number;
  image: string;
  label: string | null;
  name: string;
  price: string;
  oldPrice: string | null;
}

const Images5: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      image: "/images/blackchair1.png",
      label: "New",
      name: "Library Stool Chair",
      price: "$99",
      oldPrice: null,
    },
    {
      id: 2,
      image: "/images/chair2.png",
      label: "Sales",
      name: "Library Stool Chair",
      price: "$99",
      oldPrice: null,
    },
    {
      id: 3,
      image: "/images/category3.png",
      label: null,
      name: "Library Stool Chair",
      price: "$99",
      oldPrice: null,
    },
    {
      id: 4,
      image: "/images/orange1.png",
      label: null,
      name: "Library Stool Chair",
      price: "$99",
      oldPrice: null,
    },
    {
      id: 5,
      image: "/images/category1.png",
      label: null,
      name: "Library Stool Chair",
      price: "$99",
      oldPrice: null,
    },
  ];

  return (
    <div className="w-full sm:mx-6 my-12 lg:max-w-[1920px]">  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              {product.label && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.label}
                </span>
              )}
            </div>
            <div className="flex justify-between items-center p-4">
              <h3 className="text-gray-700 font-medium">{product.name}</h3>
              <div className="text-gray-800 font-bold">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images5;
