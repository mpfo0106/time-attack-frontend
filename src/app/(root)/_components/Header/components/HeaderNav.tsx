import Link from "next/link";

function HeaderNav() {
  return (
    <nav className="ml-20">
      <Link href="/brands" className="text-[15px] font-medium">
        BRANDS
      </Link>
    </nav>
  );
}

export default HeaderNav;
