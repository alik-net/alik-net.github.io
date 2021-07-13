const isProd = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    appName: "ALIK NET",
  },
  assetPrefix: isProd ? "/alik-net.github.io/" : "",
  //   reactStrictMode: true,
  //   poweredByHeader: false,
};
