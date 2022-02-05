const examples = require.context("./", true, /index\.vue$/);

const list = [];

examples.keys().forEach((filename) => {
  // let comMS = examples(filename).default;
  // let comName = comMS.name;
  // console.log(comMS, comName);
  list.push(examples(filename).default);
});

export default list;
