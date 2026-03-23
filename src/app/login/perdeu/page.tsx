import React from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";

import LoginForm from "@/components/LoginForm";
import Input from "@/components/Input";
import { lostPassword } from "@/actions/password";

import styles from "../Login.module.css";

const labelBtn = {
  labelText: "Enviar Email",
  labelLoading: "Enviando...",
};

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
};

export default function PasswordLostPage() {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const origin = `${protocol}://${host}`;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <section className="animeLeft">
          <h1 className="title">Perdeu a senha?</h1>

          <LoginForm
            className={styles.form}
            labelText={labelBtn.labelText}
            labelLoading={labelBtn.labelLoading}
            serverAction={lostPassword}
          >
            <Input label="Email / Usuário" type="text" name="login" />
            <Input type="hidden" name="url" value={`${origin}/login/resetar`} />
          </LoginForm>
        </section>
      </div>
    </section>
  );
}
