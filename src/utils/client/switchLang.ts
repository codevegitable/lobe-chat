import { changeLanguage } from 'i18next';

import { LOCALE_COOKIE } from '@/const/locale';
import { LocaleMode } from '@/types/locale';

import { setCookie } from './cookie';

export const switchLang = (locale: LocaleMode) => {
  const lang = locale === 'auto' ? navigator.language : locale;

  changeLanguage(lang);
  document.documentElement.lang = lang;

  setCookie(LOCALE_COOKIE, locale === 'auto' ? undefined : locale, 365);
};
