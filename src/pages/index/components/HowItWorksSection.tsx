import React from 'react';
import Flex from "@components/Flex";
import Button from "@components/Button/Button";

import about1 from '@assets/img/about1.jpg';
import about2 from '@assets/img/about2.jpg';
import about3 from '@assets/img/about3.jpg';

import styles from './HowItWorksSection.module.scss';

const steps = [
  {
    id: '1',
    number: '01.',
    title: 'Vehicle Pickup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    buttonText: 'Details & Drop-off',
    image: about1
  },
  {
    id: '2',
    number: '02.',
    title: 'Auction Process',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    buttonText: 'Learn more',
    image: about2
  },
  {
    id: '3',
    number: '03.',
    title: 'Shipping & Delivery',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
    buttonText: 'Track Shipment',
    image: about3
  }
];

export default function HowItWorksSection() {
  return (
    <section className={styles.howItWorksSection}>
      {steps.map((step, index) => (
        <Flex
          key={step.id}
          className={`${styles.stepContainer} ${index % 2 !== 0 ? styles.reverse : ""}`}
          alignItems="center"
        >
          <div className={styles.imageWrapper}>
            <img src={step.image} alt={step.title} />
          </div>

          <div className={styles.textWrapper}>
            <Flex vertical gap={16}>
              <h3 className={styles.title}>
                {step.number} {step.title}
              </h3>
              <p className={styles.description}>{step.description}</p>
            </Flex>
            <Button variant="primary">{step.buttonText}</Button>
          </div>
        </Flex>
      ))}
    </section>
  );
}
