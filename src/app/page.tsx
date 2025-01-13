import ChairGallery from "@/components/ChairGallery";
import FeaturedProducts from "@/components/Featuredproducts";
import Hero from "@/components/Hero";
import Patners from "@/components/Patners";
import ProductGrid from "@/components/ProductGrid";
import TopCategories from "@/components/TopCategories";


export default function Home() {
  return (
    <div>
      <Hero />
      <Patners />
      <FeaturedProducts />
      <TopCategories />
      <ChairGallery />
      <ProductGrid />
    </div>
  );
}
