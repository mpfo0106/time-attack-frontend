"use client";

import LogInModal from "@/components/LogInModal";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";

import Link from "next/link";

function HeaderMenus() {
  const dispatch = useAppDispatch();
  const { isLoggedIn, logOut } = useAuth();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

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

          <button
            className="text-[15px] font-medium text-gray-800 hover:text-black transition"
            onClick={handleClickLogIn}
          >
            로그인
          </button>
        </>
      )}
      <br />
    </div>
  );
}

export default HeaderMenus;
