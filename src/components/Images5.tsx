import { IoCartOutline } from "react-icons/io5";
import Heading from "./Heading";

interface CardsProps {
  heading: string; 
}

export default function Images5() {
  const products = [
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
                  className="w-[263px] h-[263px] object-cover"
                />
                
                
              </div>

              <div className="flex justify-between items-end p-1">
                <h3 className="text-gray-700 font-medium font-[#272343]">{product.name}</h3>
                <div className="flex  justify-between mt-2">
                  <span className="text-gray-800 font-bold">
                    {product.price}
                  </span>
                  

                  
                </div>
              </div>
            </div>
          ))}
        </div>
)
}