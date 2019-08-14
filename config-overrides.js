/* config-overrides.js */
const rewireWebpackBundleAnalyzer = require("react-app-rewire-webpack-bundle-analyzer")

module.exports = function override(config, env) {
  // ...
  if (env === "development") {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: "server",
    })
  }

  return config
}
