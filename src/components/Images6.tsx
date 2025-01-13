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
    <div className="wrapper w-[1324px] h-[319px] my-[100px] flex flex-col justify-between ">
      <h2 className="w-[1324px] h-[59px] text-[50px] leading-[58.59px] font-Roboto text-center  ">Follow products and discounts on Instagram</h2>
      <div className="w-[1324px] h-full flex justify-between items-end">
      <div className="grid grid-cols-6 gap-6">
        {images.map((image) => (
          <div>
            <img
              src={image.src}
              alt={image.alt}
              className="w-[200px] h-[200px] marker: object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)};