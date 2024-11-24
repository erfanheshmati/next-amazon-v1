import ProductList from "@/components/shared/product/product-list";
import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product-actions";
import ProductCarousel from "@/components/shared/product/product-carousel";

export default async function Home() {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <div className="space-y-4 mt-10 sm:mt-12">
        <ProductList data={latestProducts} title="Newest Arrivals" />
      </div>
    </div>
  );
}
