import { useCallback } from 'react';
import { useLanguage } from './context';
import { dictionaries } from './dictionaries';

function getByPath(obj: unknown, path: string[]): unknown {
  let current: unknown = obj;
  for (const key of path) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function useTranslation() {
  const { locale } = useLanguage();

  const t = useCallback(
    (key: string): string => {
      const path = key.split('.');

      const localized = getByPath(dictionaries[locale], path);
      if (typeof localized === 'string') return localized;

      const fallback = getByPath(dictionaries.ru, path);
      if (typeof fallback === 'string') return fallback;

      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn(`[i18n] Missing translation key: "${key}"`);
      }
      return key;
    },
    [locale]
  );

  return { t, locale };
}
