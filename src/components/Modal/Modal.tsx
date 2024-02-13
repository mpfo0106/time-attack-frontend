"use client";

import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { PropsWithChildren } from "react";

interface ModalProps {
  title: string;
}

function Modal({ title, children }: PropsWithChildren<ModalProps>) {
  const dispatch = useAppDispatch();

  const handleClickBackdrop = () => {
    const action = setModal(null);
    dispatch(action);
  };

  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
      onClick={handleClickBackdrop}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-md w-full max-w-[400px] px-5 py-8"
      >
        <h2 className="font-bold text-3xl text-center my-12">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
