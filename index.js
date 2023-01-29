const { version, author } = require("./package.json");

const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");

module.exports = {
  version,
  author,
  e621: {
    getAll: firstApi,
    getRandom: randomApi,
    },
};
