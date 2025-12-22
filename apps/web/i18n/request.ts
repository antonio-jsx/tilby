import { hasLocale } from '@tilby/i18n';
import { routing } from '@tilby/i18n/routing';
import { getRequestConfig } from '@tilby/i18n/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
