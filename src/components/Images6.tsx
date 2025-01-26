export default function Images6() {
  const images = [
    { id: 1, src: "/images/category2.png", alt: "stool" },
    { id: 2, src: "/images/category1.png", alt: "Chair" },
    { id: 3, src: "/images/pinkchair1.png", alt: "Chair" },
    { id: 4, src: "/images/chair2.png", alt: "Chair" },
    { id: 5, src: "/images/orange1.png", alt: "Chair" },
    { id: 6, src: "/images/category3.png", alt: "Chair" },
  ];

  return (
    <div className="w-full my-10 px-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-Roboto text-center mb-8">
        Follow products and discounts on Instagram
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {images.map((image) => (
          <div key={image.id} className="flex justify-center items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full max-w-[150px] h-[150px] object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
