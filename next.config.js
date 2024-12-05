const path = require('path');

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,

  publicRuntimeConfig: {
    staticFolder: '/static',
  },

  headers: async () => {
    return [
      {
        source: '/(.*)',  // Match all routes
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://localHost:1025',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, Origin, X-Auth-Token',
          },
          // Add other headers as needed
        ],
      },
      {
        source: '/api/(.*)',  // Match all API routes
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://localHost:1025',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization, Origin, X-Auth-Token',
          },
          // Add other headers as needed
        ],
      },
    ];
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
    };
    return config;
  },
};
