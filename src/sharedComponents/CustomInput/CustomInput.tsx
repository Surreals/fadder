import React from 'react';
import { Input, type InputProps } from 'antd';

import styles from './CustomInput.module.scss';

export default function CustomInput(props: InputProps) {
  return <Input {...props} className={styles.inputLikeSelect} />;
}