'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

export type Locale = 'ru' | 'uz' | 'en';

const LOCALE_STORAGE_KEY = 'locale';
const LOCALE_COOKIE_KEY = 'locale';
const VALID_LOCALES: Locale[] = ['ru', 'uz', 'en'];

function isValidLocale(value: string | null | undefined): value is Locale {
  return !!value && (VALID_LOCALES as string[]).includes(value);
}

function readCookieLocale(): Locale | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE_KEY}=([^;]*)`));
  const value = match ? decodeURIComponent(match[1]) : null;
  return isValidLocale(value) ? value : null;
}

function writeLocaleCookie(locale: Locale) {
  if (typeof document === 'undefined') return;
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  document.cookie = `${LOCALE_COOKIE_KEY}=${locale}; path=/; max-age=${maxAge}`;
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default render must be 'ru' on the server to avoid hydration mismatches.
  const [locale, setLocaleState] = useState<Locale>('ru');

  useEffect(() => {
    let resolved: Locale | null = null;

    try {
      const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (isValidLocale(stored)) {
        resolved = stored;
      }
    } catch {
      // localStorage may be unavailable (e.g. privacy mode) — ignore.
    }

    if (!resolved) {
      resolved = readCookieLocale();
    }

    if (resolved && resolved !== 'ru') {
      setLocaleState(resolved);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // ignore
    }
    writeLocaleCookie(next);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
