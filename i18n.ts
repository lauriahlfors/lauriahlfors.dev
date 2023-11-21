// Setup i18n config with default locale & available locales.
export const i18nConfig = {
  defaultLocale: 'en',
  locales: ['en', 'fi'],
} as const;

// Generate type from i18nConfigs locales.
export type I18nLocale = (typeof i18nConfig)['locales'][number];
