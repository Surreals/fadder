import React from "react";

import Flex from "@components/Flex";
import hardIcon from '@assets/icons/hardIcon.svg'

import styles from "./CarCard.module.scss";

export interface CarData {
  id: number;
  year: number;
  make: string;
  model: string;
  odometer: string;
  engine: string;
  transmission: string;
  fuelType: string;
  driveType: string;
  isAvailable: boolean;
  auction: "Copart" | "IAAI";
  currentBid: string; // з $
  imageUrl: string;
  timer: string;
}

export default function CarCard({
                                  id,
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
  const handleCardClick = () => {
    window.location.href = `/search/${id}`;
  };

  return (
    <div className={styles.card} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
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

          <Flex alignItems="center" gap={8} className={styles.rightActions}>
            <button 
              className={styles.favoriteBtn} 
              aria-label="add to favorites"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={hardIcon}  />
            </button>

            <div 
              className={styles.bidBox}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={styles.bidLabel}>Current Bid</span>
              <span className={styles.bidLabel}>{currentBid}</span>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
}
