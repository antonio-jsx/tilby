import createMiddleware from '@tilby/i18n/proxy';
import { routing } from '@tilby/i18n/routing';
import type { NextRequest } from 'next/server';

export default async function (request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);
  const i18nResponse = handleI18nRouting(request);

  return i18nResponse;
}

export const config = {
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
