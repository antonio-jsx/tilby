import { useTranslations } from '@tilby/i18n';
import { use } from 'react';

export default function Home() {
  const t = useTranslations();
  return <h1>{t('message')}</h1>;
}
