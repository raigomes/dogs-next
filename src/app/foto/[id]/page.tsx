import React from "react";
import Link from "next/link";

import { Photo } from "@/components/Photo";
import { getPhotoById } from "@/actions/photo";

interface PhotoProps {
  params: {
    id: string;
  };
}

export default async function PhotoPage({ params }: PhotoProps) {
  const { photo, comments = [] } = (await getPhotoById(params.id)) ?? {};

  if (!photo) {
    return (
      <section className="container mainContainer">
        <h1 className="title">Página não encontrada</h1>
        <Link
          href="/"
          className="button"
          style={{ marginBottom: "1rem", display: "inline-block" }}
        >
          Voltar para a Home
        </Link>
      </section>
    );
  }

  return (
    <section className="container mainContainer">
      <Photo.Root id={params.id}>
        <Photo.Image {...photo} />
        <Photo.Details data={photo} />
        <Photo.Comments comments={comments} />
      </Photo.Root>
    </section>
  );
}
