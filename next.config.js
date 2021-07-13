const isProd = process.env.NODE_ENV === "production";

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = {
  env: {
    appName: "ALIK NET",
  },
  ["!" + PHASE_DEVELOPMENT_SERVER]: {
    assetPrefix: "/alik-net.github.io/",
  },
  //   assetPrefix: isProd ? "/alik-net.github.io/" : "",

  //   reactStrictMode: true,
  //   poweredByHeader: false,
  webpack: (config, options) => {
    // modify the `config` here

    return config;
  },
};

module.exports = withPlugins([optimizedImages], nextConfig);
