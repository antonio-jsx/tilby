import createNextIntlPlugin from '@tilby/i18n/plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  transpilePackages: ['@tilby/ui'],
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: './i18n/request.ts',
});

export default withNextIntl(nextConfig);
