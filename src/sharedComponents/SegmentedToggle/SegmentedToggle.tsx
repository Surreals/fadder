import React from 'react';
import classNames from 'classnames';
import styles from './SegmentedToggle.module.scss';

export interface SegmentedOption {
  label: string;
  value: string;
}

interface SegmentedToggleProps {
  options: SegmentedOption[];
  value: string;
  onChange: (newValue: string) => void;
  className?: string;
}

export default function SegmentedToggle({
                                          options,
                                          value,
                                          onChange,
                                          className,
                                        }: SegmentedToggleProps) {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {options.map((opt) => {
        const isActive = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            className={classNames(styles.segment, {
              [styles.active]: isActive,
            })}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}