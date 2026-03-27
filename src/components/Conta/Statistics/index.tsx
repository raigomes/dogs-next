"use client";

import React from "react";
import { VictoryBar, VictoryChart, VictoryPie } from "victory";

import { IPhotoStats } from "@/types/global";

import styles from "../Conta.module.css";

export default function Statistics({ data }: { data: IPhotoStats[] }) {
  const total = data?.reduce((total, item) => total + item.acessos, 0);
  const graph = data?.map((item) => ({
    x: item.title,
    y: item.acessos,
  }));

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph} />
        </VictoryChart>
      </div>
    </section>
  );
}
