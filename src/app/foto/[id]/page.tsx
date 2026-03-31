import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Photo } from "@/components/Photo";
import { getPhotoById } from "@/actions/photo";

interface PhotoProps {
  params: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: "Foto | Dogs",
};

export default async function PhotoPage({ params }: PhotoProps) {
  const { photo, comments = [] } = (await getPhotoById(params.id)) ?? {};

  if (!photo) return notFound();

  return (
    <section className="container mainContainer">
      <Photo.Root id={params.id}>
        <Photo.Image {...photo} />
        <Photo.Details data={photo} />
        <Photo.Comments comments={comments} id={params.id} />
      </Photo.Root>
    </section>
  );
}
