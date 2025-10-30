import React, { useCallback } from 'react';
import { Checkbox, ConfigProvider } from 'antd';
import type { CheckboxProps } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import styles from './CheckboxButton.module.scss';

interface IProps extends Omit<CheckboxProps, 'onChange' | 'checked' | 'defaultChecked'> {
  size?: number;
  lineWidth?: number;
  borderRadius?: number;
  bgColor?: string;
  borderColor?: string;

  checked?: boolean;
  isCopart?: boolean;
  isIAAI?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  layout?: 'default' | 'text-left';
  label: string;
}

const CheckboxButton: React.FC<IProps> = ({
                                            size = 20,
                                            lineWidth = 2,
                                            borderRadius = 4,
                                            bgColor = 'var(--neutral-10)',
                                            borderColor = '#7B7B7B',
                                            checked,
                                            defaultChecked,
                                            onCheckedChange,
                                            layout = 'default',
                                            isCopart = false,
                                            isIAAI = false,
                                            label,
                                            disabled,
                                            ...antdCheckboxProps
                                          }) => {
  const theme = {
    components: {
      Checkbox: {
        colorPrimary: '#fff',
        colorWhite: 'var(--Text-Accented-BLUE, #2571FF)',
        controlInteractiveSize: size,
        lineWidth: lineWidth,
        borderRadiusSM: borderRadius,
        colorBgContainer: bgColor,
        colorBorder: borderColor,
        colorPrimaryBorder: 'var(--primary-500)',
        lineWidthFocus: 2,
      },
    },
  };

  const handleChange = useCallback(
    (e: CheckboxChangeEvent) => {
      onCheckedChange?.(e.target.checked);
    },
    [onCheckedChange]
  );

  const handleRowClick = () => {
    if (disabled) return;

    if (typeof checked === 'boolean') {
      onCheckedChange?.(!checked);
    }

    if (!('checked' in ({} as any)) && checkboxRef.current) {
      checkboxRef.current.click();
    }
  };


  const checkboxRef = React.useRef<HTMLLabelElement | null>(null);


  if (layout === 'text-left') {
    return (
      <ConfigProvider theme={theme}>
        <div
          className={styles.checkboxRow}
          onClick={handleRowClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleRowClick()}
        >
          <span className={styles.checkboxLabel}>{label}</span>

          <Checkbox
            ref={checkboxRef as any}
            onChange={handleChange}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            {...antdCheckboxProps}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.stopPropagation();
              }
            }}
          />
        </div>
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider theme={theme}>
      <div
        className={styles.checkboxRow}
        onClick={handleRowClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleRowClick()}
      >
        <Checkbox
          ref={checkboxRef as any}
          onChange={handleChange}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          {...antdCheckboxProps}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.stopPropagation();
            }
          }}
        >
          <span
            className={
            `${styles.checkboxLabel} ${
              isCopart ? styles.copadrBox : ""
            }
            ${
              isIAAI ? styles.IAAIBox : ""
            }`}
          >{label}</span>
        </Checkbox>
      </div>
    </ConfigProvider>
  );
};

export default CheckboxButton;
