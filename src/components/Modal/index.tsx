"use client";

import React from "react";
import { useRouter } from "next/navigation";

import style from "./Modal.module.css";

export default function Modal({ children }: React.PropsWithChildren) {
  const router = useRouter();

  return (
    <div className={style.modal} onClick={() => router.back()}>
      {children}
    </div>
  );
}
