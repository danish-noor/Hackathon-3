import Image from "next/image";

const images = [
  { id: 1, src: "/images/orange1.png", alt: "Orange Chair", large: true },
  { id: 2, src: "/images/white1.png", alt: "White Chair" },
  { id: 3, src: "/images/chair2.png", alt: "Grey Chair" },
  { id: 4, src: "/images/gray1.png", alt: "Grey Chair" },
  { id: 5, src: "/images/chair2.png", alt: "Grey Chair" },
];

export default function ChairGallery() {
  return (
    <div className="flex gap-3 w-screen flex-col sm:flex-row justify-center items-center">
      <div className=" sm:w-[45vw] w-screen">
        <Image src={"/images/orange1.png"} alt="j" height={800} width={800} />
      </div>

      <div className="flex w-screen sm:w-[45vw] gap-3">
        <div className="h-1/2 w-1/2 relative flex flex-col gap-3">
          <Image
            className=""
            src={"/images/orange1.png"}
            alt="j"
            height={400}
            width={400}
          />
          <Image
            className=""
            src={"/images/orange1.png"}
            alt="j"
            height={400}
            width={400}
          />
        </div>
        <div className="h-1/2 w-1/2 relative flex flex-col gap-3 ">
          <Image
            className=""
            src={"/images/orange1.png"}
            alt="j"
            height={400}
            width={400}
          />
          <Image
            className=""
            src={"/images/orange1.png"}
            alt="j"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
