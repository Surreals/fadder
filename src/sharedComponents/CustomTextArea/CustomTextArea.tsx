import React from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';
import styles from './CustomInput.module.scss';

const { TextArea } = Input;

export default function CustomTextArea(props: TextAreaProps) {
  return (
    <div className={styles.inputLikeSelect}>
      <TextArea {...props} autoSize={props.autoSize ?? { minRows: 4 }} />
    </div>
  );
}