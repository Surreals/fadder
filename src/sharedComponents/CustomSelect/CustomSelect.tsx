import React, { useState } from 'react';
import { Select, type SelectProps, ConfigProvider } from 'antd';

import ArrowUp from '@icons/arrowUp.svg';
import ArrowDown from '@icons/arrowDown.svg';

import styles from './CustomSelect.module.scss';

export interface SelectTextStyle {
  fontSize?: number | string;
  color?: string;
  fontWeight?: number | string;
  lineHeight?: number | string;
}

interface CustomSelectProps extends SelectProps {
  width?: number | string;
  height?: number | string;
  textStyle?: SelectTextStyle;
  bgColor?: string;
  padding?: string | number;
}

export default function CustomSelect({
                                       width = '100%',
                                       height = 40,
                                       textStyle,
                                       bgColor = '#f5f6f8',
                                       padding = '8px 14px',
                                       className,
                                       ...props
                                     }: CustomSelectProps) {
  const [open, setOpen] = useState(false);

  const rootStyle: React.CSSProperties = {
    width,
    ...( {
      '--select-height': typeof height === 'number' ? `${height}px` : height,
      '--select-font-size': textStyle?.fontSize ?? '12px',
      '--select-color': textStyle?.color ?? '#7B7B7B',
      '--select-font-weight': textStyle?.fontWeight ?? '400',
      '--select-line-height': textStyle?.lineHeight ?? '14px',
      '--select-bg-color': bgColor,
      '--select-padding': typeof padding === 'number' ? `${padding}px` : padding,
    } as React.CSSProperties),
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorBgContainer: bgColor,
          },
        },
      }}
    >
      <Select
        {...props}
        open={open}
        onDropdownVisibleChange={setOpen}
        style={rootStyle}
        className={`${styles.customSelect} ${className ?? ''}`}
        suffixIcon={
          open ? (
            <img src={ArrowUp} alt="opened" className={styles.icon} />
          ) : (
            <img src={ArrowDown} alt="closed" className={styles.icon} />
          )
        }
      />
    </ConfigProvider>
  );
}
