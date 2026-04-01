import React from "react";

import Feed from "@/components/Feed";
import { getPhotos } from "@/actions/photo";

export default async function ProfilePage({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;
  const photos = await getPhotos({ total: 6, page: 1, user: name });

  return (
    <section className="container mainSection">
      <h1 className="title">{name}</h1>
      {photos && <Feed initialPhotos={photos} user={name} />}
    </section>
  );
}
