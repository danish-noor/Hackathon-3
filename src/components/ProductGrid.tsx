export default function ProductGrid() {
    const products = [
      {
        id: 1,
        name: "Library Stool Chair",
        price: "$20",
        originalPrice: null,
        label: "New",
        image: "/images/chair2.png",
      },
      {
        id: 2,
        name: "Library Stool Chair",
        price: "$20",
        originalPrice: "$30",
        label: "Sales",
        image: "/images/pinkchair1.png",
      },
      {
        id: 3,
        name: "Library Stool Chair",
        price: "$20",
        originalPrice: null,
        label: null,
        image: "/images/orange1.png",
      },
      {
        id: 4,
        name: "Library Stool Chair",
        price: "$20",
        originalPrice: null,
        label: null,
        image: "/images/chair5.png",
      },
      {
        id: 5,
        name: "Library Stool Chair",
        price: "$20",
        originalPrice: null,
        label: "New",
        image: "/images/category1.png",
      },
      {
        id: 6,
        name: "Library Stool Chair",
        price: "$20",
        originalPrice: "$30",
        label: "Sales",
        image: "/images/gray1.png",
      },
      {
        id: 7,
        name: "Library Stool Chair",
        price: "$20",
        originalPrice: null,
        label: null,
        image: "/images/blackchair1.png",
      },
      {
        id: 8,
        name: "Library Stool Chair",
        price: "$20",
        originalPrice: null,
        label: null,
        image: "/images/chair2.png",
      },
    ];
  
    return (
        <div className="wrapper h-[800px] pl-[300px] pt-[14px] pr-[300px] flex justify-between ">
      <section className="px-16 py-24 bg-gray-900">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.label && (
                <span
                  className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded ${
                    product.label === "New" ? "bg-green-500" : "bg-orange-500"
                  }`}
                >
                  {product.label}
                </span>
              )}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-lg font-semibold text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm line-through text-gray-500">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button className="absolute bottom-2 right-2 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.879 2.633M7 13h10l3-8H6.621M7 13L5 9m2 4v7a1 1 0 001 1h8a1 1 0 001-1v-7m-9-4h4m-4 0H3m4 0l2.121 2.121M12 17v.01"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
      </div>
    );
  }
  