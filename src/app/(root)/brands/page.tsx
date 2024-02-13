import API from "@/api/index.api";
import BrandCardsList from "@/components/BrandCardsList";
import BrandPageComponent from "@/components/Page/brand/page";

async function BrandPage() {
  const brands = await API.brands.getBrands();
  return (
    <BrandPageComponent>
      <BrandCardsList brands={brands || []} />;
    </BrandPageComponent>
  );
}
export default BrandPage;
