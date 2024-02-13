import API from "@/api/index.api";
import BrandCardsList from "@/components/BrandCardsList";
import BrandPageComponent from "@/components/Page/brand/page";
import Link from "next/link";

async function BrandPage() {
  const brands = await API.brands.getBrands(); //brand들의 배열
  return (
    <BrandPageComponent>
      <Link
        href="/brands"
        className="text-slate-700 data-[active=true]:text-black data-[active=true]:font-semibold hover:text-black transition-all"
      >
        ALL
      </Link>
      <BrandCardsList brands={brands} />;
    </BrandPageComponent>
  );
}
export default BrandPage;
