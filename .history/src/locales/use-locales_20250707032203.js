import dayjs from 'dayjs';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { allLangs } from './all-langs';
import { fallbackLng, changeLangMessages as messages } from './config-locales';

// ----------------------------------------------------------------------

export function useTranslate(ns) {
  const { t, i18n } = useTranslation(ns);

  const fallback = allLangs.find((lang) => lang.value === fallbackLng);

  const currentLang = allLangs.find((lang) => lang.value === i18n.resolvedLanguage);

  const onChangeLang = useCallback(
    async (newLang) => {
      try {
        await i18n.changeLanguage(newLang);

        if (currentLang) {
          dayjs.locale(currentLang.adapterLocale);
        }

        // Optional: console.log or callback for success
        console.log(messages[newLang]?.success || messages.en.success);
      } catch (error) {
        console.error(messages[newLang]?.error || messages.en.error);
      }
    },
    [currentLang, i18n]
  );

  return {
    t,
    i18n,
    onChangeLang,
    currentLang: currentLang ?? fallback,
  };
}
