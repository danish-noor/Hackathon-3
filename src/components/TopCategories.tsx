export default function TopCategories() {
    const categories = [
      {
        id: 1,
        image: "/images/Category1.png", 
        title: "Wing Chair",
        products: "3,584 Products",
      },
      {
        id: 2,
        image: "/Images/category2.png", 
        title: "Wooden Chair",
        products: "157 Products",
      },
      {
        id: 3,
        image: "/Images/category3.png", 
        title: "Desk Chair",
        products: "154 Products",
      },
    ];
  
    return (
      <div className="wrapper h-[400px] pl-[300px] pt-[14px] pr-[300px] flex justify-between ">
      <section className=" px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-sm">{category.products}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
    );
  }
  