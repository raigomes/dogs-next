import React from "react";

import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";

import { getUser } from "@/actions/user";

import styles from "./Header.module.css";
import { validateToken } from "@/actions/auth";

export default async function Header() {
  const token = cookies().get("token")?.value ?? "";
  const loggedIn = token ? await validateToken(token) : false;
  const user = loggedIn ? await getUser(token) : null;

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.logo}>
          <Image
            src={"/assets/dog.svg"}
            alt="Dogs Logo"
            width={28}
            height={22}
            priority={true}
          />
        </Link>

        {user && (
          <Link href="/conta" className={styles.login}>
            {user.username}
          </Link>
        )}

        {!user && (
          <Link href="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
