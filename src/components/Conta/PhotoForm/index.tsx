"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/Button";
import { postPhoto } from "@/actions/photo";

import styles from "../Conta.module.css";

const SignupButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Enviando..." : "Enviar"}
    </Button>
  );
};

export default function PhotoForm() {
  const [img, setImg] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [state, formAction] = useFormState(postPhoto, {
    data: null,
    ok: false,
    error: "",
  });
  function handleChangeFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.item(0);
    if (file) {
      setPreview(URL.createObjectURL(file));
      setImg(file);
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={formAction}>
        <div className={styles.wrapper}>
          <label htmlFor="nome" className={styles.label}>
            Nome
          </label>
          <input type="text" id="nome" name="nome" className={styles.input} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="peso" className={styles.label}>
            Peso
          </label>
          <input type="text" id="peso" name="peso" className={styles.input} />
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="idade" className={styles.label}>
            Idade
          </label>
          <input type="text" id="idade" name="idade" className={styles.input} />
        </div>
        <input
          type="file"
          id="img"
          name="img"
          className={styles.file}
          onChange={handleChangeFile}
        />

        {state.error && (
          <p style={{ color: "rgb(255, 51, 17)", margin: "1rem 0px" }}>
            {state.error}
          </p>
        )}

        <SignupButton />
      </form>
      <div>
        {img && (
          <div
            className={styles.preview}
            style={{
              backgroundImage: `url(${preview})`,
            }}
          ></div>
        )}
      </div>
    </section>
  );
}
