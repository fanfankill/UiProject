const path = require("path");
module.exports = {
  publicPath:'./' ,
  //不打包map
  productionSourceMap: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/basecss/global.less")],
    },
  },
};
