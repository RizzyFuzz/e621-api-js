const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");


class e621Api {
  constructor({ clientUsername, clientApikey }) {
    this.clientUsername = clientUsername;
    this.clientApikey = clientApikey;
    this.version = require("./package.json").version;
    this.author = require("./package.json").author;
  }

 async function getAll(tags) {
    return await firstApi(tags, this.clientUsername, this.clientApikey);
  }

  async function getRandom(tags) {
    return await  randomApi(tags, this.clientUsername, this.clientApikey);
  }

  Client() {
    return {
      version: this.version,
      author: this.author,
      get: {
        getAll: this.getAll.bind(),
        getRandom: this.getRandom.bind(),
      },
    };
  }
}

module.exports = e621Api;
