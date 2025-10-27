import React from 'react';
import CustomSelect from "@components/CustomSelect/CustomSelect";
import hero from '@assets/img/HeroImage.jpg'


import styles from './HeroSection.module.scss';
import CustomInput from "@components/CustomInput/CustomInput";
import Flex from "@components/Flex";
import Button from "@components/Button/Button";
import CheckboxButton from "@components/Checkbox";


export default function HeroSection() {
  const handleSearchClick = () => {
    window.location.href = '/search';
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.banner} style={{ backgroundImage: `url(${hero})` }} />
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Buying & Shipping American Automobiles</h1>
        <div className={styles.searchCard}>
          <div className={styles.formBox}>
            <CustomSelect
              placeholder="Select Type"
            />
            <CustomSelect
              placeholder="Select Make"
            />
            <CustomSelect
              placeholder="Select Model"
            />
          </div>
          <div className={styles.formBox}>
            <div className={styles.formBoxSecond}>
              <CustomSelect
                placeholder="From"
              />
              <CustomSelect
                placeholder="To"
              />
            </div>
            <div className={styles.formBoxSecond}>
              <CustomSelect
                placeholder="Min Price"
              />
              <CustomSelect
                placeholder="Max Price"
              />
            </div>
          </div>
          <div>
            <CustomInput placeholder="Enter VIN or Lot Number" />
          </div>
          <Flex alignItems={'center'} className={styles.formBox} gap={16} padding={'0px 30px'}>
            <Flex alignItems={'center'} gap={24}>
              <Flex alignItems={'center'} gap={8}>
                <CheckboxButton/>
                <Flex className={styles.copadrBox} >
                  Copart
                </Flex>
              </Flex>
              <Flex alignItems={'center'} gap={8}>
                <CheckboxButton/>
                <Flex className={styles.IAAIBox} >
                  IAAI
                </Flex>
              </Flex>
            </Flex>
            <Button onClick={handleSearchClick}>Search Vehicles (1,999,999 results)</Button>
          </Flex>
        </div>
      </div>
    </section>
  );
}
