import React, { useState } from "react";
import { Button, Card } from 'antd';
import styles from './PopularMakesSection.module.scss';
import Flex from "@components/Flex";
import SegmentedToggle from "@components/SegmentedToggle/SegmentedToggle";

interface CarBrand {
  id: string;
  name: string;
  logo: string;
  carCount: number;
}

const carBrands: CarBrand[] = [
  { id: 'acura', name: 'Acura', logo: '/src/assets/icons/car-brands/acura.svg', carCount: 1234 },
  { id: 'alfa-romeo', name: 'Alfa Romeo', logo: '/src/assets/icons/car-brands/alfa-romeo.svg', carCount: 1234 },
  { id: 'aston-martin', name: 'Aston Martin', logo: '/src/assets/icons/car-brands/aston-martin.svg', carCount: 1234 },
  { id: 'audi', name: 'Audi', logo: '/src/assets/icons/car-brands/audi.svg', carCount: 1234 },
  { id: 'bentley', name: 'Bentley', logo: '/src/assets/icons/car-brands/bentley.svg', carCount: 1234 },
  { id: 'bmw', name: 'BMW', logo: '/src/assets/icons/car-brands/bmw.svg', carCount: 2156 },
  { id: 'cadillac', name: 'Cadillac', logo: '/src/assets/icons/car-brands/cadillac.svg', carCount: 2156 },
  { id: 'chevrolet', name: 'Chevrolet', logo: '/src/assets/icons/car-brands/chevrolet.svg', carCount: 2156 },
  { id: 'chrysler', name: 'Chrysler', logo: '/src/assets/icons/car-brands/chrysler.svg', carCount: 2156 },
  { id: 'ferrari', name: 'Ferrari', logo: '/src/assets/icons/car-brands/ferrari.svg', carCount: 234 },
  { id: 'fiat', name: 'Fiat', logo: '/src/assets/icons/car-brands/fiat.svg', carCount: 234 },
  { id: 'ford', name: 'Ford', logo: '/src/assets/icons/car-brands/ford.svg', carCount: 3456 },
  { id: 'honda', name: 'Honda', logo: '/src/assets/icons/car-brands/honda.svg', carCount: 2789 },
  { id: 'hyundai', name: 'Hyundai', logo: '/src/assets/icons/car-brands/hyundai.svg', carCount: 1567 },
  { id: 'infiniti', name: 'Infiniti', logo: '/src/assets/icons/car-brands/infiniti.svg', carCount: 1567 },
  { id: 'jaguar', name: 'Jaguar', logo: '/src/assets/icons/car-brands/jaguar.svg', carCount: 1567 },
  { id: 'jeep', name: 'Jeep', logo: '/src/assets/icons/car-brands/jeep.svg', carCount: 1234 },
  { id: 'kia', name: 'Kia', logo: '/src/assets/icons/car-brands/kia.svg', carCount: 987 },
  { id: 'lamborghini', name: 'Lamborghini', logo: '/src/assets/icons/car-brands/lamborghini.svg', carCount: 156 },
  { id: 'land-rover', name: 'Land Rover', logo: '/src/assets/icons/car-brands/land-rover.svg', carCount: 789 },
  { id: 'lexus', name: 'Lexus', logo: '/src/assets/icons/car-brands/lexus.svg', carCount: 1456 },
  { id: 'maybach', name: 'Maybach', logo: '/src/assets/icons/car-brands/maybach.svg', carCount: 1456 },
  { id: 'mazda', name: 'Mazda', logo: '/src/assets/icons/car-brands/mazda.svg', carCount: 1123 },
  { id: 'mclaren', name: 'Mclaren', logo: '/src/assets/icons/car-brands/mclaren.svg', carCount: 1123 },
  { id: 'mercedes', name: 'Mercedes-Benz', logo: '/src/assets/icons/car-brands/mercedes.svg', carCount: 1890 },
  { id: 'mini', name: 'mini', logo: '/src/assets/icons/car-brands/mini.svg', carCount: 1890 },
  { id: 'mitsubishi', name: 'Mitsubishi', logo: '/src/assets/icons/car-brands/mitsubishi.svg', carCount: 678 },
  { id: 'nissan', name: 'Nissan', logo: '/src/assets/icons/car-brands/nissan.svg', carCount: 2345 },
  { id: 'porsche', name: 'Porsche', logo: '/src/assets/icons/car-brands/porsche.svg', carCount: 567 },
  { id: 'renault', name: 'Renault', logo: '/src/assets/icons/car-brands/renault.svg', carCount: 567 },
  { id: 'rolls-royce', name: 'Rolls-Royce', logo: '/src/assets/icons/car-brands/rolls-royce.svg', carCount: 89 },
  { id: 'smart', name: 'Smart', logo: '/src/assets/icons/car-brands/smart.svg', carCount: 1234 },
  { id: 'subaru', name: 'Subaru', logo: '/src/assets/icons/car-brands/subaru.svg', carCount: 1234 },
  { id: 'suzuki', name: 'Suzuki', logo: '/src/assets/icons/car-brands/suzuki.svg', carCount: 1234 },
  { id: 'tesla', name: 'Tesla', logo: '/src/assets/icons/car-brands/tesla.svg', carCount: 456 },
  { id: 'toyota', name: 'Toyota', logo: '/src/assets/icons/car-brands/toyota.svg', carCount: 3456 },
  { id: 'volkswagen', name: 'Volkswagen', logo: '/src/assets/icons/car-brands/volkswagen.svg', carCount: 1876 },
  { id: 'volvo', name: 'Volvo', logo: '/src/assets/icons/car-brands/volvo.svg', carCount: 654 }
];

export default function PopularMakesSection() {
  const [type, setType] = useState('auto');

  return (
    <section className={styles.popularMakesSection}>
      <Flex className={styles.toggleSection} justify={'space-between'}>
        <h2 className={styles.title}>Popular makes</h2>
        <SegmentedToggle
          options={[
            { label: 'Automobile', value: 'auto' },
            { label: 'Motorcycle', value: 'moto' },
          ]}
          value={type}
          onChange={setType}
        />
      </Flex>
      
      <div className={styles.brandsGrid}>
        {carBrands.map((brand) => (
          <Flex key={brand.id} alignItems={'center'} className={styles.brandCard} vertical gap={8} >

            <div className={styles.brandLogo}>
              <img src={brand.logo} alt={brand.name} />
            </div>
              <h3 className={styles.brandName}>{brand.name}</h3>
              <p className={styles.carCount}>{brand.carCount.toLocaleString()} cars</p>
          </Flex>
        ))}
      </div>
    </section>
  );
}
