import React from "react";

import styles from "../Photo.module.css";

interface RootProps {
  children: React.ReactNode;
  single: boolean;
}

export default function Root({ children, single }: RootProps) {
  return (
    <div className={`${styles.photo} ${single ? styles.single : ""}`}>
      {children}
    </div>
  );
}
