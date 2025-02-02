import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ _id, name, price, image }: ProductProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      <Image src={image} alt={name} width={200} height={200} className="mx-auto rounded-md" />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-600">${price}</p>
      <Link href={`/product/${_id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;

