import React from "react";
import type { Metadata } from "next";

import LoginForm from "@/components/LoginForm";
import Input from "@/components/Input";
import { resetPassword } from "@/actions/password";

import styles from "../Login.module.css";

const labelBtn = {
  labelText: "Resetar Senha",
  labelLoading: "Resetando...",
};

export const metadata: Metadata = {
  title: "Resetar a senha | Dogs",
};

export default async function PasswordResetPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { login, key } = await searchParams;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <section className="animeLeft">
          <h1 className="title">Resete a Senha</h1>

          <LoginForm
            className={styles.form}
            labelText={labelBtn.labelText}
            labelLoading={labelBtn.labelLoading}
            serverAction={resetPassword}
          >
            <Input label="Nova Senha" type="password" name="password" />
            <Input type="hidden" name="login" value={login} />
            <Input type="hidden" name="key" value={key} />
          </LoginForm>
        </section>
      </div>
    </section>
  );
}
