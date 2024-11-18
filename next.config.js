const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during production builds
  },
  basePath: '/authors-chatbot', // Ensure routes are prefixed with /authors-chatbot
  assetPrefix: 'https://stingray-app-kuz8f.ondigitalocean.app/authors-chatbot/', // Serve static assets from this URL
  crossOrigin: 'anonymous', // Add cross-origin for static files
});
