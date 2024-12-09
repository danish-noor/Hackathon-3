import ChairGallery from "@/components/ChairGallery";
import FeaturedProducts from "@/components/Featuredproducts";
import Header1 from "@/components/Header1";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import TopCategories from "@/components/TopCategories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <TopCategories />
      <ChairGallery />
      <ProductGrid />
      
      <div>

      </div>
    </div>
  );
}
