const path = require("path");

module.exports = {
  //不打包map
  productionSourceMap: false,
  publicPath: "./",

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/basecss/global.less")],
    },
  },
};
