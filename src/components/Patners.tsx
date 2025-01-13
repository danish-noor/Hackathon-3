import Image from "next/image";
import React from "react";

const Patners: React.FC = () => {
  return (
    <div className="w-full py-4 sm:px-6 md:px-8 lg:px-16 flex flex-col sm:flex-col-1 md:flex-cols-2 lg:flex-row">
      {/* Brand Section */}
      <div className="w-full flex justify-center lg:justify-between items-center mx-auto gap-6 sm:mx-6">
        <div>
        <Image
          src="/Images/zap.png"
          alt="Zap Logo"
          width={85}
          height={87}
          className="w-[70px] lg:w-[85px] h-auto"
        />
        </div>
        <div>
        <Image
          src="/Images/pipe.png"
          alt="Pipe Logo"
          width={107}
          height={109}
          className="w-[90px] lg:w-[107px] h-auto"
        />
        </div>
        <div>
        <Image
          src="/Images/cib.png"
          alt="Cib Logo"
          width={135}
          height={139}
          className="w-[110px] lg:w-[135px] h-auto"
        /></div>
        <div>
        <Image
          src="/Images/z.png"
          alt="Z Logo"
          width={63}
          height={65}
          className="w-[50px] lg:w-[63px] h-auto"
        /></div>
        <div>
        <Image
          src="/Images/burnt.png"
          alt="Burnt Logo"
          width={98}
          height={101}
          className="w-[80px] lg:w-[98px] h-auto"
        /></div>
        <div>
        <Image
          src="/Images/panda.png"
          alt="Panda Logo"
          width={113}
          height={115}
          className="w-[90px] lg:w-[113px] h-auto"
        /></div>
        <div>
        <Image
          src="/Images/moz.png"
          alt="Moz Logo"
          width={84}
          height={87}
          className="w-[70px] lg:w-[84px] h-auto"
        /></div>
      </div>
    </div>
  );
};

export default Patners;
