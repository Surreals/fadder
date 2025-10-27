import React, { useState } from 'react';
import Flex from "@components/Flex";
import Breadcrumb from "@components/Breadcrumb";
import Container from "@components/Container/Container";
import CustomSelect from "@components/CustomSelect/CustomSelect";
import CarList from "./components/CarList";
import FiltersPanel from "./components/FiltersPanel";

import arrowLeft from "@assets/icons/leftArrow.svg";
import arrowRight from "@assets/icons/rightArrow.svg";
import gridIcon from "@assets/icons/gridIcon.svg";
import listIcon from "@assets/icons/listIcon.svg";

import styles from "./SearchPage.module.scss";

export default function SearchPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [arrowOpen, setArrowOpen] = useState(false);

  return (
    <Container>
      <Flex vertical gap={24}>
        <Flex className={styles.breadcrumbsBox}>
          <Breadcrumb
            firstText="Home page"
            secondText="Search Results"
            secondIntermediateText="Vehicle Finder"
          />
        </Flex>

        <h1 className={styles.title}>
          Repairable, Salvage and Wrecked Car Auctions
        </h1>

        <Flex alignItems="center" justify="space-between">
          <Flex alignItems={"center"} gap={4}>
            <Flex
              alignItems={"center"}
              justify={"space-between"}
              className={styles.filterSection}
            >
              <Flex className={styles.filterSectionText}>Search filters</Flex>
              <Flex className={styles.filterSectionTextSecond}>Reset All</Flex>
            </Flex>

            <Flex
              alignItems={"center"}
              justify={"space-between"}
              className={styles.filterSectionRight}
            >
              <img
                src={arrowOpen ? arrowRight : arrowLeft}
                alt="toggle filters"
                className={styles.arrowIcon}
                onClick={() => setArrowOpen(!arrowOpen)}
              />

              <Flex className={styles.filterSectionResult}>
                Results 22,328
              </Flex>
            </Flex>
          </Flex>

          <Flex alignItems="center" gap={8}>
            <CustomSelect
              bgColor={"#fff"}
              textStyle={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--Text-Black, #0F0F0F)",
              }}
              placeholder="10 cards"
            />

            <CustomSelect
              bgColor={"#fff"}
              textStyle={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--Text-Black, #0F0F0F)",
              }}
              placeholder="Sort by"
            />

            <Flex
              alignItems="center"
              gap={10}
              className={styles.toggleStylesBox}
            >
              <img
                src={gridIcon}
                alt="Grid view"
                className={`${styles.toggleIcon} ${
                  view === "grid" ? styles.active : ""
                }`}
                onClick={() => setView("grid")}
              />
              <img
                src={listIcon}
                alt="List view"
                className={`${styles.toggleIcon} ${
                  view === "list" ? styles.active : ""
                }`}
                onClick={() => setView("list")}
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex gap={16} alignItems="flex-start">
          {arrowOpen && (
            <div className={styles.filtersWrapper}>
              <FiltersPanel />
            </div>
          )}

          <div className={styles.resultsWrapper}>
            <CarList />
          </div>
        </Flex>
      </Flex>
    </Container>
  );
}
