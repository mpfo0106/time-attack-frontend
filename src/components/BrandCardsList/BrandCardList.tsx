import { Brand } from "@/types/Brands.type";
import BrandCard from "../BrandCard";

// interface BrandCardsListProps {
//   brands: Array<ComponentProps<typeof BrandCard>["brand"]>;
// }

function BrandCardList(brands: Brand[]) {
  return (
    <nav className="mx-auto max-w-screen-lg mb-16">
      <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
        {brands.map((brand) => (
          <li
            key={brand.id}
            className="col-span-3 sm:col-span-4 md:col-span-6 mb-4"
          >
            <BrandCard brandId={brandId} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BrandCardList;
