import React from 'react';

import Container from "@components/Container/Container";
import Breadcrumb from "@components/Breadcrumb";
import Flex from "@components/Flex";
import EllipseIcon from "@assets/icons/ellipse.svg"
import LocationIcon from "@assets/icons/locationIcon.svg"
import MoreInfoIcon from "@assets/icons/moreInfoIcon.svg"
import PlusIcon from "@assets/icons/plusIcon.svg"
import MinusIcon from "@assets/icons/minusIcon.svg"
import TestFoto from "@assets/img/FotoTest.png"

import CopartIcon from "@components/Icon/CopartIcon";
import CheckboxButton from "@components/Checkbox";
import styles from "./CarDetailPage.module.scss";

export default function CarDetailPage({ id }: { id?: string }) {
  const carId = id || '';

  const carData = {
    title: '1982 Chevrolet Corvette',
    auction: 'Copart',
    saleName: 'DRIVE WHOLESALE CANADA',
    location: 'ON · OTTAWA',
    timeLeft: '1 d 21 h 23 min 00 sec',
    currentBid: '$1,700 USD',
    monsterBid: '$1,700',
    maxBid: '$1,700',
    specsTop: [
      { label: 'Lot Number', value: '62812505' },
      { label: 'VIN', value: '123ABC456DEF789GHI' },
      { label: 'Title Code', value: 'NH CERT OF TITLE-SALVAGE' },
      { label: 'Loss', value: 'Collision' },
      { label: 'Primary damage', value: 'Right front' },
      { label: 'Secondary Damage', value: 'Rear End' },
      { label: 'Odometer', value: '25 145 mi (40 467 km)' },
      { label: 'Start code', value: 'Starts' },
      { label: 'Key', value: 'Present' },
      { label: 'Est. Repair Cost', value: '$10,525 USD' },
      { label: 'Est. Retail Value', value: '$13,974 USD' },
    ],
    specsBottom: [
      { label: 'Body Style', value: 'Coupe' },
      { label: 'Exterior color', value: 'Black' },
      { label: 'Engine', value: '5.7L, V8' },
      { label: 'Transmission', value: 'Automatic' },
      { label: 'Fuel Type', value: 'Gasoline' },
      { label: 'Drive Type', value: 'Rear wheel drive' },
    ],
    bidHistory: [
      { user: 'Anonymous user', amount: '$525', timeAgo: '5 minutes ago' },
      { user: 'Anonymous user', amount: '$500', timeAgo: '40 minutes ago' },
      { user: 'Anonymous user', amount: '$475', timeAgo: '40 minutes ago' },
      { user: 'Anonymous user', amount: '$450', timeAgo: '40 minutes ago' },
      { user: 'Anonymous user', amount: '$425', timeAgo: '40 minutes ago' },
    ],
    mainImage: TestFoto,
    thumbs: Array.from({ length: 12 }).map((_, idx) => ({
      src: idx === 0
        ? 'https://via.placeholder.com/140x90?text=360'
        : 'https://via.placeholder.com/140x90?text=Thumb',
      active: idx === 0,
    })),
  };

  return (
    <Container>
      <Flex vertical gap={24} className={styles.carDetailPage}>
        <Flex className={styles.breadcrumbsBox}>
          <Breadcrumb firstText="Home page" secondText="Search Results" thirdText={`Car Details - ID: ${carId}`} />
        </Flex>
        <Flex vertical gap={16}>
          <Flex alignItems={"center"} justify={"space-between"}>
            <Flex alignItems="center" gap={8} className={styles.pageTitleRow}>
              <h1 className={styles.pageTitle}>{carData.title}</h1>
              <CopartIcon />
            </Flex>
            <Flex justify="space-between" className={styles.saleInfoTop}>
              <Flex alignItems={"center"} gap={8}>
                <div className={styles.saleInfoLabel}>Sale name:</div>
                <div className={styles.saleInfoValue}>{carData.saleName}</div>
                <img src={EllipseIcon} alt={"Ellipse icon"} />
              </Flex>

              <Flex alignItems={"center"} gap={8}>
                <div className={styles.saleInfoLabel}>Location:</div>
                <div className={styles.saleInfoValue}>{carData.location}</div>
                <img src={LocationIcon} alt={"Location icon"} />
              </Flex>
            </Flex>
          </Flex>
          <section className={styles.layout}>
            <div className={styles.leftCol}>
              <div className={styles.mainImageBox}>
                <img className={styles.mainImage} src={carData.mainImage} alt={carData.title} />
              </div>

              <div className={styles.thumbList}>
                {carData.thumbs.map((thumb, idx) => (
                  <div key={idx} className={`${styles.thumbItem} ${thumb.active ? styles.thumbActive : ""}`}>
                    <img src={TestFoto} alt={`thumb-${idx}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.specCard}>
                <ul className={styles.specList}>
                  {carData.specsTop.map((row, i) => (
                    <li key={i} className={styles.specRow}>
                      <span className={styles.specLabel}>{row.label}</span>
                      <span className={styles.specValue}>{row.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.specCard}>
                <ul className={styles.specList}>
                  {carData.specsBottom.map((row, i) => (
                    <li key={i} className={styles.specRow}>
                      <span className={styles.specLabel}>{row.label}</span>
                      <span className={styles.specValue}>{row.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.rightCol}>
              <Flex justify="space-between" className={styles.bidCardRow}>
                <div className={styles.bidHeaderTitle}>Time left</div>
                <div className={styles.bidTimer}>{carData.timeLeft}</div>
              </Flex>

              <div className={styles.bidCard}>
                <div className={styles.bidCurrentBlock}>
                  <div className={styles.bidHeaderTitle}>Current Bid</div>
                  <div className={styles.bidCurrentValue}>{carData.currentBid}</div>
                </div>

                <div className={styles.bidInputGroup}>
                  <div className={styles.bidInputHeader}>
                    <span>Monster bid</span>
                    <img src={MoreInfoIcon} />
                  </div>
                  <div className={styles.bidInputRow}>
                    <button className={styles.bidMinus}>
                      <img src={MinusIcon} />
                    </button>
                    <input className={styles.bidInput} defaultValue={carData.monsterBid} />
                    <button className={styles.bidPlus}>
                      <img src={PlusIcon} />
                    </button>
                  </div>
                </div>

                <div className={styles.bidInputGroup}>
                  <div className={styles.bidInputHeader}>
                    <span>Max bid</span>
                    <img src={MoreInfoIcon} />
                  </div>
                  <div className={styles.bidInputRow}>
                    <button className={styles.bidMinus}>
                      <img src={MinusIcon} />
                    </button>
                    <input className={styles.bidInput} defaultValue={carData.monsterBid} />
                    <button className={styles.bidPlus}>
                      <img src={PlusIcon} />
                    </button>
                  </div>
                </div>

                <div className={styles.tiebreakerRow}>
                  <CheckboxButton />
                  <div className={styles.tiebreakerTextBlock}>
                    <div className={styles.tiebreakerLabel}>TieBreaker</div>
                    <div className={styles.tiebreakerNote}>
                      If you and another bidder have the same maximum bid, the tiebreaker will automatically add one bid
                      increment for the bidder who activated the tiebreaker first
                    </div>
                  </div>
                </div>

                <button className={styles.bidNowBtn}>Bid Now</button>

                <div className={styles.border}></div>

                <div className={styles.bidLinksRow}>
                  <button className={styles.bidLink}>Shipping estimate</button>
                  <button className={styles.bidLink}>Bidding increment</button>
                  <button className={styles.bidLink}>Check estimate</button>
                </div>

                <Flex alignItems={"center"} gap={4} vertical>
                  <div className={styles.tiebreakerNote}>All bids are legally binding and all sales are final.</div>
                  <button className={styles.learnMore}>Learn more</button>
                </Flex>
              </div>

              <div className={styles.historyCard}>
                <Flex justify="space-between" className={styles.historyHeaderRow}>
                  <div className={styles.historyTitle}>Bidding History</div>
                  <div className={styles.historyIcon}>⋯</div>
                </Flex>

                <ul className={styles.historyList}>
                  {carData.bidHistory.map((item, i) => (
                    <li key={i} className={styles.historyRow}>
                      <div className={styles.historyLeft}>
                        <div className={styles.historyUser}>{item.user}</div>
                        <div className={styles.historyTime}>{item.timeAgo}</div>
                      </div>
                      <div className={styles.historyAmount}>{item.amount}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </Flex>
      </Flex>
    </Container>
  );
}
