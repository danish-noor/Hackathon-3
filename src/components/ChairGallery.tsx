import Image from "next/image";

export default function ChairGallery() {
  return (
    <div className="w-full my-8 sm:px-6 md:px-12 lg:px-16 flex flex-col sm:flex-row justify-center items-center gap-3 rounded-md">
      <div className=" sm:w-[45vw] w-screen">
        <Image 
        src="/Images/orange1.png"
        alt="orange-chair" 
        height={800} 
        width={800} 
        className="w-full h-full"
        />
      </div>

      <div className="flex w-screen sm:w-[45vw] gap-3">
        <div className="h-1/2 w-1/2 relative flex flex-col gap-3">
          <Image
            src="/Images/white1.png"
            alt="white-chair"
            height={400}
            width={400}
            className="w-full h-full"
          />
          <Image
            src="/Images/chair2.png"
            alt="chair-2"
            height={400}
            width={400}
            className="w-full h-full"
          />
        </div>
        <div className="h-1/2 w-1/2 relative flex flex-col gap-3 ">
          <Image
            src="/Images/gray1.png"
            alt="chair-gray"
            height={400}
            width={400}
            className="w-full h-full"
          />
          <Image
            src="/Images/category2.png"
            alt="stool-chair"
            height={400}
            width={400}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
