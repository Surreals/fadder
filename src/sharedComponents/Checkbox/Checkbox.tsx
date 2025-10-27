import React from 'react';
import { Checkbox, ConfigProvider } from 'antd';
import type { CheckboxProps } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

interface IProps extends CheckboxProps {
  size?: number;
  lineWidth?: number;
  borderRadius?: number;
  onCheckedChange?: (checked: boolean) => void;
  bgColor?: string;
  borderColor?: string;
}

const CheckboxButton: React.FC<IProps> = ({
  bgColor = 'var(--neutral-10)',
  children,
  size = 20,
  lineWidth = 2,
  borderRadius = 4,
  onCheckedChange,
  borderColor = '#7B7B7B',
  tabIndex,
  ...props
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

  const handleChange = (e: CheckboxChangeEvent) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked);
    }
  };

  return (
    <ConfigProvider theme={theme}>
      <Checkbox onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()} {...props} onChange={handleChange}>
        {children}
      </Checkbox>
    </ConfigProvider>
  );
};

export default CheckboxButton;
