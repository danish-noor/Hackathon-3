import Cards from "@/components/Cards";
import ChairGallery from "@/components/ChairGallery";
import FeaturedProducts from "@/components/Featuredproducts";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import TopCategories from "@/components/TopCategories";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <TopCategories />
      <ChairGallery />
      <ProductGrid />
    </div>
  );
}
