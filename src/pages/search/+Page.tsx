import React, { useState, useMemo } from 'react';
import Flex from "@components/Flex";
import Breadcrumb from "@components/Breadcrumb";
import Container from "@components/Container/Container";
import CustomSelect from "@components/CustomSelect/CustomSelect";
import CarList from "./components/CarList";
import FiltersPanel, { FiltersState } from "./components/FiltersPanel";

import arrowLeft from "@assets/icons/leftArrow.svg";
import arrowRight from "@assets/icons/rightArrow.svg";
import gridIcon from "@assets/icons/gridIcon.svg";
import closeIcon from "@assets/icons/closeIcon.svg";
import listIcon from "@assets/icons/listIcon.svg";

import styles from "./SearchPage.module.scss";

type Chip = { group: keyof FiltersState; key: string; label: string };

export default function SearchPage()  {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [arrowOpen, setArrowOpen] = useState(true);

  const [filters, setFilters] = useState<FiltersState>({
    selectFilters:     { vehiclesOnly: true, newlyAdded: false, excludeUpcoming: false, watchlistOnly: false },
    auctionFilters:    { all: true, copart: false, iaai: false },
    lotStatusFilters:  { active: true, sold: false, upcoming: false },
    vehicleTypeFilters:{ atvs: true, agriculture: false, boats:false, bus:false, construction:false, heavyDuty:false,
      industrial:false, jetSkis:false, mediumDutyBox:false, pickupTrucks:false },
    makeFilters:       { acura:true, alfaRomeo:false, aspt:false, audi:false, bentley:false,
      blueBird:false, bmw:false, buick:false, buj:false, cadillac:false },
  });

  const labelMaps = {
    selectFilters: {
      vehiclesOnly: "Vehicles Only",
      newlyAdded: "Newly added vehicles",
      excludeUpcoming: "Exclude upcoming auction vehicles",
      watchlistOnly: "Show watchlist lots only",
    },
    auctionFilters: { all: "All", copart: "Copart", iaai: "IAAI" },
    lotStatusFilters: { active: "Active", sold: "Sold", upcoming: "Upcoming" },
    vehicleTypeFilters: {
      atvs: "ATVS", agriculture: "Agriculture and Farm equipment", boats: "Boats", bus: "Bus",
      construction: "Construction equipment", heavyDuty: "Heavy Duty Trucks", industrial: "Industrial Equipment",
      jetSkis: "Jet Skis", mediumDutyBox: "Medium Duty Box Trucks", pickupTrucks: "Pickup Trucks",
    },
    makeFilters: {
      acura: "Acura", alfaRomeo: "Alfa Romeo", aspt: "Aspt", audi: "Audi", bentley: "Bentley",
      blueBird: "Blue Bird", bmw: "BMW", buick: "Buick", buj: "Buj", cadillac: "Cadillac",
    },
  } as const;

  const chips: Chip[] = useMemo(() => {
    const out: Chip[] = [];
    (Object.keys(filters) as (keyof FiltersState)[]).forEach((group) => {
      const groupObj = filters[group] as Record<string, boolean>;
      const labels   = (labelMaps as any)[group] as Record<string,string>;
      Object.entries(groupObj).forEach(([k, v]) => {
        if (!v) return;
        if (group === 'auctionFilters' && k === 'all') return;
        out.push({ group, key: k, label: labels?.[k] ?? k });
      });
    });
    return out;
  }, [filters]);

  const removeChip = (chip: Chip) => {
    setFilters(prev => ({
      ...prev,
      [chip.group]: { ...(prev[chip.group] as any), [chip.key]: false }
    }));
  };

  return (
    <Container>
      <Flex vertical gap={24} className={styles.searchPage}>
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

        <Flex vertical>
          <Flex alignItems="center" justify="space-between">
            <Flex alignItems={"center"} gap={4}>
              <Flex
                alignItems={"center"}
                justify={"space-between"}
                className={`${styles.filterSection} ${arrowOpen ? styles.isOpenFilter : ""}`}
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

          <Flex gap={16} justify={'center'} alignItems="flex-start">
            {arrowOpen && (
              <div className={styles.filtersWrapper}>
                <FiltersPanel
                  value={filters}
                  onChange={setFilters}
                />
              </div>
            )}

            <Flex className={styles.resultsWrapper} vertical gap={16}>
              <Flex gap={12} className={styles.selectedChips}>
                {chips.length === 0 ? null : chips.map(chip => (
                  <div key={`${chip.group}:${chip.key}`} className={styles.chip}>
                    <span className={styles.chipText}>{chip.label}</span>
                    <Flex cursor={'pointer'} onClick={()=>removeChip(chip)} aria-label="Remove filter">
                      <img src={closeIcon} alt="" />
                    </Flex>
                  </div>
                ))}
              </Flex>
              <div >
                <CarList view={view} />
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
