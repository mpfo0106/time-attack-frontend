import { Brand } from "@/types/Brands.type";
import Image from "next/image";
import Link from "next/link";

interface BrandCardProps {
  brands: Brand;
}

function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link href={`/brands/${brand.id}`} className="relative flex flex-col group">
      <div className="aspect-[3/4] relative mb-4">
        <Image
          alt={brand.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform"
          src={brand.imgSrc}
        />
      </div>

      <div className="grid gap-y-2">
        <div className="text-sm font-bold">{brand.brand.nameEn}</div>
        <h6 className="text-[15px]">{brand.name}</h6>
        <div className="text-sm flex items-baseline gap-x-1.5">
          <span className="text-red-500 line-through font-semibold">
            {brand.originalPrice.toLocaleString("ko-KR")}
          </span>
          <span className="font-bold">
            {brand.price.toLocaleString("ko-KR")}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BrandCard;
