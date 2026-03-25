import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "../Conta.module.css";

export default function DesktopNav() {
  return (
    <nav className={styles.nav}>
      <Link href="/conta">
        <Image
          src="/assets/dashboard.svg"
          alt="Dashboard"
          width={24}
          height={24}
        />
      </Link>
      <Link href="/conta/estatisticas">
        <Image
          src="/assets/estatisticas.svg"
          alt="Estatísticas"
          width={24}
          height={24}
        />
      </Link>
      <Link href="/conta/postar">
        <Image
          src="/assets/adicionar.svg"
          alt="Adicionar Foto"
          width={24}
          height={24}
        />
      </Link>
      <button>
        <Image src="/assets/sair.svg" alt="Sair" width={24} height={24} />
      </button>
    </nav>
  );
}
