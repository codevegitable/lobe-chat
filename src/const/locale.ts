import { supportLocales } from '@/locales/resources';

// 更改默认语言
export const DEFAULT_LANG = 'zh-CN';

// 暂时更名，等我搞明白这个lobe的cookie和本地cookie有啥区别再改值（）
export const LOCALE_COOKIE = 'LOBE_LOCALE';

/**
 * Check if the language is supported
 * @param locale
 */
export const isLocaleNotSupport = (locale: string) => !supportLocales.includes(locale);
