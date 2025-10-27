import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  accessible?: boolean;
}

const Box = ({ children, className, accessible = false, tabIndex, onKeyDown, ...props }: IProps) => (
  <div
    tabIndex={accessible ? 0 : tabIndex}
    onKeyDown={accessible ? (e) => e.key === 'Enter' && e.currentTarget.click() : onKeyDown}
    className={className}
    {...props}
  >
    {children}
  </div>
);

export default Box;
