"use client";

import Images6 from "../../components/Images6";
import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  size: string | null;
  quantity: number | null;
  price: number;
  imageUrl: string;
}

const AllProducts = () => {
  const [dataProducts, setDataProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"]{_id, name, size, quantity, price, "imageUrl": image.asset->url}`;
        const products: Product[] = await client.fetch(query);
        setDataProducts(products);
      } catch (error) {
        console.error("Sanity Fetch Error:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <div className="py-4 sm:mx-6 md:mx-8 lg:mx-16 flex flex-col sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4">
          <h2 className="pt-[150px] text-2xl font-semibold text-gray-800 mb-6">
            Featured Products
          </h2>
          <main>
            {/* ✅ Sanity ke Data ko Cards9 ki UI me Render Karna */}
            <div className="w-full mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataProducts.length > 0 ? (
                dataProducts.map((product) => (
                  <Link key={product._id} href={`/all-products/${product._id}`}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                      <div className="relative">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-[312px] h-[312px] object-cover"
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="text-gray-700 font-medium">{product.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-gray-800 font-bold">${product.price}</span>
                          <button className="mt-1 w-[44px] flex items-center justify-center text-center bg-[#F0F2F3] text-[#272343] py-2 rounded-md hover:bg-[#029faeff] transition">
                            <IoCartOutline className="w-5 h-5 mr-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-center text-red-500">No products found.</p>
              )}
            </div>
          </main>
        </div>
      </div>
      
      <div className="max-w-full  lg:w-[1924px] h-[754px] flex flex-col items-center bg-[#1E28320D]">
        <div className="w-[760px] h-[165px] mt-[100px] flex flex-col justify-between">
          <h2 className="w-[760px] h-[59px] text-[50px] leading-[58.59px] flex justify-between items-center font-Roboto text-center">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex justify-between items-center mx-[15px]">
            <div className="w-[643px] h-[19px] border-b-2 border-[#261f1f] leading-4 font-Roboto">
              Email Address
            </div>
            <div className="w-[59px] h-[22px] border-b-2 border-[#000000] leading-4 font-Roboto">
              Submit
            </div>
          </div>
        </div>
        <Images6 />
      </div>
    </>
  );
};

export default AllProducts;
