"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/actions/auth";

import AdicionarSVG from "/public/assets/adicionar.svg";
import EstatisticasSVG from "/public/assets/estatisticas.svg";
import DashboardSVG from "/public/assets/dashboard.svg";
import SairSVG from "/public/assets/sair.svg";

import styles from "../Conta.module.css";

export default function DesktopNav() {
  const [active, setActive] = React.useState<string>("Conta");
  const pathname = usePathname();

  React.useEffect(() => {
    switch (pathname) {
      case "/conta/estatisticas":
        setActive("Estatisticas");
        break;
      case "/conta/postar":
        setActive("Postar");
        break;
      default:
        setActive("Conta");
        break;
    }
  }, [pathname]);

  async function sair() {
    await logout();
  }

  return (
    <nav className={styles.nav}>
      <Link href="/conta" className={active === "Conta" ? "active" : ""}>
        <DashboardSVG />
      </Link>
      <Link
        href="/conta/estatisticas"
        className={active === "Estatisticas" ? "active" : ""}
      >
        <EstatisticasSVG />
      </Link>
      <Link
        href="/conta/postar"
        className={active === "Postar" ? "active" : ""}
      >
        <AdicionarSVG />
      </Link>
      <button onClick={sair}>
        <SairSVG />
      </button>
    </nav>
  );
}
