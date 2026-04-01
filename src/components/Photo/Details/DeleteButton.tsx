"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { deletePhoto } from "@/actions/photo";

import styles from "../Photo.module.css";

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter();
  async function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (!window.confirm("Tem certeza que deseja deletar?")) return;

    const result = await deletePhoto(id);

    if (result.ok) router.back();
  }
  return (
    <button type="button" className={styles.delete} onClick={handleDelete}>
      Deletar
    </button>
  );
}
