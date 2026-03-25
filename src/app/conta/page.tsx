import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";

import Feed from "@/components/Feed";
import { getUser } from "@/actions/user";
import { getPhotos } from "@/actions/photo";

export const metadata: Metadata = {
  title: "Minha Conta | Dogs",
};

export default async function AccountPage() {
  const token = cookies().get("token")?.value ?? "";
  const { id } = await getUser(token);
  const photos = await getPhotos({ total: 6, user: id, page: 1 });

  if (!photos || photos.length === 0)
    return (
      <div>
        <p style={{ color: "#444", fontSize: "1.25rem", marginBottom: "1rem" }}>
          Nenhuma foto encontrada.
        </p>
        <Link
          className="button"
          style={{ display: "inline-block" }}
          href="/conta/postar"
        >
          Postar Foto
        </Link>
      </div>
    );

  return <Feed initialPhotos={photos} user={id} />;
}
