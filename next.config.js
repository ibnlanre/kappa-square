const path = require("path");
const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();

module.exports = withNextPluginPreval({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["localhost", "images.unsplash.com", "plus.unsplash.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      // type: "asset",
      use: ["@svgr/webpack"],
    });
    return config;
  },
  staticPageGenerationTimeout: 300,
  env: {
    LIVE_TICKER_URL: process.env.LIVE_TICKER_URL,
  },
});