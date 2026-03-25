"use client";

import React from "react";

import Link from "next/link";

import AdicionarSVG from "/public/assets/adicionar.svg";
import EstatisticasSVG from "/public/assets/estatisticas.svg";
import DashboardSVG from "/public/assets/dashboard.svg";
import SairSVG from "/public/assets/sair.svg";

import styles from "../Conta.module.css";

export default function MobileNav() {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <button
        aria-label="Menu"
        className={`${styles.mobileButton} ${active ? styles.mobileButtonActive : false}`}
        onClick={() => setActive(!active)}
      ></button>

      <nav
        className={`${styles.navMobile} ${active ? styles.navMobileActive : false}`}
      >
        <Link href="/conta">
          <DashboardSVG />
          Minhas Fotos
        </Link>
        <Link href="/conta/estatisticas">
          <EstatisticasSVG />
          Estatísticas
        </Link>
        <Link href="/conta/postar">
          <AdicionarSVG />
          Adicionar Foto
        </Link>
        <button>
          <SairSVG />
          Sair
        </button>
      </nav>
    </>
  );
}
