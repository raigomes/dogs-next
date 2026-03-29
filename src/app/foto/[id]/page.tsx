import React from "react";
import { Photo } from "@/components/Photo";

interface PhotoProps {
  params: {
    id: string;
  };
}

export default function PhotoPage({ params }: PhotoProps) {
  return (
    <section className="container mainContainer">
      <Photo.Root id={params.id}>
        <Photo.Image />
        <Photo.Details />
        <Photo.Comments />
      </Photo.Root>
    </section>
  );
}
