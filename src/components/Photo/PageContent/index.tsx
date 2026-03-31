import React from "react";
import { Photo } from "..";
import { getPhotoById } from "@/actions/photo";

export default async function PageContent({
  id,
  single = false,
}: {
  id: string;
  single?: boolean;
}) {
  const { photo, comments = [] } = (await getPhotoById(id)) ?? {};

  if (!photo) return null;

  return (
    <Photo.Root single={single}>
      <Photo.Image {...photo} />
      <Photo.Details data={photo} />
      <Photo.Comments comments={comments} id={id} />
    </Photo.Root>
  );
}
