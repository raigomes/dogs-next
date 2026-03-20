import React from "react";
import Loading from "@/components/Loading";

export default function FeedLoading({
  hasMore,
  inView,
}: {
  hasMore: boolean;
  inView: boolean;
}) {
  if (!inView) return null;
  if (hasMore) return <Loading />;
  return <p>Não existe mais postagens</p>;
}
