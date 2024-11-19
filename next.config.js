const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '/authors-chatbot',
  assetPrefix: 'https://test.miamibookfair2024.com/authors-chatbot',
  crossOrigin: 'anonymous',
});
