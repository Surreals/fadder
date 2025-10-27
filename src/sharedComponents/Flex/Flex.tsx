import React from 'react';
import { Flex as AntdFlex, ButtonProps } from 'antd';

interface IProps extends ButtonProps {
  gap?: number;
  alignItems?: string;
  vertical?: boolean;
  justify?: string;
  cursor?: string;
  width?: string;
  padding?: string;
  height?: string;
  accessible?: boolean;
  displayState?: string;
}

const Flex = React.forwardRef<HTMLElement, IProps>(
  ({ children, gap, cursor, padding, alignItems, justify, displayState, onClick, width, height, accessible = false, tabIndex, onKeyDown, ...props }, ref) => (
    <AntdFlex
      {...props}
      ref={ref}
      onClick={onClick}
      tabIndex={accessible ? 0 : tabIndex}
      onKeyDown={accessible ? (e) => e.key === 'Enter' && e.currentTarget.click() : onKeyDown}
      style={{ gap, alignItems, padding: padding, justifyContent: justify, width: width, height: height, display: displayState, cursor: cursor, ...props.style }}
    >
      {children}
    </AntdFlex>
  ),
);

export default Flex;
