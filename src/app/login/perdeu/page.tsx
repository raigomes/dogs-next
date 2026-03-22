import React from "react";
import type { Metadata } from "next";

import LoginForm from "@/components/LoginForm";
import Input from "@/components/Input";
import { resetPassword } from "@/actions/password";

import styles from "../Login.module.css";

const labelBtn = {
  labelText: "Enviar Email",
  labelLoading: "Enviando...",
};

export const metadata: Metadata = {
  title: "Perdeu a senha | Dogs",
};

export default function PasswordLostPage() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <section className="animeLeft">
          <h1 className="title">Perdeu a senha?</h1>

          <LoginForm
            className={styles.form}
            labelText={labelBtn.labelText}
            labelLoading={labelBtn.labelLoading}
            serverAction={resetPassword}
          >
            <Input label="Email / Usuário" type="text" name="login" />
            <Input type="hidden" name="url" value="/login/resetar" />
          </LoginForm>
        </section>
      </div>
    </section>
  );
}
