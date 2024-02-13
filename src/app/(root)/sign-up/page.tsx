"use client";

import API from "@/api/index.api";
import MainPage from "@/components/Page/main/page";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";

function SignUpPage() {
  const { mutateAsync } = useMutation({ mutationFn: API.auth.signUp });
  const idInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pw2InputRef = useRef<HTMLInputElement>(null);
  const { logIn } = useAuth();

  const handleClickSignUp = async () => {
    const idValue = idInputRef.current?.value;
    const pwValue = pwInputRef.current?.value;
    const pw2Value = pw2InputRef.current?.value;

    if (!idValue) return alert("이메일을 입력해주세요");
    if (!pwValue) return alert("비밀번호를 입력해주세요");
    if (!pw2Value) return alert("비밀번호 확인을 입력해주세요");
    if (pwValue !== pw2Value)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않아요");

    const { accessToken } = await mutateAsync({ id: idValue, pw: pwValue });
    logIn(accessToken);
  };

  return (
    <MainPage>
      <main className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
        <h2 className="font-bold text-3xl text-center my-12">회원가입</h2>
        <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
          <div className="grid gap-y-1.5 w-full">
            <label className="text-sm font-medium text-gray-800">이메일</label>
            <input
              className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
              type="email"
              ref={idInputRef}
            />
          </div>
          <div className="grid gap-y-1.5 w-full">
            <label className="text-sm font-medium text-gray-800">
              비밀번호
            </label>
            <input
              type="password"
              className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
              ref={pwInputRef}
            />
          </div>
          <div className="grid gap-y-1.5 w-full">
            <label className="text-sm font-medium text-gray-800">
              비밀번호 확인
            </label>
            <input
              type="password"
              className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
              ref={pw2InputRef}
            />
          </div>
          <div className="mt-2">
            <button
              className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
              data-color="black"
              onClick={handleClickSignUp}
            >
              회원가입하기
            </button>
          </div>
        </section>
      </main>
    </MainPage>
  );
}

export default SignUpPage;
