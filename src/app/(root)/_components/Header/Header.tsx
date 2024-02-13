import Link from "next/link";
import HeaderMenus from "./components/HeaderMenus";
import HeaderNav from "./components/HeaderNav";

function Header() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-5 lg:px-8 z-10 shrink-0">
      <Link href="/" className="font-bold text-2xl">
        발랑
      </Link>
      <HeaderNav />

      <HeaderMenus />
    </header>
  );
}

export default Header;
