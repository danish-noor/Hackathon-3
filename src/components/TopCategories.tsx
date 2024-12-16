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
      <main className=" wrapper w-[2216px] h-[508px] px-[-148px] my-[166px] flex justify-between ">
      <section className="w-[1920px] h-[44px] px-[300px] ">
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
                className="w-[424px] h-[424px] pt-[40px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <p className="text-sm">{category.products}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>
    );
  }
  