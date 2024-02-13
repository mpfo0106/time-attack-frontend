"use client";

import { useAuth } from "@/contexts/auth.context";

import Link from "next/link";

function HeaderMenus() {
  const { isLoggedIn, logOut } = useAuth();

  const handleClickLogOut = () => {
    logOut();
  };

  return (
    <div className="ml-auto flex items-center gap-x-4">
      {isLoggedIn ? (
        <button className="" onClick={handleClickLogOut}>
          로그아웃
        </button>
      ) : (
        <>
          <Link
            href="/sign-up"
            className="text-[15px] font-medium text-gray-800 hover:text-black transition "
          >
            회원가입
          </Link>

          <button className="text-[15px] font-medium text-gray-800 hover:text-black transition">
            <Link href="/sign-up">로그인</Link>
          </button>
        </>
      )}
      <br />
    </div>
  );
}

export default HeaderMenus;
