import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";

import { getUser } from "@/actions/user";
import { IPhoto } from "@/types/global";

import styles from "../Photo.module.css";
import DeleteButton from "./DeleteButton";

export default async function Details({ data }: { data: IPhoto }) {
  const token = cookies().get("token")?.value ?? "";
  const { nome } = await getUser(token);
  const isUserPhoto = data.author === nome;

  return (
    <div className={styles.details}>
      <p className={styles.author}>
        {!isUserPhoto && (
          <Link href={`/perfil/${data.author}`}>@{data.author}</Link>
        )}
        {isUserPhoto && <DeleteButton id={data.id} />}
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
