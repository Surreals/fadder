import React from 'react';
import { Typography, Breadcrumb as AntBreadcrumb } from 'antd';

import Box from '../Box';

import styles from './Breadcrumb.module.scss';

const { Text } = Typography;

interface IProps {
  backTo?: string;
  backToIntermediate?: string;
  onBack?: () => void;
  backToFunction?: () => void;
  backToIntermediateFunction?: () => void;
  firstText: string;
  secondText: string;
  secondIntermediateText?: string;
}

const Breadcrumb = ({
  backToFunction,
  backTo,
  backToIntermediate,
  backToIntermediateFunction,
  firstText,
  secondText,
  secondIntermediateText,
}: IProps) => {

  const handleNavigation = (path: string, customFunction?: () => void) => {
    if (customFunction) {
      customFunction();
    } else {
      window.location.href = path;
    }
  };

  const SeparatorIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
      <path d="M1 1L5 6L1 11" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );

  return (
    <Box className={styles.breadcrumb}>
      <AntBreadcrumb
        separator={SeparatorIcon}
        items={[
          {
            title: (
              <span
                onClick={() => handleNavigation(backTo || "/", backToFunction)}
                className={styles.breadcrumbText}
                style={{ cursor: "pointer" }}
              >
                {firstText}
              </span>
            ),
          },
          {
            title: secondIntermediateText && (
              <span
                onClick={() => handleNavigation(backToIntermediate || "/", backToIntermediateFunction)}
                className={styles.breadcrumbText}
                style={{ cursor: "pointer" }}
              >
                {secondIntermediateText}
              </span>
            ),
          },
          {
            title: <Text className={styles.breadcrumbTextActive}>{secondText}</Text>,
          },
        ]}
      />
    </Box>
  );
};

export default Breadcrumb;