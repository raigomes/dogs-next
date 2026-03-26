import React from "react";
import type { Metadata } from "next";

import { Conta } from "@/components/Conta";

export const metadata: Metadata = {
  title: "Poste sua foto | Dogs",
};

export default function PhotoPostPage() {
  return <Conta.PhotoForm />;
}
