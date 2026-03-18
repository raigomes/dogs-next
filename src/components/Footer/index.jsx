import React from "react";

import Image from "next/image";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={"/assets/dog.svg"} alt="Dogs Logo" width={28} height={22} />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}
