import type { Metadata } from "next";
import { spectral_font } from "./fonts";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs Next",
  description:
    "Dogs - Rede social para cachorros feita com Next.js 14 e Typescript",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spectral_font.variable}`}>
        <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          <div>{modal}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
