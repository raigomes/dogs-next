import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

import LoginForm from "@/components/LoginForm";
import Button from "@/components/Button";

import styles from "./Login.module.css";

export const metadata: Metadata = {
  title: "Login | Dogs",
};

export default function LoginPage() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <section className="animeLeft">
          <h1 className="title">Login</h1>

          <LoginForm className={styles.form} />

          <Link href="/login/perdeu" className={styles.perdeu}>
            Perdeu a Senha?
          </Link>
          <div className={styles.cadastro}>
            <h2 className={styles.subtitle}>Cadastre-se</h2>
            <p>Ainda não possui conta? Cadastre-se no site.</p>
            <Link href="/login/criar">
              <Button>Cadastro</Button>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
