import React from "react";

import Image from "next/image";
import { IPhoto } from "@/types/global";

import styles from "../Photo.module.css";

export default function PhotoImage({ src, title }: IPhoto) {
  return (
    <div className={styles.img}>
      <Image src={src} alt={title} width={1000} height={1000} />
    </div>
  );
}
