import React, { useState } from "react";
import { Pagination, ConfigProvider } from "antd";
import Flex from "@components/Flex";
import CarCard, { CarData } from "./CarCard";

import styles from "./CarList.module.scss";

const MOCK_CARS: CarData[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  year: 1981,
  make: "Chevrolet",
  model: "Corvette",
  odometer: "25 145 mi (40 467 km)",
  engine: "5.7L, V8",
  transmission: "Automatic",
  fuelType: "Gasoline",
  driveType: "Rear wheel drive",
  isAvailable: true,
  auction: i % 2 === 0 ? "Copart" : "IAAI",
  currentBid: "$725",
  imageUrl:
    "https://via.placeholder.com/640x360.png?text=Car+Image",
  timer: "1 d 21 h 23 min 00 sec",
}));

export default function CarList() {
  const [page, setPage] = useState(2);
  const totalPages = 127;

  const carsToRender = MOCK_CARS;

  return (
    <Flex vertical gap={24} className={styles.listWrapper}>
      <Flex vertical gap={16}>
        {carsToRender.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </Flex>

      <div className={styles.paginationSection}>
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                colorPrimary: "#FFC94D",
                colorPrimaryBorder: "#FFC94D",
                colorPrimaryHover: "#FFC94D",
                borderRadius: 12,
                itemActiveBg: "#FFC94D",
                itemSize: 44,
                itemBg: "#FFFFFF",
                itemActiveColor: "#0F0F0F",
                colorText: "#0F0F0F",
                colorTextDisabled: "#7B7B7B",
              },
            },
          }}
        >
          <Pagination
            className={styles.pagination}
            current={page}
            total={totalPages * 10}
            pageSize={10}
            showSizeChanger={false}
            onChange={(p) => setPage(p)}
            showQuickJumper={false}
          />
        </ConfigProvider>

        <p className={styles.paginationDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </Flex>
  );
}
