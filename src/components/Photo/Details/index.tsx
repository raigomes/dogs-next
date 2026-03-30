import React from "react";
import Link from "next/link";

import { IPhoto } from "@/types/global";
import styles from "../Photo.module.css";

export default function Details({ data }: { data: IPhoto }) {
  return (
    <div className={styles.details}>
      <p className={styles.author}>
        {/* {!isUserPhoto && ( */}
        <Link href={`/perfil/${data.author}`}>@{data.author}</Link>
        {/* )}
        {isUserPhoto && (
          <button className={styles.delete} onClick={handleDelete}>
            Deletar
          </button>
        )} */}
        <span className={styles.visualizacoes}>{data.acessos}</span>
      </p>
      <h1 className="title">
        <Link href={`/foto/${data.id}`}>{data.title}</Link>
      </h1>
      <ul className={styles.attributes}>
        <li>{data.peso} kg</li>
        <li>{data.idade} anos</li>
      </ul>
    </div>
  );
}
