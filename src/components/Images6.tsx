"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export default function Images6() {
  const [dataProducts, setDataProducts] = useState<Product[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const query = `*[_type == "products"][0...7]{_id, title, price, "imageUrl": image.asset->url}`;
        const data: Product[] = await client.fetch(query);
        setDataProducts(data);
      };
  
      fetchData();
    }, []);

  return (
    <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-10">
      <h2 className="pt-6 text-2xl font-semibold text-gray-800 mb-6 text-center">
        Top Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4">
        {dataProducts.map((product) => (
          <Link key={product._id} href={`/product/${product._id}`} passHref>
            <div className="relative w-36 h-36 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={320}
                height={384}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 w-full h-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-all duration-500 group-hover:h-20">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">${product.price} USD</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
