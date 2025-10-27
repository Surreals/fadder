import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import type { SelectProps } from 'antd';
import CustomSelect from "@components/CustomSelect/CustomSelect";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
  { code: 'uk', name: 'Українська' },
  { code: 'ru', name: 'Русский' },
  { code: 'de', name: 'Deutsch' },
];

export default function LanguageSelect() {
  const { i18n } = useTranslation();

  const options = useMemo(
    () =>
      languages.map((lang) => ({
        value: lang.code,
        label: lang.name,
      })),
    []
  );

  const handleChange: SelectProps['onChange'] = (newLangCode) => {
    if (typeof newLangCode === 'string') {
      i18n.changeLanguage(newLangCode);
    }
  };

  return (
    <CustomSelect
      height={44}
      width={120}
      value={i18n.language}
      onChange={handleChange}
      options={options}
      showSearch={false}
      allowClear={false}
      textStyle={{
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--Text-Black, #0F0F0F)',
      }}
      dropdownMatchSelectWidth={true}
    />
  );
}