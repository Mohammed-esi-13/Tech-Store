import BuilderBanner from "./sections/BuilderBanner";
import BrandsSection from "./sections/BrandsSection";
import BundlesSection from "./sections/BundlesSection";
import CategorySection from "./sections/CategorySection";
import FlashDealsSection from "./sections/FlashDealsSection";
import TrustBar from "./sections/TrustBar";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategorySection />
      <BrandsSection />
      <FlashDealsSection />
      <BuilderBanner />
      <BundlesSection />
      <TrustBar />
    </main>
  );
}
