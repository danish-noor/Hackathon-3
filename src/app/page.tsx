import ChairGallery from "../components/ChairGallery";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
// import TopCategories from "../components/TopCategories";


export default function Home() {
  return (
    <div  className="max-w-screen-xl mx-auto px-4">
      <Hero />
      <ChairGallery />
      <ProductGrid />
    </div>
  );
}
