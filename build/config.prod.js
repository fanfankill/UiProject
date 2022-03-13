const path = require("path");
const fs = require("fs");
const join = path.join;
const resolve = (dir) => path.join(__dirname, "../", dir);

module.exports = {
  // build config
  outputDir: resolve("lib"),

  configureWebpack: {
    entry: getComponentsEntries("UI/packages"),
    output: {
      filename: "[name].js",
      libraryTarget: "umd",
      libraryExport: "default",
      library: "create-ui",
    },
  },

  css: {
    // sourceMap: true,
    extract: {
      filename: `theme/[name].css`,
    },
  },

  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.entryPoints.delete("app");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
    config.plugins.delete("html");
    config.plugins.delete("copy");
    // config.plugins.delete("hmr");
  },
};

function getComponentsEntries(path) {
  let filesEntries = {};
  let files = fs.readdirSync(resolve(path));

  files.forEach((file) => {
    const filepath = join(path, file);
    const isDir = fs.statSync(resolve(filepath)).isDirectory();
    const [name, suffix] = file.split(".");

    if (isDir) {
      filesEntries[name] = resolve(join(filepath, "index.js"));
    } else if (suffix === "js") {
      filesEntries[name] = resolve(filepath);
    }
  });

  return filesEntries;
}
