import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.css";

export default function Header() {
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

        {/* {loggedIn && (
          <Link to="/conta" className={styles.login}>
            {user}
          </Link>
        )}

        {!loggedIn && ( */}
        <Link href="/login" className={styles.login}>
          Login / Criar
        </Link>
        {/* )} */}
      </nav>
    </header>
  );
}
