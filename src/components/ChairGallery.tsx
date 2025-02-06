import Image from "next/image";

export default function ChairGallery() {
  return (
    <div className="w-full my-8 sm:px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row justify-center items-center gap-3 rounded-md">
      <div className=" sm:w-[45vw] w-screen">
        <Image src={"/images/orange1.png"} alt="orange chair1" height={800} width={800} />
      </div>

      <div className="flex w-screen sm:w-[45vw] gap-3">
        <div className="h-1/2 w-1/2 relative flex flex-col gap-3">
          <Image
            className=""
            src={"/images/white1.png"}
            alt="orange chair2"
            height={400}
            width={400}
          />
          <Image
            className=""
            src={"/images/chair2.png"}
            alt="orange chair3"
            height={400}
            width={400}
          />
        </div>
        <div className="h-1/2 w-1/2 relative flex flex-col gap-3 ">
          <Image
            className=""
            src={"/images/gray1.png"}
            alt="orange chair4"
            height={400}
            width={400}
          />
          <Image
            className=""
            src={"/images/category2.png"}
            alt="orange chair5"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
