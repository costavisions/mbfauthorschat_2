const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during production builds
  },
  basePath: '/authors-chatbot', // Ensure routes are prefixed with /authors-chatbot
  assetPrefix: 'https://stingray-app-kuz8f.ondigitalocean.app/authors-chatbot/', // Corrected to include the basePath
  crossOrigin: 'anonymous', // Add this for handling CORS issues
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, DELETE, PATCH, POST, PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization' },
        ],
      },
    ];
  },
});
