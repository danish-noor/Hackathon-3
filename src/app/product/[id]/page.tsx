"use client";

import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import Button from "../../../components/Buttton";
import Images5 from "../../../components/Images5";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Product {
  _id: string;
  title: string;
  size: string | null;
  quantity: number | null;
  price: number;
  imageUrl: string;
}

export default function SingleProductPage() {
  const { _id } = useParams(); // ✅ Correct way to get params in Next.js 14
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch single product by ID
        const query = `*[_type == 'products' && _id == "${_id}"][0] {
          _id, title, size, quantity, price, "imageUrl": image.asset->url
        }`;
        
        // Fetch featured products
        const result = await client.fetch(query);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }  
    };

    if (_id) {
      fetchData();
    }
  }, [_id]);

  if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;

  if (!data) return <div className="text-center text-red-500 text-lg">Product not found!</div>;

  return (
    <>
      <div className='max-w-full mx-4 pl-[160px] flex gap-[100px]'>
        <div className="w-[675px] h-[607px] mt-[132px] rounded-[10px]">
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[675px] h-[607px] mt-[132px] rounded-[10px]">
          <h2 className="text-[60px] font-bold text-[#272343] leading-[66px]">
            {data.title}
          </h2>
          <button className="mt-6 bg-[#029FAE] rounded-full text-white py-2 px-6 text-lg">
            ${data.price} USD
          </button>
          <div className="border-b border-gray-300 my-4"></div>
          <p className="text-gray-700 opacity-60 leading-[33px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
          <Button />
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="px-4 my-24 flex flex-col justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-[28px] font-semibold text-gray-800">Featured Products</h2>
          <h3 className="text-[16px] font-semibold border-b-2 border-black cursor-pointer">
            View All
          </h3>
        </div>
        <Images5 />
      </div>
    </>
  );
}