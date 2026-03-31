import React from "react";
import { notFound } from "next/navigation";

import { Photo } from "@/components/Photo";
import { getPhotoById } from "@/actions/photo";

interface PhotoProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PhotoProps) {
  const { photo } = (await getPhotoById(params.id)) ?? {};

  if (!photo) return notFound();

  return {
    title: photo.title,
    description: photo.title + " | Dogs",
  };
}
export default async function PhotoPage({ params }: PhotoProps) {
  return (
    <section className="container mainContainer">
      <Photo.PageContent id={params.id} single={true} />
    </section>
  );
}
