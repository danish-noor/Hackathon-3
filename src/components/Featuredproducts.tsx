import Cards from "./Cards";
import Heading from "./Heading";


export default function FeaturedProducts() {
  return (
    <>
    
    <h2 className=" wrapper flex justify-between px-[300px] pt-[100px] text-2xl font-semibold text-gray-800 mb-6">Featured Products</h2>
    <main className="wrapper w-[1920px] h-[461px] px-[300px] mt-[30px] flex justify-between ">
    <Cards />
    </main>
    </>
  );
}
