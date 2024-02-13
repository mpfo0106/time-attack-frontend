import { ComponentProps } from "react";
import BrandCard from "../BrandCard";

interface BrandCardsListProps {
  brands: Array<ComponentProps<typeof BrandCard>["brands"]>;
}

function BrandCardList({ brands }: BrandCardsListProps) {
  return (
    <nav className="mx-auto max-w-screen-lg mb-16">
      <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
        {brands.map((brand) => (
          <li key={brand.id}>
            <BrandCard brand={brand} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BrandCardList;
