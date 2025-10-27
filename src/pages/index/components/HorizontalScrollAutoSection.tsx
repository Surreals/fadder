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

const mockCars: CarData[] = [
  {
    id: '1',
    year: 1980,
    make: 'Chevrolet',
    model: 'Corvette',
    currentBid: '$7,200',
    location: 'Houston, TX',
    auction: 'Copart',
    driveType: 'RWD',
    damage: 'Front End',
    isNew: true,
    isAvailable: true
  },
  {
    id: '2',
    year: 1983,
    make: 'Chevrolet',
    model: 'Corvette',
    currentBid: '$8,500',
    location: 'Miami, FL',
    auction: 'IAAI',
    driveType: 'RWD',
    damage: 'Minor',
    isNew: true,
    isAvailable: true
  },
  {
    id: '3',
    year: 1980,
    make: 'Chevrolet',
    model: 'Corvette',
    currentBid: 'N/A',
    location: 'Los Angeles, CA',
    auction: 'Copart',
    driveType: 'RWD',
    damage: 'Side Impact',
    isNew: false,
    isAvailable: false
  },
  {
    id: '4',
    year: 1981,
    make: 'Chevrolet',
    model: 'Corvette',
    currentBid: '$6,800',
    location: 'Dallas, TX',
    auction: 'IAAI',
    driveType: 'RWD',
    damage: 'Hail',
    isNew: true,
    isAvailable: true
  },
  {
    id: '5',
    year: 1982,
    make: 'Chevrolet',
    model: 'Corvette',
    currentBid: '$9,200',
    location: 'Phoenix, AZ',
    auction: 'Copart',
    driveType: 'RWD',
    damage: 'None',
    isNew: false,
    isAvailable: true
  },
  {
    id: '6',
    year: 1982,
    make: 'Chevrolet',
    model: 'Corvette',
    currentBid: '$9,200',
    location: 'Phoenix, AZ',
    auction: 'Copart',
    driveType: 'RWD',
    damage: 'None',
    isNew: false,
    isAvailable: true
  },
  {
    id: '7',
    year: 1982,
    make: 'Chevrolet',
    model: 'Corvette',
    currentBid: '$9,200',
    location: 'Phoenix, AZ',
    auction: 'Copart',
    driveType: 'RWD',
    damage: 'None',
    isNew: false,
    isAvailable: true
  },
  {
    id: '8',
    year: 1982,
    make: 'Chevrolet',
    model: 'Corvette',
    currentBid: '$9,200',
    location: 'Phoenix, AZ',
    auction: 'Copart',
    driveType: 'RWD',
    damage: 'None',
    isNew: false,
    isAvailable: true
  }
];

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
          {mockCars.map((car) => (
            <CardAuto key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
