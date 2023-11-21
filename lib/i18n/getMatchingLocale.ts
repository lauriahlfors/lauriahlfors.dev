import { I18nLocale, i18nConfig } from '@/i18n';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';

/**
 * Get best matching locale based on available client and app/server locales.
 * @param request
 * @returns
 */
export function getMatchingLocale(request: NextRequest): I18nLocale {
  // Initialize user headers object.
  let userHeaders: Record<string, string> = {};

  // Fill user headers object with headers from the request.
  request.headers.forEach(
    (headerValue, headerKey) => (userHeaders[headerKey] = headerValue)
  );

  // Get all availabl locales from the client.
  const clientLocales = new Negotiator({ headers: userHeaders }).languages();

  // Initialize app/server locales object.
  let appLocales: I18nLocale[] = [];

  // Fill app/server locales with locales from the i18n config.
  i18nConfig.locales.forEach((locale: I18nLocale) => {
    appLocales.push(locale);
  });

  // Call match function from intl-localematcher and get best matching locale
  // based on available client locales, app/server locales and app/server default locale.
  const localeMatch: I18nLocale = match(
    clientLocales,
    appLocales,
    i18nConfig.defaultLocale
  ) as I18nLocale;

  // Return matched locale.
  return localeMatch;
}
