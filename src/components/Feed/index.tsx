"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

import { getPhotos } from "@/actions/photo";
import { IPhoto } from "@/types/global";

import FeedLoading from "./FeedLoading";

import styles from "./Feed.module.css";

interface FeedProps {
  initialPhotos?: IPhoto[];
  user?: number | string;
}

export default function Feed({ initialPhotos = [], user = 0 }: FeedProps) {
  const [photos, setPhotos] = React.useState<IPhoto[]>(initialPhotos);
  const [page, setPage] = React.useState(2);
  const [hasMore, setHasMore] = React.useState(true);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  React.useEffect(() => {
    async function loadPhotos() {
      const data = await getPhotos({
        total: 6,
        user,
        page,
      });

      if (!data || data?.length === 0) {
        setHasMore(false);
      } else {
        setPhotos((prev) => prev && [...prev, ...data]);
        setPage((prev) => prev + 1);
      }
    }

    if (inView && hasMore) {
      loadPhotos();
    }
  }, [inView, hasMore, user, page]);

  if (photos.length === 0) return null;

  return (
    <div>
      <ul className={`${styles.feed} animeLeft`}>
        {photos.map((photo) => (
          <li key={photo.id} className={styles.photo}>
            <Link href={`/foto/${photo.id}`} className={styles.wrapper}>
              <Image
                src={photo.src}
                alt={photo.title}
                className={styles.img}
                width={507}
                height={507}
              />
              <span className={styles.visualizacao}>{photo.acessos}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.loadingWrapper} ref={ref}>
        <FeedLoading hasMore={hasMore} inView={inView} />
      </div>
    </div>
  );
}
