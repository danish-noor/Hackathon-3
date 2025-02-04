"use client";
import Images6 from "../../components/Images6";
import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import ShopProduct from "../../components/ShopProduct";

interface Product {
  _id: string;
  title: string;
  size: string | null;
  quantity: number | null;
  price: number;
  imageUrl: string;
}

export default function Productspage() {
  const [dataProducts, setDataProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "products"]{_id, title, size, quantity, price, "imageUrl": image.asset->url}`;
      const data: Product[] = await client.fetch(query);
      setDataProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Future Products */}
      <div>
        <div className="py-4 sm:mx-6 md:mx-8 lg:mx-16 flex flex-col sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4">
          <h2 className="pt-[150px] text-2xl font-semibold text-gray-800 mb-6">
            Featured Products
          </h2>
          <main>
            {/* ✅ Sanity ke Data ko Cards9 ki UI me Render Karna */}
            <div className="w-full mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataProducts.map((product) => (
                <ShopProduct data={product} key={product._id} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <div className="max-w-full lg:w-[1924px] h-[754px] flex flex-col items-center bg-[#1E28320D]">
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
    </div>
  );
}
