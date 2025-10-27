import React from "react";
import Flex from "@components/Flex";
import styles from "./CarCard.module.scss";

export interface CarData {
  id: string | number;
  year: string | number;
  make: string;
  model: string;
  odometer: string;
  engine: string;
  transmission: string;
  fuelType: string;
  driveType: string;
  isAvailable: boolean;
  auction: "Copart" | "IAAI";
  currentBid: string;
  imageUrl: string;
  timer: string;
}

export default function CarCard({
                                  year,
                                  make,
                                  model,
                                  odometer,
                                  engine,
                                  transmission,
                                  fuelType,
                                  driveType,
                                  isAvailable,
                                  auction,
                                  currentBid,
                                  imageUrl,
                                  timer,
                                }: CarData) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={`${year} ${make} ${model}`} className={styles.image} />
      </div>

      <div className={styles.middle}>
        <Flex justify="space-between" alignItems="flex-start">
          <div className={styles.title}>{year} {make} {model}</div>

          <Flex gap={8}>
            {isAvailable && (
              <span className={`${styles.badge} ${styles.badgeActive}`}>
                Active
              </span>
            )}
            <span
              className={`${styles.badge} ${
                auction === "IAAI" ? styles.badgeIAAI : styles.badgeCopart
              }`}
            >
              {auction}
            </span>
          </Flex>
        </Flex>

        <div className={styles.specGrid}>
          <div className={styles.specRow}>
            <div className={styles.specLabel}>Odometer</div>
            <div className={styles.specValue}>{odometer}</div>
          </div>
          <div className={styles.specRow}>
            <div className={styles.specLabel}>Fuel Type</div>
            <div className={styles.specValue}>{fuelType}</div>
          </div>

          <div className={styles.specRow}>
            <div className={styles.specLabel}>Engine</div>
            <div className={styles.specValue}>{engine}</div>
          </div>
          <div className={styles.specRow}>
            <div className={styles.specLabel}>Drive Type</div>
            <div className={styles.specValue}>{driveType}</div>
          </div>

          <div className={styles.specRow}>
            <div className={styles.specLabel}>Transmission</div>
            <div className={styles.specValue}>{transmission}</div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.timer}>{timer}</div>

          <Flex alignItems="center" gap={16} className={styles.rightActions}>
            <button className={styles.favoriteBtn} aria-label="add to favorites">
              ♡
            </button>

            <div className={styles.bidBox}>
              <span className={styles.bidLabel}>Current Bid</span>
              <span className={styles.bidValue}>{currentBid}</span>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
}
