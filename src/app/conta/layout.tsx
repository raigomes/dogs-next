import React from "react";
import { Conta } from "@/components/Conta";

export default async function ContaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Conta.Root>
      <Conta.Header>
        <Conta.Title />
        <Conta.Navigation />
      </Conta.Header>
      {children}
    </Conta.Root>
  );
}
