export default function ChairGallery() {
    const images = [
      { id: 1, src: "/images/orange1.png", alt: "Orange Chair", large: true },
      { id: 2, src: "/images/white1.png", alt: "White Chair" },
      { id: 3, src: "/images/chair2.png", alt: "Grey Chair" },
      { id: 4, src: "/images/gray1.png", alt: "Grey Chair" },
      { id: 5, src: "/images/chair2.png", alt: "Grey Chair" },
      
    ];
  
    return (
      <main className="wrapper w-[1320] h-[652px] pl-[323px] pt-[px] pr-[px] flex justify-between items-center ">
      <section className="">
        <div className="grid grid-cols-4 gap-4">
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
                className="w-648 h-[648] marker: object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      </main>
    );
  }
  