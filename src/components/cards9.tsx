import { IoCartOutline } from "react-icons/io5";
import Heading from "./Heading";

interface CardsProps {
  heading: string; 
}

export default function Cards9() {
  const products = [
    {
      id: 1,
      image: "/images/chair2.png",
      label: "New",
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: null,
    },
    {
      id: 2,
      image: "/images/pinkchair1.png",
      label: "Sales",
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: "$39",
    },
    {
      id: 3,
      image: "/images/orange1.png",
      label: null,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: null,
    },
    {
      id: 4,
      image: "/images/white1.png",
      label: null,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: null,
    },
    {
        id: 1,
        image: "/images/chair2.png",
        label: "New",
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: null,
      },
      {
        id: 2,
        image: "/images/pinkchair1.png",
        label: "Sales",
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: "$39",
      },
      {
        id: 3,
        image: "/images/orange1.png",
        label: null,
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: null,
      },
      {
        id: 4,
        image: "/images/white1.png",
        label: null,
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: null,
      },
      {
        id: 1,
        image: "/images/chair2.png",
        label: "New",
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: null,
      },
      {
        id: 2,
        image: "/images/pinkchair1.png",
        label: "Sales",
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: "$39",
      },
      {
        id: 3,
        image: "/images/orange1.png",
        label: null,
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: null,
      },
      {
        id: 4,
        image: "/images/white1.png",
        label: null,
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: null,
      },
    
  ];
  return (
        <div className="w-full mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
              <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[312px] h-[312px] object-cover"
                />
                {product.label && (
                  <span
                    className={`absolute top-2 left-2 text-sm font-medium text-white py-1 px-2 rounded 
                      ${
                        product.label === "New"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      }`}
                  >
                    {product.label}
                  </span>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-gray-700 font-medium">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-800 font-bold">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through mr-[150px]">
                      {product.oldPrice}
                    </span>
                  )}

                  <button className="mt-1 w-[44px] flex items-center justify-center text-center bg-[#F0F2F3] text-[#272343] py-2 rounded-md hover:bg-[#029faeff] transition">
                    <IoCartOutline className="w-5 h-5 mr-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
)
}
