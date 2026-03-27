import React from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";

import { getStats } from "@/actions/stats";

const Statistics = React.lazy(() => import("@/components/Conta/Statistics"));

export const metadata: Metadata = {
  title: "Estatísticas | Dogs",
};

export default async function StatisticsPage() {
  const token = cookies().get("token")?.value ?? "";
  const data = await getStats(token);

  if (!data) return null;

  return (
    <React.Suspense fallback={<div>Carregando...</div>}>
      <Statistics data={data} />
    </React.Suspense>
  );
}
