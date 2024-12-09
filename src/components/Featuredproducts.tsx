export default function FeaturedProducts() {
    const products = [
      {
        id: 1,
        image: "/images/chair2.png", 
        label: "New",
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: null,
      },
      {
        id: 2,
        image: "/images/chair2.png",
        label: "Sales",
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: "$39",
      },
      {
        id: 3,
        image: "/images/chair3.png", 
        label: null,
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: null,
      },
      {
        id: 4,
        image: "/images/chair4.png", 
        label: null,
        name: "Library Stool Chair",
        price: "$20",
        oldPrice: null,
      },
    ];
  
    return (
      <div className="wrapper h-[500px] pl-[300px] pt-[14px] pr-[300px]  flex justify-between ">
      <section className="px-12 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.label && (
                  <span
                    className={`absolute top-2 left-2 text-sm font-medium text-white py-1 px-2 rounded ${
                      product.label === "New" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  >
                    {product.label}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-gray-700 font-medium">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-800 font-bold">{product.price}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
                <button className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    );
  }
  