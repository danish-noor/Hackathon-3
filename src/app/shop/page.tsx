import Image from "next/image";
import React from "react";

interface CartItem {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    size: "L",
    quantity: 1,
    price: 99,
    image: "/images/orange1.png",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    size: "L",
    quantity: 1,
    price: 99,
    image: "/images/category1.png",
  },
];

const Shop = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    
        <div className="max-w-full py-4 mx-auto sm:mx-6 md:mx-8 lg:mx-12 flex grid-cols-1 sm:grid-cols-2 gap-6  justify-between items-center  ">
     
        <div className="py-4 col-span-2">
          <h1 className="text-2xl font-bold mb-4">Bag</h1>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="py-4 flex justify-between items-center border-b "
            >
              <Image
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="rounded-md"
              />
              <div className="flex justify-between gap-80">
              <div className="flex-1 md:ml-6 text-center md:text-left">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm">
                  Size: <span className="font-medium">{item.size}</span>
                </p>
                <p className="text-sm">
                  Quantity: <span className="font-medium">{item.quantity}</span>
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-gray-700 font-bold">MRP: ${item.price}</p>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[350.67px] h-[295px]">
        <div className="border rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Estimated Delivery & Handling</span>
            <span className="font-bold">Free</span>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between mb-4">
            <span className="text-lg font-bold">Total</span>
            <span className="text-lg font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-[#029FAE] text-white py-2 rounded-[30px] hover:bg-teal-600">
            Member Checkout
          </button>
          </div>
        </div>
      </div>
  );
};

export default Shop;
