import React, { useState } from "react";

import PlusIcon from "@assets/icons/plusIcon.svg"
import MinusIcon from "@assets/icons/minusIcon.svg"

import styles from "./FAQSection.module.scss";

type Item = { id: string; q: string; a: string };

const items: Item[] = [
  {
    id: "1",
    q: "Where do the cars come from?",
    a: "Vehicles are sourced from major US auctions, fleet turn-ins, dealerships and insurance companies.",
  },
  {
    id: "2",
    q: "Can I check the condition of the car before buying?",
    a: "Yes, you can review detailed inspection reports, photos, and history. For some vehicles, we also provide independent third-party inspections.",
  },
  {
    id: "3",
    q: "What documents do I receive with the car?",
    a: "You will receive the vehicle title, purchase invoice, and customs documents (if applicable). All paperwork is prepared to register the car in your country.",
  },
  {
    id: "4",
    q: "How can I participate in the auction?",
    a: "Simply register on our website, place a refundable deposit, and you’ll be able to bid on cars immediately.",
  },
  {
    id: "5",
    q: "How much time do I have to pay after winning?",
    a: "Payment is usually required within 2 business days after the auction ends.",
  },
  {
    id: "6",
    q: "How long does delivery take?",
    a: "Domestic trucking to port takes 2–7 days, ocean shipping 14–35 days depending on destination.",
  },
  {
    id: "7",
    q: "Are there any additional fees?",
    a: "Auction fees, logistics and import costs may apply depending on the vehicle and route.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(items[1].id); // друга відкрита як на скріні

  return (
    <section className={styles.faqWrap} aria-label="FAQ">
      <h2 className={styles.title}>FAQ</h2>

      <ul className={styles.list}>
        {items.map((it) => {
          const isOpen = openId === it.id;
          return (
            <li key={it.id} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
              <button
                className={styles.head}
                onClick={() => setOpenId(isOpen ? null : it.id)}
                aria-expanded={isOpen}
              >
                <span className={styles.q}>{it.q}</span>

                <span className={styles.icon} aria-hidden>
  <img src={PlusIcon} className={`${styles.iconImg} ${!isOpen ? styles.show : ""}`} alt="expand" />
  <img src={MinusIcon} className={`${styles.iconImg} ${isOpen ? styles.show : ""}`} alt="collapse" />
</span>
              </button>

              <div className={styles.body} role="region">
                <p className={styles.a}>{it.a}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
