import React from "react";
import type { Metadata } from "next";

import LoginForm from "@/components/LoginForm";
import Input from "@/components/Input";
import { createUser } from "@/actions/user";

import styles from "../Login.module.css";

const labelBtn = {
  labelText: "Cadastrar",
  labelLoading: "Cadastrando...",
};

export const metadata: Metadata = {
  title: "Crie sua conta | Dogs",
};

export default function SignupPage() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <section className="animeLeft">
          <h1 className="title">Cadastre-se</h1>
          <LoginForm
            className={styles.form}
            labelText={labelBtn.labelText}
            labelLoading={labelBtn.labelLoading}
            serverAction={createUser}
          >
            <Input label="Usuário" type="text" name="username" />
            <Input label="Email" type="text" name="email" />
            <Input label="Senha" type="password" name="password" />
          </LoginForm>
        </section>
      </div>
    </section>
  );
}
