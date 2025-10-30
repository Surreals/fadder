import React from 'react';

import CardAuto from "@pages/index/components/CardAuto";
import Flex from "@components/Flex";

import styles from './HorizontalScrollAutoSection.module.scss';

interface CarData {
  id: string;
  year: number;
  make: string;
  model: string;
  currentBid: string;
  location: string;
  auction: string;
  driveType: string;
  damage: string;
  isNew?: boolean;
  isAvailable: boolean;
}


const MOCK_CARS: CarData[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  year: 1981,
  make: "Chevrolet",
  model: "Corvette",
  odometer: "25 145 mi (40 467 km)",
  engine: "5.7L, V8",
  transmission: "Automatic",
  fuelType: "Gasoline",
  driveType: "Rear wheel drive",
  isAvailable: true,
  auction: i % 2 === 0 ? "Copart" : "IAAI",
  currentBid: "$725",
  imageUrl: "https://via.placeholder.com/640x360.png?text=Car+Image",
  timer: "1 d 21 h 23 min 00 sec",
}));

export default function HorizontalScrollAutoSection({
  title = '',
                                                    }) {
  const scrollLeft = () => {
    const container = document.getElementById('new-arrivals-scroll');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('new-arrivals-scroll');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.sectionHorizontalScrollAutoSection}>
      <Flex alignItems={'center'} justify={'space-between'}>
        <h2 className={styles.title}>{title}</h2>
        <Flex accessible cursor={'pointer'} type="link" className={styles.viewAllBtn}>
          View all
        </Flex>
      </Flex>
      
      <div className={styles.carouselContainer}>
        <div className={styles.carousel} id="new-arrivals-scroll">
          {MOCK_CARS.map((car) => (
            <CardAuto key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
