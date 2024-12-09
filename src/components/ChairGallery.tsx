export default function ChairGallery() {
    const images = [
      { id: 1, src: "/images/orange1.png", alt: "Orange Chair", large: true },
      { id: 2, src: "/images/white1.png", alt: "White Chair" },
      { id: 3, src: "/images/gray1.png", alt: "Grey Chair" },
      
    ];
  
    return (
      <div className=" h-[900px] pl-[300px] pt-[14px] pr-[300px] flex justify-between ">
      <section className="">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Chair Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className={`${
                image.large
                  ? "col-span-2 row-span-2"
                  : "col-span-1"
              } relative overflow-hidden rounded-lg shadow-lg`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      </div>
    );
  }
  