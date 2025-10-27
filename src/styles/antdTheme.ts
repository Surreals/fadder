import type { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    fontFamily: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  components: {
    Select: {
      controlHeight: 40,
      borderRadius: 8,
      colorText: '#7B7B7B',
      colorTextPlaceholder: '#7B7B7B',
      colorBgContainer: 'none',
      fontSize: 12,
      lineHeight: 1.2,
      fontWeightStrong: 400,
      colorBorder: 'none',
      colorPrimaryHover: '#CCC',
    },
    Input: {
      controlHeight: 40,
      borderRadius: 8,
      colorBgContainer: '#F5F7FA',
      colorText: '#1F2937',
      colorTextPlaceholder: '#7B7B7B',
      fontSize: 12,
      activeBorderColor: 'none',
      hoverBorderColor: 'none',
      lineHeight: 1.2,
      colorBorder: 'transparent',
      controlPaddingHorizontal: 24,
      controlOutline: 'none',
    },
  },
};


