import React, { FC } from "react";
import Button from "@components/Button/Button";
import styles from "./CardAuto.module.scss";

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
  currentBid: string;
  imageUrl: string;
  timer: string;
}

interface CardAutoProps {
  car: CarData;
}

const CardAuto: FC<CardAutoProps> = ({ car }) => {
  const auctionClass =
    car.auction === "IAAI"
      ? styles.auctionIAAI
      : car.auction === "Copart"
        ? styles.auctionCopart
        : "";

  const handleCardClick = () => {
    window.location.href = `/search/${car.id}`;
  };

  return (
    <div className={styles.carCard} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className={styles.imageContainer}>
        {car.imageUrl ? (
          <img
            src={car.imageUrl}
            alt={`${car.year} ${car.make} ${car.model}`}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholderImage}></div>
        )}

        {car.isAvailable && (
          <div className={styles.statusActive}>Active</div>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.title}>
          {car.year} {car.make} {car.model}
        </h3>

        <div className={styles.detailsTable}>
          <div className={styles.row}>
            <span>Odometer</span>
            <span>{car.odometer}</span>
          </div>
          <div className={styles.row}>
            <span>Engine</span>
            <span>{car.engine}</span>
          </div>
          <div className={styles.row}>
            <span>Transmission</span>
            <span>{car.transmission}</span>
          </div>
          <div className={styles.row}>
            <span>Fuel Type</span>
            <span>{car.fuelType}</span>
          </div>
          <div className={styles.row}>
            <span>Drive Type</span>
            <span>{car.driveType}</span>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.timer}>{car.timer}</div>
          <div className={`${styles.auctionTag} ${auctionClass}`}>
            {car.auction}
          </div>
        </div>

        <Button 
          className={styles.bidButton}
          onClick={(e) => e.stopPropagation()}
        >
          Current Bid&nbsp;&nbsp;
          <span>
            {car.currentBid.startsWith("$")
              ? car.currentBid
              : `$${car.currentBid}`}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default CardAuto;
