"use client";

import API from "@/api/index.api";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../Modal";

function LogInModal() {
  const dispatch = useAppDispatch();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const { mutateAsync } = useMutation({ mutationFn: API.auth.logIn });
  const { logIn } = useAuth();

  const handleClickLogIn = async () => {
    const { accessToken } = await mutateAsync({ email: id, password: pw });
    logIn(accessToken);

    const action = setModal(null);
    dispatch(action);
  };

  return (
    <Modal title="로그인">
      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
        <div className="grid gap-y-1.5 w-full">
          <label className="text-sm font-medium text-gray-800">이메일</label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
            type="email"
          />
        </div>
        <div className="grid gap-y-1.5 w-full">
          <label className="text-sm font-medium text-gray-800">비밀번호</label>
          <input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
            type="password"
          />
        </div>
        <div className="mt-2"></div>

        <button
          className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
          data-color="black"
          onClick={handleClickLogIn}
        >
          로그인하기
        </button>
      </section>
    </Modal>
  );
}

export default LogInModal;
