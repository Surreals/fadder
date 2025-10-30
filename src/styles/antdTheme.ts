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
    Pagination: {
      colorPrimary: "#FFAF0E",
      colorPrimaryBorder: "#FFAF0E",
      colorPrimaryHover: "#0F0F0F",
      borderRadius: 12,
      itemActiveBg: "#FFAF0E",
      itemSize: 44,
      itemBg: "#FFFFFF",
      itemActiveColor: "#0F0F0F",
      colorText: "#0F0F0F",
      colorTextDisabled: "#7B7B7B",
    },
    DatePicker: {
      controlHeight: 52,
      borderRadius: 14,
      paddingInline: 16,
      fontSize: 20,
      colorTextPlaceholder: "#7B7B7B",
      colorText: "#0F0F0F",
      colorBorder: "transparent",
      colorBgContainer: "#fff",
      boxShadow:
        "0 0 8px 0 rgba(0, 0, 0, 0.12)",
    },
  },
};


