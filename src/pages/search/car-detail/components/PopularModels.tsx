import React from "react";
import Flex from "@components/Flex";
import styles from "./PopularModels.module.scss";

export type ModelItem = {
  id: string;
  label: string;
};

type Props = {
  title?: string;
  items: ModelItem[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  className?: string;
};

export default function PopularModels({
                                        title = "Popular Models",
                                        items,
                                        selectedId = null,
                                        onSelect,
                                        className,
                                      }: Props) {
  return (
    <section className={`${styles.wrap} ${className ?? ""}`}>
      <h2 className={styles.title}>{title}</h2>

      <Flex className={styles.chips} gap={12} style={{ flexWrap: "wrap" }}>
        {items.map((m) => {
          const isActive = selectedId === m.id;
          return (
            <button
              key={m.id}
              type="button"
              className={`${styles.chip} ${isActive ? styles.active : ""}`}
              onClick={() => onSelect?.(m.id)}
              aria-pressed={isActive}
              title={m.label}
            >
              {m.label}
            </button>
          );
        })}
      </Flex>
    </section>
  );
}
