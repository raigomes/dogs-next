import React from "react";

import styles from "../Photo.module.css";

interface RootProps {
  children: React.ReactNode;
  id?: string;
}

export default function Root({ children, id }: RootProps) {
  return (
    <div className={`${styles.photo} ${id ? styles.single : ""}`}>
      {children}
    </div>
  );
}
