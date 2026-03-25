"use client";

import React from "react";

import { usePathname } from "next/navigation";

export default function Title() {
  const [title, setTitle] = React.useState<string | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Poste Sua Foto");
        break;
      default:
        setTitle("Minha Conta");
        break;
    }
  }, [pathname]);

  return <h1 className="title">{title}</h1>;
}
