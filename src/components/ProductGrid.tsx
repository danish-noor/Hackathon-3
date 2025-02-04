// import { IoCartOutline } from "react-icons/io5";
// import Heading from "./Heading";
import { client } from "../sanity/lib/client";
import ShopProduct from "./ShopProduct";

interface Product {
  _id: string;
  name: string;
  title: string;
  size: string | null;
  quantity: number | null;
  price: number;
  imageUrl: string;
  description: string;
  rating: number;
  category: string;
  // Add any other missing properties here
}

export default async function Cards() {
    const query = `*[_type == "products"]{_id, title, size, quantity, price, "imageUrl": image.asset->url}[4...12]`; 
    console.log(query);
    
    const dataProducts: Product[] = await client.fetch(query);
    
  return (
    <div>
      <div className="sm:mx-6 md:mx-8 lg:mx-16 flex flex-col sm:flex-col-2 md:flex-col-3 lg:flex-col4">
      <div className="pt-[150px] text-2xl font-semibold text-gray-800 mb-6 ">
        Our Products
      </div>
          <div className="w-full mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataProducts.map((products) => (
          <ShopProduct data={products} key={products._id} />
        ))}
        </div>
      </div>

    </div>

)
}
