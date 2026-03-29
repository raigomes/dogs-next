import React from "react";
import Image from "next/image";

import styles from "../Photo.module.css";

export default function PhotoImage() {
  return (
    <div className={styles.img}>
      <div className={styles.wrapper}>
        <Image
          src={"https://place.dog/1000/1000"}
          alt={"Foto do animal"}
          className={styles.img}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
