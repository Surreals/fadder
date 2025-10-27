import React, { FC } from "react";
import Button from "@components/Button/Button";

import styles from "./CardAuto.module.scss";

interface Car {
  year?: string;
  make?: string;
  model?: string;
  isAvailable?: boolean;
  auction?: "IAAI" | "Copart";
  currentBid?: string;
}

const CardAuto: FC<{ car: Car }> = ({ car = {} }) => {

  const auctionClass =
    car.auction === "IAAI"
      ? styles.auctionIAAI
      : car.auction === "Copart"
        ? styles.auctionCopart
        : "";

  return (
    <div className={styles.carCard}>
      <div className={styles.imageContainer}>
        <div className={styles.placeholderImage}></div>
        {car.isAvailable && <div className={styles.statusActive}>Active</div>}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.title}>
          {car.year} {car.make} {car.model}
        </h3>

        <div className={styles.detailsTable}>
          <div className={styles.row}>
            <span>Odometer</span>
            <span>25 145 mi (40 467 km)</span>
          </div>
          <div className={styles.row}>
            <span>Engine</span>
            <span>5.7L, V8</span>
          </div>
          <div className={styles.row}>
            <span>Transmission</span>
            <span>Automatic</span>
          </div>
          <div className={styles.row}>
            <span>Fuel Type</span>
            <span>Gasoline</span>
          </div>
          <div className={styles.row}>
            <span>Drive Type</span>
            <span>Rear wheel drive</span>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.timer}>1 d 21 h 23 min 00 sec</div>
          <div className={`${styles.auctionTag} ${auctionClass}`}>
            {car.auction}
          </div>
      </div>

      <Button className={styles.bidButton}>
        Current Bid&nbsp;&nbsp;
        <span>${car.currentBid?.replace("$", "")}</span>
      </Button>
      </div>
    </div>
  )
}

export default CardAuto;