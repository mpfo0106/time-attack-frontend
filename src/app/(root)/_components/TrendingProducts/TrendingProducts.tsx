import API from "@/api/index.api";
import ProductCardsList from "@/components/ProductCardsList";

async function TrendingProducts() {
  const products = await API.products.getProducts();
  return <ProductCardsList products={products || []} />;
}

export default TrendingProducts;
