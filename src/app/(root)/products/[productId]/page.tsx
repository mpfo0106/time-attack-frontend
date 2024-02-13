import API from "@/api/index.api";
import Page from "@/components/Page/main";
import { Product } from "@/types/Product.type";
import Image from "next/image";
import Link from "next/link";

async function ProductPage({
  params: { productId },
}: {
  params: { productId: number };
}) {
  const product: Product = await API.products.getProduct(productId);

  return (
    <Page>
      <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch"></main>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <div className="relative aspect-[3/4]">
          <Image
            alt={product.name}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-transform"
            src={product.imgSrc}
          />
        </div>
        <div className="py-8 flex flex-col">
          <Link
            href={`/brands/${product.brandId}`}
            className="text-[15px] border-b pb-2.5 mb-2.5  font-bold"
          >
            <h2>
              {product.brand.nameKr}
              {"/"}
              {product.brand.nameEn}
            </h2>
          </Link>
          <h1 className="text-lg">{product.name}</h1>
          <div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
            <div className="text-slate-900 font-bold">정가</div>
            <div className="col-span-4 line-through text-red-500">
              {`₩${product.originalPrice.toLocaleString("ko-KR")}`}
            </div>
            <div className="text-slate-900 font-bold">판매가</div>
            <div className="col-span-4 font-semibold">{`₩${product.price.toLocaleString(
              "ko-KR"
            )}`}</div>
            <div className="text-slate-900 font-bold">배송</div>
            <div className="col-span-4">{product.deliveryType}</div>
            <div className="text-slate-900 font-bold">잔여 재고</div>
            <div className="col-span-4">{product.onlineStock}</div>
          </div>
          <button
            className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white "
            data-color="black"
          >
            장바구니에 담기
          </button>
        </div>
      </section>
    </Page>
  );
}

export default ProductPage;
