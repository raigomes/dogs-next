import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs Next",
  description:
    "Dogs - Rede social para cachorros feita com Next.js 14 e Typescript",
};

export const spectral_font = Spectral({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--spectral-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spectral_font.variable}`}>{children}</body>
    </html>
  );
}
