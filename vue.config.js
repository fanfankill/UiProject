const path = require("path");
const buildConfig = require("./build/config.prod");

// common config
const config = {
  productionSourceMap: process.env.NODE_ENV === "development" ? true : false,
  publicPath: process.env.NODE_ENV === "development" ? "/" : "./",

  // less loader
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/basecss/global.less")],
    },
  },
};

module.exports =
  process.env.NODE_ENV === "development"
    ? config
    : { ...config, ...buildConfig };
