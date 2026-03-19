import React from "react";

import Image from "next/image";
import { getPhotos } from "@/actions/photo";

import styles from "./Feed.module.css";

export default async function Feed() {
  const photos = await getPhotos();

  if (!photos) return null;

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {photos.map((photo) => (
        <li
          key={photo.id}
          className={styles.photo}
          //   onClick={() => openModal(photo)}
        >
          <div className={styles.wrapper}>
            <Image
              src={photo.src}
              alt={photo.title}
              className={styles.img}
              width={507}
              height={507}
            />
          </div>
          <span className={styles.visualizacao}>{photo.acessos}</span>
        </li>
      ))}
    </ul>
  );
}
