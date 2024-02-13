import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  // product: Product;
  product: {
    id: number;
    name: string;
    imgSrc: string;
    onlineStock: number;
    price: number;
    originalPrice: number;
    deliveryType: string;
    brandId: number;
    brand: {
      id: number;
      nameKr: string;
      nameEn: string;
    };
  };
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="relative flex flex-col group"
    >
      <div className="aspect-[3/4] relative mb-4">
        <Image
          alt={product.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-105 transition-transform"
          src={product.imgSrc}
        />
      </div>

      <div className="grid gap-y-2">
        <div className="text-sm font-bold">{product.brand.nameEn}</div>
        <h6 className="text-[15px]">{product.name}</h6>
        <div className="text-sm flex items-baseline gap-x-1.5">
          <span className="text-red-500 line-through font-semibold">
            {product.originalPrice}
          </span>
          <span className="font-bold">{product.price}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
