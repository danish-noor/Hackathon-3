import Image from "next/image";

// interface CartItem {
//   id: number;
//   name: string;
//   size: string;
//   quantity: number;
//   price: number;
//   image: string;
// }

// const cartItems: CartItem[] = [
//   {
//     id: 1,
//     name: "Library Stool Chair",
//     size: "L",
//     quantity: 1,
//     price: 99,
//     image: "/images/orange1.png",
//   },
//   {
//     id: 2,
//     name: "Library Stool Chair",
//     size: "L",
//     quantity: 1,
//     price: 99,
//     image: "/images/category1.png",
//   },
// ];

// const Cart = () => {
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

   import { getAllProducts } from "../sanity/lib/data";
    import { IProduct } from "../sanity/lib/data";

    export default async function Cart() {
     const products:IProduct[] = await getAllProducts() || [];

  const subtotal = products.reduce((acc, product) => acc + product.price, 0);

  return (
    
        <div className="w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 flex justify-between items-center  ">
     
        <div className="col-span-2">
          <h1 className="text-2xl font-bold mb-4">Bag</h1>
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col md:flex-row items-center border-b py-4"
            >
              <Image
                src={product.imageUrl}
                alt={product.name || 'Product Image'}
                width={120}
                height={120}
                className="rounded-md"
              />
              <div className="flex-1 md:ml-6 text-center md:text-left">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm">
                  Size: <span className="font-medium">{product.size}</span>
                </p>
                <p className="text-sm">
                  Quantity: <span className="font-medium">{product.quantity}</span>
                </p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-gray-700 font-bold">MRP: ${product.price}</p>
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


