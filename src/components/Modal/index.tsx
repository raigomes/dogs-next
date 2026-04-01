"use client";

import React from "react";
import { useRouter } from "next/navigation";

import style from "./Modal.module.css";

export default function Modal({ children }: React.PropsWithChildren) {
  const router = useRouter();

  function handleClose(e: React.MouseEvent<HTMLElement>) {
    if (
      e.target instanceof HTMLElement &&
      e.target.classList.contains(style.modal)
    ) {
      router.back();
    }
  }

  return (
    <div className={style.modal} onClick={handleClose}>
      {children}
    </div>
  );
}
