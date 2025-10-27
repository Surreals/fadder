export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'uk', 'ru', 'pl', 'de'],
} as const;

export type Locale = typeof i18n.locales[number];
