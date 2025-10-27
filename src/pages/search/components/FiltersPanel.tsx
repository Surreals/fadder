import React, { useState } from "react";
import Flex from "@components/Flex";
import { Slider, ConfigProvider } from "antd";
import CheckboxButton from "@components/Checkbox/index";
import CustomSelect from "@components/CustomSelect/CustomSelect";

import styles from "./FiltersPanel.module.scss";

export default function FiltersPanel() {
  const [openSections, setOpenSections] = useState({
    select: true,
    auctionType: true,
    lotStatus: true,
    vehicleType: true,
    make: true,
    model: true,
    year: true,
    price: true,
    odometer: true,
    damage: true,
    location: true,
  });
  const [yearRange, setYearRange] = useState<[number, number]>([1900, 2025]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [mileageRange, setMileageRange] = useState<[number, number]>([0, 250000]);

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.panel}>
      {/* SECTION: Select */}
      <FilterSection
        title="Select"
        isOpen={openSections.select}
        onToggle={() => toggleSection("select")}
      >
        <Flex vertical gap={8}>
          <CheckboxButton defaultChecked>
            Vehicles Only
          </CheckboxButton>
          <CheckboxButton>
            Newly added vehicles
          </CheckboxButton>
          <CheckboxButton>
            Exclude upcoming auction vehicles
          </CheckboxButton>
          <CheckboxButton>
            Show watchlist lots only
          </CheckboxButton>
        </Flex>
      </FilterSection>

      {/* SECTION: Auction type */}
      <FilterSection
        title="Auction type"
        isOpen={openSections.auctionType}
        onToggle={() => toggleSection("auctionType")}
      >
        <Flex vertical gap={8}>
          <CheckboxButton defaultChecked>
            All
          </CheckboxButton>
          <CheckboxButton>Copart</CheckboxButton>
          <CheckboxButton>IAAI</CheckboxButton>
        </Flex>
      </FilterSection>

      {/* SECTION: Lot status */}
      <FilterSection
        title="Lot status"
        isOpen={openSections.lotStatus}
        onToggle={() => toggleSection("lotStatus")}
        extraRight="—"
      >
        <Flex vertical gap={8}>
          <CheckboxButton defaultChecked>Active</CheckboxButton>
          <CheckboxButton>Sold</CheckboxButton>
          <CheckboxButton>Upcoming</CheckboxButton>
        </Flex>
      </FilterSection>

      {/* SECTION: Vehicle type */}
      <FilterSection
        title="Vehicle type"
        isOpen={openSections.vehicleType}
        onToggle={() => toggleSection("vehicleType")}
      >
        {/* Search input + чекбокси */}
        <div className={styles.searchRow}>
          <input
            className={styles.searchInput}
            placeholder="Search"
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>

        <div className={styles.scrollArea}>
          <CheckboxButton defaultChecked>
            ATVS (11)
          </CheckboxButton>
          <CheckboxButton>Boats (5)</CheckboxButton>
          <CheckboxButton>Buses (5)</CheckboxButton>
          <CheckboxButton>Construction equipment (1)</CheckboxButton>
          <CheckboxButton>Heavy Duty Trucks (6)</CheckboxButton>
          {/* ...далі як на макеті */}
        </div>
      </FilterSection>

      {/* SECTION: Make */}
      <FilterSection
        title="Make"
        isOpen={openSections.make}
        onToggle={() => toggleSection("make")}
      >
        <div className={styles.searchRow}>
          <input
            className={styles.searchInput}
            placeholder="Search"
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>

        <div className={styles.scrollArea}>
          <CheckboxButton defaultChecked>
            Acura (29)
          </CheckboxButton>
          <CheckboxButton>Alfa Romeo (5)</CheckboxButton>
          <CheckboxButton>Audi (73)</CheckboxButton>
          <CheckboxButton>BMW (111)</CheckboxButton>
          {/* ... */}
        </div>
      </FilterSection>

      {/* SECTION: Model */}
      <FilterSection
        title="Model"
        isOpen={openSections.model}
        onToggle={() => toggleSection("model")}
        extraRight="+"
      >
        {/* ти зможеш тут рендерити дропдауни конкретних моделей */}
        <div className={styles.placeholderBox}>[Model filter UI]</div>
      </FilterSection>

      {/* SECTION: Year of manufacture */}
      <FilterSection
        title="Year of manufacture"
        isOpen={openSections.year}
        onToggle={() => toggleSection("year")}
      >
        <div className={styles.rangeBlock}>
          <div className={styles.rangeInputsRow}>
            <div className={styles.rangeInput}>
              <label>from</label>
              <input
                value={yearRange[0]}
                readOnly
              />
            </div>
            <div className={styles.dash}>–</div>
            <div className={styles.rangeInput}>
              <label>to</label>
              <input
                value={yearRange[1]}
                readOnly
              />
            </div>
          </div>

          <div className={styles.sliderHeaderRow}>
      <span className={styles.sliderEdgeLabel}>
        {yearRange[0]} <span className={styles.sliderUnit}>Year</span>
      </span>
            <span className={styles.sliderEdgeLabelRight}>
        {yearRange[1]} <span className={styles.sliderUnit}>Year</span>
      </span>
          </div>

          <ConfigProvider
            theme={{
              components: {
                Slider: {
                  railSize: 2,
                  trackBg: '#000000',
                  trackHoverBg: '#000000',
                  handleColor: '#FFFFFF',
                  handleActiveColor: '#FFFFFF',
                  handleSize: 20,
                  handleSizeHover: 20,
                  handleLineWidth: 2,
                  handleLineWidthHover: 2,
                  handleBorderColor: '#000000',
                  railBg: '#000000',
                  railHoverBg: '#000000',
                },
              },
            }}
          >
            <Slider
              range
              min={1900}
              max={2025}
              value={yearRange}
              onChange={(val) => setYearRange(val as [number, number])}
              className={styles.sliderStyled}
            />
          </ConfigProvider>

          <button className={styles.applyBtn}>Apply</button>
        </div>
      </FilterSection>

      {/* SECTION: Estimated price USD */}
      <FilterSection
        title="Estimated price USD"
        isOpen={openSections.price}
        onToggle={() => toggleSection("price")}
      >
        <div className={styles.rangeBlock}>
          <div className={styles.rangeInputsRow}>
            <div className={styles.rangeInput}>
              <label>min</label>
              <input
                value={priceRange[0]}
                readOnly
              />
            </div>
            <div className={styles.dash}>–</div>
            <div className={styles.rangeInput}>
              <label>max</label>
              <input
                value={priceRange[1]}
                readOnly
              />
            </div>
          </div>

          <div className={styles.sliderHeaderRow}>
      <span className={styles.sliderEdgeLabel}>
        ${priceRange[0].toLocaleString()}{" "}
        <span className={styles.sliderUnit}>$</span>
      </span>
            <span className={styles.sliderEdgeLabelRight}>
        ${priceRange[1].toLocaleString()}{" "}
              <span className={styles.sliderUnit}>$</span>
      </span>
          </div>

          <ConfigProvider
            theme={{
              components: {
                Slider: {
                  railSize: 2,
                  trackBg: '#000000',
                  trackHoverBg: '#000000',
                  handleColor: '#FFFFFF',
                  handleActiveColor: '#FFFFFF',
                  handleSize: 20,
                  handleSizeHover: 20,
                  handleLineWidth: 2,
                  handleLineWidthHover: 2,
                  handleBorderColor: '#000000',
                  railBg: '#000000',
                  railHoverBg: '#000000',
                },
              },
            }}
          >
            <Slider
              range
              min={0}
              max={100000}
              step={100}
              value={priceRange}
              onChange={(val) => setPriceRange(val as [number, number])}
              className={styles.sliderStyled}
            />
          </ConfigProvider>

          <button className={styles.applyBtn}>Apply</button>
        </div>
      </FilterSection>


      {/* SECTION: Odometer */}
      <FilterSection
        title="Odometer"
        isOpen={openSections.odometer}
        onToggle={() => toggleSection("odometer")}
        extraRight="—"
      >
        <div className={styles.rangeBlock}>
          <div className={styles.rangeInputsRow}>
            <div className={styles.rangeInput}>
              <label>min</label>
              <input
                value={mileageRange[0]}
                readOnly
              />
            </div>
            <div className={styles.dash}>–</div>
            <div className={styles.rangeInput}>
              <label>max</label>
              <input
                value={mileageRange[1]}
                readOnly
              />
            </div>
          </div>

          <div className={styles.sliderHeaderRow}>
      <span className={styles.sliderEdgeLabel}>
        {mileageRange[0].toLocaleString()}{" "}
        <span className={styles.sliderUnit}>Miles</span>
      </span>
            <span className={styles.sliderEdgeLabelRight}>
        {mileageRange[1].toLocaleString()}+{" "}
              <span className={styles.sliderUnit}>Miles</span>
      </span>
          </div>

          <ConfigProvider
            theme={{
              components: {
                Slider: {
                  railSize: 2,
                  trackBg: '#000000',
                  trackHoverBg: '#000000',
                  handleColor: '#FFFFFF',
                  handleActiveColor: '#FFFFFF',
                  handleSize: 20,
                  handleSizeHover: 20,
                  handleLineWidth: 2,
                  handleLineWidthHover: 2,
                  handleBorderColor: '#000000',
                  railBg: '#000000',
                  railHoverBg: '#000000',
                },
              },
            }}
          >
            <Slider
              range
              min={0}
              max={250000}
              step={1000}
              value={mileageRange}
              onChange={(val) => setMileageRange(val as [number, number])}
              className={styles.sliderStyled}
            />
          </ConfigProvider>

          <button className={styles.applyBtn}>Apply</button>
        </div>
      </FilterSection>


      {/* SECTION: Damage type */}
      <FilterSection
        title="Damage type"
        isOpen={openSections.damage}
        onToggle={() => toggleSection("damage")}
      >
        <div className={styles.searchRow}>
          <input
            className={styles.searchInput}
            placeholder="Search"
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>

        <div className={styles.scrollArea}>
          <CheckboxButton>
            Normal Wear (5533)
          </CheckboxButton>

          <Flex vertical gap={4} className={styles.damageSubgroup}>
            <div className={styles.subgroupTitle}>Low Damage</div>
            <CheckboxButton defaultChecked>
              Hail (8,287)
            </CheckboxButton>
            <CheckboxButton defaultChecked>
              Minor Dent/Scratches (10.5%)
            </CheckboxButton>
          </Flex>

          <Flex vertical gap={4} className={styles.damageSubgroup}>
            <div className={styles.subgroupTitle}>Medium - Heavy Damage</div>
            <CheckboxButton>
              All Over (1,753)
            </CheckboxButton>
            <CheckboxButton defaultChecked>
              Biohazard/Chemical (169)
            </CheckboxButton>
            <CheckboxButton>
              Burn (115)
            </CheckboxButton>
            {/* ... */}
          </Flex>
        </div>
      </FilterSection>

      {/* SECTION: Location */}
      <FilterSection
        title="Location"
        isOpen={openSections.location}
        onToggle={() => toggleSection("location")}
        extraRight="+"
      >
        <Flex vertical gap={8}>
          <div className={styles.locationRow}>
            <div className={styles.locationInputWrapper}>
              <label>Search near ZIP code</label>
              <div className={styles.locationInputs}>
                <input className={styles.zipInput} placeholder="Zip code" />
                <CustomSelect
                  width={90}
                  height={36}
                  padding="8px 10px"
                  bgColor="#fff"
                  textStyle={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#0F0F0F",
                  }}
                  placeholder="50 mi"
                />
              </div>
            </div>
            <button className={styles.searchBtn}>Search</button>
          </div>
        </Flex>
      </FilterSection>
    </div>
  );
}


interface SectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  extraRight?: string;
  children: React.ReactNode;
}

function FilterSection({ title, isOpen, onToggle, extraRight, children }: SectionProps) {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader} onClick={onToggle}>
        <span className={styles.sectionTitle}>{title}</span>
        <span className={styles.sectionToggle}>
          {extraRight ?? (isOpen ? "—" : "+")}
        </span>
      </div>

      {isOpen && (
        <div className={styles.sectionBody}>
          {children}
        </div>
      )}
    </div>
  );
}
