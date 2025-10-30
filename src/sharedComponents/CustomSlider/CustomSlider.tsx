import React from "react";
import { ConfigProvider, Slider } from "antd";
import type { SliderSingleProps } from "antd";

interface CustomSliderProps extends SliderSingleProps {
  range?: boolean;
}

const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            railSize: 2,
            trackBg: "#000000",
            trackHoverBg: "#000000",
            handleColor: "#000000",
            handleActiveColor: "#000000",
            colorPrimaryBorderHover: "#FFC94D",
            handleSize: 20,
            handleSizeHover: 20,
            handleLineWidth: 2,
            handleActiveOutlineColor: "none",
            handleLineWidthHover: 2,
            handleBorderColor: "#000000",
            railBg: "#000000",
            railHoverBg: "#000000",
          },
        },
      }}
    >
      <Slider {...props} />
    </ConfigProvider>
  );
};

export default CustomSlider;
