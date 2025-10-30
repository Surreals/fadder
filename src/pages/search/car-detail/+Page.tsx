import React from 'react';
import Container from "@components/Container/Container";
import Breadcrumb from "@components/Breadcrumb";
import Flex from "@components/Flex";

import styles from "./CarDetailPage.module.scss";

export default function CarDetailPage() {
  const [id, setId] = React.useState<string>('');

  React.useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const carId = pathParts[pathParts.length - 1];
    setId(carId);
  }, []);

  // мок дані авто
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
    mainImage: 'https://via.placeholder.com/800x500?text=Main+Car+Photo',
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
          <Breadcrumb
            firstText="Home page"
            secondText="Search Results"
            thirdText={`Car Details - ID: ${id}`}
          />
        </Flex>

        {/* Title row */}
        <Flex alignItems="center" gap={8} className={styles.pageTitleRow}>
          <h1 className={styles.pageTitle}>{carData.title}</h1>
          <span className={styles.auctionBadge}>{carData.auction}</span>
        </Flex>

        {/* MAIN LAYOUT */}
        <section className={styles.layout}>
          {/* LEFT COLUMN */}
          <div className={styles.leftCol}>
            <div className={styles.mainImageBox}>
              <img
                className={styles.mainImage}
                src={carData.mainImage}
                alt={carData.title}
              />
            </div>

            <div className={styles.thumbList}>
              {carData.thumbs.map((thumb, idx) => (
                <div
                  key={idx}
                  className={`${styles.thumbItem} ${thumb.active ? styles.thumbActive : ''}`}
                >
                  <img src={thumb.src} alt={`thumb-${idx}`} />
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className={styles.middleCol}>
            {/* top bar sale name / location */}
            <Flex justify="space-between" className={styles.saleInfoTop}>
              <div>
                <div className={styles.saleInfoLabel}>Sale name:</div>
                <div className={styles.saleInfoValue}>{carData.saleName}</div>
              </div>

              <div>
                <div className={styles.saleInfoLabel}>Location:</div>
                <div className={styles.saleInfoValue}>{carData.location}</div>
              </div>
            </Flex>

            {/* first spec card */}
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

            {/* second spec card */}
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

          {/* RIGHT COLUMN */}
          <div className={styles.rightCol}>
            {/* bid card */}
            <div className={styles.bidCard}>
              {/* header row */}
              <Flex justify="space-between" className={styles.bidHeaderRow}>
                <div className={styles.bidHeaderLeft}>
                  <div className={styles.bidHeaderTitle}>Time left</div>
                </div>
                <div className={styles.bidTimer}>{carData.timeLeft}</div>
              </Flex>

              {/* current bid */}
              <div className={styles.bidCurrentBlock}>
                <div className={styles.bidCurrentLabel}>Current Bid</div>
                <div className={styles.bidCurrentValue}>{carData.currentBid}</div>
              </div>

              {/* Monster bid */}
              <div className={styles.bidInputGroup}>
                <div className={styles.bidInputHeader}>
                  <span>Monster bid</span>
                  <span className={styles.iconInfo}>?</span>
                </div>
                <div className={styles.bidInputRow}>
                  <button className={styles.bidMinus}>−</button>
                  <input
                    className={styles.bidInput}
                    defaultValue={carData.monsterBid}
                  />
                  <button className={styles.bidPlus}>+</button>
                </div>
              </div>

              {/* Max bid */}
              <div className={styles.bidInputGroup}>
                <div className={styles.bidInputHeader}>
                  <span>Max bid</span>
                  <span className={styles.iconInfo}>?</span>
                </div>
                <div className={styles.bidInputRow}>
                  <button className={styles.bidMinus}>−</button>
                  <input
                    className={styles.bidInput}
                    defaultValue={carData.maxBid}
                  />
                  <button className={styles.bidPlus}>+</button>
                </div>
              </div>

              {/* Tiebreaker */}
              <div className={styles.tiebreakerRow}>
                <input type="checkbox" className={styles.tiebreakerCheckbox} />
                <div className={styles.tiebreakerTextBlock}>
                  <div className={styles.tiebreakerLabel}>TieBreaker</div>
                  <div className={styles.tiebreakerNote}>
                    If you and another bidder have the same maximum bid, the
                    tiebreaker will automatically add one bid increment for the
                    bidder who activated the tiebreaker first
                  </div>
                </div>
              </div>

              <button className={styles.bidNowBtn}>Bid Now</button>

              <div className={styles.bidLinksRow}>
                <button className={styles.bidLink}>Shipping estimate</button>
                <button className={styles.bidLink}>Bidding increment</button>
                <button className={styles.bidLink}>Check estimate</button>
              </div>

              <div className={styles.legalNote}>
                All bids are legally binding and all sales are final.
                <button className={styles.learnMore}>Learn more</button>
              </div>
            </div>

            {/* History card */}
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
    </Container>
  );
}
