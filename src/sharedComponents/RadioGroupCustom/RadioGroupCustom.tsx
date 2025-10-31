import React from 'react';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import styles from './RadioGroup.module.scss';

interface RadioOption {
  label: string;
  value: string;
}

interface CustomRadioGroupProps {
  label?: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
}

export default function RadioGroupCustom({ label, options, value, onChange }: CustomRadioGroupProps) {
  const handleChange = (e: RadioChangeEvent) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.radioGroupContainer}>
      {label && <label className={styles.radioLabel}>{label}</label>}
      <Radio.Group onChange={handleChange} value={value} className={styles.radioGroup}>
        {options.map((opt) => (
          <Radio key={opt.value} value={opt.value} className={styles.radioItem}>
            {opt.label}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  );
}
