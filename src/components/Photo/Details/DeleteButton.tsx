"use client";

import React from "react";

import { deletePhoto } from "@/actions/photo";

import styles from "../Photo.module.css";

export default function DeleteButton({ id }: { id: number }) {
  async function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (window.confirm("Tem certeza que deseja deletar?")) {
      await deletePhoto(id);
    }
  }
  return (
    <button className={styles.delete} onClick={handleDelete}>
      Deletar
    </button>
  );
}
