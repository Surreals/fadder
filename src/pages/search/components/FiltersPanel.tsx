import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import { DatePicker } from "antd";

import Flex from "@components/Flex";
import CheckboxButton from "@components/Checkbox/index";
import plusIcon from "@assets/icons/plusIcon.svg";
import minusIcon from "@assets/icons/minusIcon.svg";
import searchIcon from "@assets/icons/search.svg";
import calendarIcon from "@assets/icons/calendarIcon.svg";

import styles from "./FiltersPanel.module.scss";
import CustomInput from "@components/CustomInput/CustomInput";
import CustomSlider from "@components/CustomSlider/CustomSlider";
import CustomSelect from "@components/CustomSelect/CustomSelect";

export type FiltersState = {
  selectFilters: {
    vehiclesOnly: boolean;
    newlyAdded: boolean;
    excludeUpcoming: boolean;
    watchlistOnly: boolean;
  };
  auctionFilters: { all: boolean; copart: boolean; iaai: boolean };
  lotStatusFilters: { active: boolean; sold: boolean; upcoming: boolean };
  vehicleTypeFilters: {
    atvs: boolean;
    agriculture: boolean;
    boats: boolean;
    bus: boolean;
    construction: boolean;
    heavyDuty: boolean;
    industrial: boolean;
    jetSkis: boolean;
    mediumDutyBox: boolean;
    pickupTrucks: boolean;
  };
  makeFilters: {
    acura: boolean;
    alfaRomeo: boolean;
    aspt: boolean;
    audi: boolean;
    bentley: boolean;
    blueBird: boolean;
    bmw: boolean;
    buick: boolean;
    buj: boolean;
    cadillac: boolean;
  };
};

type Props = {
  value: FiltersState;
  onChange: React.Dispatch<React.SetStateAction<FiltersState>>;
};

interface SectionProps {
  title: string;
  isOpen: boolean;
  isFirst?: boolean;
  isNeedHeader?: boolean;
  onToggle: () => void;
  extraRight?: string;
  children: React.ReactNode;
}

function FilterSection({
                         title,
                         isOpen,
                         onToggle,
                         isNeedHeader = true,
                         extraRight,
                         children,
                         isFirst = false,
                       }: SectionProps) {
  return (
    <Flex
      vertical
      gap={16}
      className={`${styles.sectionCard} ${isFirst ? styles.firstSectionCard : ""}`}
    >
      {isNeedHeader && (
        <Flex alignItems={"center"} justify={"space-between"} onClick={onToggle}>
          <span className={styles.sectionTitle}>{title}</span>
          <div className={styles.sectionToggle}>
            {extraRight ? (
              extraRight
            ) : (
              <img
                src={isOpen ? minusIcon : plusIcon}
                alt={isOpen ? "collapse" : "expand"}
                className={styles.toggleIcon}
              />
            )}
          </div>
        </Flex>
      )}

      {isOpen && <div>{children}</div>}
    </Flex>
  );
}

export default function FiltersPanel({ value, onChange }: Props) {
  const [openSections, setOpenSections] = useState({
    select: true,
    auctionType: true,
    lotStatus: true,
    vehicleType: true,
    make: true,
    year: true,
    price: true,
    odometer: true,
    damage: true,
    location: true,
    saleDate: true,
  });

  const [fromDate, setFromDate] = useState<Dayjs | null>(null);
  const [toDate, setToDate] = useState<Dayjs | null>(null);

  const [yearRange, setYearRange] = useState<[number, number]>([1900, 2025]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [mileageRange, setMileageRange] = useState<[number, number]>([0, 250000]);

  const toggleSection = (key: keyof typeof openSections) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const setGroup = <K extends keyof FiltersState>(
    group: K,
    key: keyof FiltersState[K],
    val: boolean
  ) => {
    onChange((prev) => ({
      ...prev,
      [group]: { ...(prev[group] as any), [key]: val } as FiltersState[K],
    }));
  };

  const handleAuctionToggle = (key: keyof FiltersState["auctionFilters"], val: boolean) => {
    onChange((prev) => {
      const current = prev.auctionFilters;
      if (key === "all") {
        return {
          ...prev,
          auctionFilters: { all: val, copart: false, iaai: false },
        };
      }
      const next = { ...current, [key]: val, all: false } as FiltersState["auctionFilters"];
      if (!next.copart && !next.iaai) {
        return { ...prev, auctionFilters: { all: true, copart: false, iaai: false } };
      }
      return { ...prev, auctionFilters: next };
    });
  };

  const handleSelectToggle = (key: keyof FiltersState["selectFilters"], val: boolean) =>
    setGroup("selectFilters", key, val);

  const handleLotStatusToggle = (key: keyof FiltersState["lotStatusFilters"], val: boolean) =>
    setGroup("lotStatusFilters", key, val);

  const handleVehicleTypeToggle = (key: keyof FiltersState["vehicleTypeFilters"], val: boolean) =>
    setGroup("vehicleTypeFilters", key, val);

  const handleMakeToggle = (key: keyof FiltersState["makeFilters"], val: boolean) =>
    setGroup("makeFilters", key, val);

  const { selectFilters, auctionFilters, lotStatusFilters, vehicleTypeFilters, makeFilters } = value;

  return (
    <div className={styles.panel}>
      <FilterSection
        isNeedHeader={false}
        isFirst
        title="Select"
        isOpen={openSections.select}
        onToggle={() => toggleSection("select")}
      >
        <Flex vertical gap={8}>
          <CheckboxButton
            layout="text-left"
            label="Vehicles Only"
            checked={selectFilters.vehiclesOnly}
            onCheckedChange={(val) => handleSelectToggle("vehiclesOnly", val)}
          />
          <CheckboxButton
            layout="text-left"
            label="Newly added vehicles"
            checked={selectFilters.newlyAdded}
            onCheckedChange={(val) => handleSelectToggle("newlyAdded", val)}
          />
          <CheckboxButton
            layout="text-left"
            label="Exclude upcoming auction vehicles"
            checked={selectFilters.excludeUpcoming}
            onCheckedChange={(val) => handleSelectToggle("excludeUpcoming", val)}
          />
          <CheckboxButton
            layout="text-left"
            label="Show watchlist lots only"
            checked={selectFilters.watchlistOnly}
            onCheckedChange={(val) => handleSelectToggle("watchlistOnly", val)}
          />
        </Flex>
      </FilterSection>

      {/* AUCTION TYPE */}
      <FilterSection
        title="Auction type"
        isOpen={openSections.auctionType}
        onToggle={() => toggleSection("auctionType")}
      >
        <Flex vertical gap={8}>
          <CheckboxButton
            label="All"
            checked={auctionFilters.all}
            onCheckedChange={(val) => handleAuctionToggle("all", val)}
          />
          <CheckboxButton
            isCopart
            label="Copart"
            checked={auctionFilters.copart}
            onCheckedChange={(val) => handleAuctionToggle("copart", val)}
          />
          <CheckboxButton
            isIAAI
            label="IAAI"
            checked={auctionFilters.iaai}
            onCheckedChange={(val) => handleAuctionToggle("iaai", val)}
          />
        </Flex>
      </FilterSection>

      {/* LOT STATUS */}
      <FilterSection
        title="Lot status"
        isOpen={openSections.lotStatus}
        onToggle={() => toggleSection("lotStatus")}
      >
        <Flex vertical gap={8}>
          <CheckboxButton
            label="Active"
            checked={lotStatusFilters.active}
            onCheckedChange={(val) => handleLotStatusToggle("active", val)}
          />
          <CheckboxButton
            label="Sold"
            checked={lotStatusFilters.sold}
            onCheckedChange={(val) => handleLotStatusToggle("sold", val)}
          />
          <CheckboxButton
            label="Upcoming"
            checked={lotStatusFilters.upcoming}
            onCheckedChange={(val) => handleLotStatusToggle("upcoming", val)}
          />
        </Flex>
      </FilterSection>

      {/* VEHICLE TYPE */}
      <FilterSection
        title="Vehicle type"
        isOpen={openSections.vehicleType}
        onToggle={() => toggleSection("vehicleType")}
      >
        <Flex padding={"0 0 16px 0"}>
          <CustomInput
            placeholder={"Search"}
            suffix={<img src={searchIcon} alt="search" className={styles.icon} />}
          />
        </Flex>

        <div className={styles.scrollArea}>
          <CheckboxButton
            label="ATVS (11)"
            checked={vehicleTypeFilters.atvs}
            onCheckedChange={(val) => handleVehicleTypeToggle("atvs", val)}
          />
          <CheckboxButton
            label="Agriculture and Farm equipment (1)"
            checked={vehicleTypeFilters.agriculture}
            onCheckedChange={(val) => handleVehicleTypeToggle("agriculture", val)}
          />
          <CheckboxButton
            label="Boats (5)"
            checked={vehicleTypeFilters.boats}
            onCheckedChange={(val) => handleVehicleTypeToggle("boats", val)}
          />
          <CheckboxButton
            label="Bus (5)"
            checked={vehicleTypeFilters.bus}
            onCheckedChange={(val) => handleVehicleTypeToggle("bus", val)}
          />
          <CheckboxButton
            label="Construction equipment (1)"
            checked={vehicleTypeFilters.construction}
            onCheckedChange={(val) => handleVehicleTypeToggle("construction", val)}
          />
          <CheckboxButton
            label="Heavy Duty Trucks (4)"
            checked={vehicleTypeFilters.heavyDuty}
            onCheckedChange={(val) => handleVehicleTypeToggle("heavyDuty", val)}
          />
          <CheckboxButton
            label="Industrial Equipment (1)"
            checked={vehicleTypeFilters.industrial}
            onCheckedChange={(val) => handleVehicleTypeToggle("industrial", val)}
          />
          <CheckboxButton
            label="Jet Skis (4)"
            checked={vehicleTypeFilters.jetSkis}
            onCheckedChange={(val) => handleVehicleTypeToggle("jetSkis", val)}
          />
          <CheckboxButton
            label="Medium Duty Box Trucks (44)"
            checked={vehicleTypeFilters.mediumDutyBox}
            onCheckedChange={(val) => handleVehicleTypeToggle("mediumDutyBox", val)}
          />
          <CheckboxButton
            label="Pickup Trucks (20)"
            checked={vehicleTypeFilters.pickupTrucks}
            onCheckedChange={(val) => handleVehicleTypeToggle("pickupTrucks", val)}
          />
        </div>
      </FilterSection>

      {/* MAKE */}
      <FilterSection title="Make" isOpen={openSections.make} onToggle={() => toggleSection("make")}>
        <Flex padding={"0 0 16px 0"}>
          <CustomInput
            placeholder={"Search"}
            suffix={<img src={searchIcon} alt="search" className={styles.icon} />}
          />
        </Flex>

        <div className={styles.scrollArea}>
          <CheckboxButton
            label="Acura (29)"
            checked={makeFilters.acura}
            onCheckedChange={(val) => handleMakeToggle("acura", val)}
          />
          <CheckboxButton
            label="Alfa Romeo (5)"
            checked={makeFilters.alfaRomeo}
            onCheckedChange={(val) => handleMakeToggle("alfaRomeo", val)}
          />
          <CheckboxButton
            label="Aspt (1)"
            checked={makeFilters.aspt}
            onCheckedChange={(val) => handleMakeToggle("aspt", val)}
          />
          <CheckboxButton
            label="Audi (73)"
            checked={makeFilters.audi}
            onCheckedChange={(val) => handleMakeToggle("audi", val)}
          />
          <CheckboxButton
            label="Bentley (6)"
            checked={makeFilters.bentley}
            onCheckedChange={(val) => handleMakeToggle("bentley", val)}
          />
          <CheckboxButton
            label="Blue Bird (4)"
            checked={makeFilters.blueBird}
            onCheckedChange={(val) => handleMakeToggle("blueBird", val)}
          />
          <CheckboxButton
            label="BMW (111)"
            checked={makeFilters.bmw}
            onCheckedChange={(val) => handleMakeToggle("bmw", val)}
          />
          <CheckboxButton
            label="Buick (42)"
            checked={makeFilters.buick}
            onCheckedChange={(val) => handleMakeToggle("buick", val)}
          />
          <CheckboxButton
            label="Buj (1)"
            checked={makeFilters.buj}
            onCheckedChange={(val) => handleMakeToggle("buj", val)}
          />
          <CheckboxButton
            label="Cadillac (40)"
            checked={makeFilters.cadillac}
            onCheckedChange={(val) => handleMakeToggle("cadillac", val)}
          />
        </div>
      </FilterSection>

      {/* YEAR */}
      <FilterSection
        title="Year of manufacture"
        isOpen={openSections.year}
        onToggle={() => toggleSection("year")}
      >
        <div className={styles.rangeBlock}>
          <div className={styles.rangeInputsRow}>
            <div className={styles.rangeInput}>
              <label>from</label>
              <input value={yearRange[0]} readOnly />
            </div>
            <div className={styles.dash}>
              <img src={minusIcon} alt={"expand"} />
            </div>
            <div className={styles.rangeInput}>
              <label>to</label>
              <input value={yearRange[1]} readOnly />
            </div>
          </div>

          <Flex vertical gap={4}>
            <Flex alignItems={"center"} justify={"space-between"} className={styles.sliderHeaderRow}>
              <span className={styles.sliderEdgeLabel}>
                {yearRange[0]} <span className={styles.sliderUnit}>Year</span>
              </span>
              <span className={styles.sliderEdgeLabel}>
                {yearRange[1]} <span className={styles.sliderUnit}>Year</span>
              </span>
            </Flex>

            <CustomSlider
              range
              min={1900}
              max={2025}
              value={yearRange}
              onChange={(val) => setYearRange(val as [number, number])}
              className={styles.sliderStyled}
            />
          </Flex>

          <button className={styles.applyBtn}>Apply</button>
        </div>
      </FilterSection>

      {/* PRICE */}
      <FilterSection title="Estimated price USD" isOpen={openSections.price} onToggle={() => toggleSection("price")}>
        <div className={styles.rangeBlock}>
          <div className={styles.rangeInputsRow}>
            <div className={styles.rangeInput}>
              <label>min</label>
              <input value={priceRange[0]} readOnly />
            </div>
            <div className={styles.dash}>
              <img src={minusIcon} alt="to" />
            </div>
            <div className={styles.rangeInput}>
              <label>max</label>
              <input value={priceRange[1]} readOnly />
            </div>
          </div>

          <Flex vertical gap={4}>
            <Flex alignItems="center" justify="space-between" className={styles.sliderHeaderRow}>
              <span className={styles.sliderEdgeLabel}>
                ${priceRange[0].toLocaleString()}
                <span className={styles.sliderUnit}> $</span>
              </span>
              <span className={styles.sliderEdgeLabel}>
                ${priceRange[1].toLocaleString()}
                <span className={styles.sliderUnit}> $</span>
              </span>
            </Flex>

            <CustomSlider
              range
              min={0}
              max={100000}
              step={100}
              value={priceRange}
              onChange={(val) => setPriceRange(val as [number, number])}
              className={styles.sliderStyled}
            />
          </Flex>

          <button className={styles.applyBtn}>Apply</button>
        </div>
      </FilterSection>

      {/* ODOMETER */}
      <FilterSection
        title="Odometer"
        isOpen={openSections.odometer}
        onToggle={() => toggleSection("odometer")}
      >
        <div className={styles.rangeBlock}>
          <div className={styles.rangeInputsRow}>
            <div className={styles.rangeInput}>
              <label>min</label>
              <input value={mileageRange[0]} readOnly />
            </div>
            <div className={styles.dash}>
              <img src={minusIcon} alt="to" />
            </div>
            <div className={styles.rangeInput}>
              <label>max</label>
              <input value={mileageRange[1]} readOnly />
            </div>
          </div>

          <Flex vertical gap={4}>
            <Flex alignItems="center" justify="space-between" className={styles.sliderHeaderRow}>
              <span className={styles.sliderEdgeLabel}>
                {mileageRange[0].toLocaleString()} <span className={styles.sliderUnit}>Miles</span>
              </span>
              <span className={styles.sliderEdgeLabel}>
                {mileageRange[1].toLocaleString()} <span className={styles.sliderUnit}>Miles</span>
              </span>
            </Flex>

            <CustomSlider
              range
              min={0}
              max={250000}
              step={1000}
              value={mileageRange}
              onChange={(val) => setMileageRange(val as [number, number])}
              className={styles.sliderStyled}
            />
          </Flex>

          <button className={styles.applyBtn}>Apply</button>
        </div>
      </FilterSection>

      {/* LOCATION (ZIP) */}
      <FilterSection
        title="Search near ZIP code"
        isOpen={openSections.location}
        onToggle={() => toggleSection("location")}
      >
        <div className={styles.rangeBlock}>
          <Flex alignItems={"center"} gap={4}>
            <CustomInput placeholder={"Zip code"} />
            <CustomSelect
              textStyle={{ fontSize: "16px" }}
              height={44}
              placeholder="50 mi"
            />
          </Flex>
          <button className={styles.applyBtn}>Apply</button>
        </div>
      </FilterSection>

      {/* SALE DATE */}
      <FilterSection title="Sale date" isOpen={openSections.saleDate} onToggle={() => toggleSection("saleDate")}>
        <div className={styles.saleDateCard}>
          <div className={styles.dateFieldBlock}>
            <label className={styles.dateFieldLabel}>From</label>
            <div className={styles.dateInputWrapper}>
              <DatePicker
                value={fromDate}
                onChange={(val) => setFromDate(val)}
                format="MM/DD/YYYY"
                placeholder="mm/dd/yyyy"
                allowClear={false}
                suffixIcon={<img src={calendarIcon} className={styles.calendarIcon} alt="calendar" />}
                className={styles.datePickerStyled}
              />
            </div>
          </div>

          <div className={styles.dateFieldBlock}>
            <label className={styles.dateFieldLabel}>To</label>
            <div className={styles.dateInputWrapper}>
              <DatePicker
                value={toDate}
                onChange={(val) => setToDate(val)}
                format="MM/DD/YYYY"
                placeholder="mm/dd/yyyy"
                allowClear={false}
                suffixIcon={<img src={calendarIcon} className={styles.calendarIcon} alt="calendar" />}
                className={styles.datePickerStyled}
              />
            </div>
          </div>
        </div>
      </FilterSection>
    </div>
  );
}
