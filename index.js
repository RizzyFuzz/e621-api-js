const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");


class e621Api {
  constructor({ clientUsername, clientApikey }) {
    this.clientUsername = clientUsername;
    this.clientApikey = clientApikey;
    this.Display = Display
  }

 async getAll(tags) {
    return await firstApi(tags, this.clientUsername, this.clientApikey);
  }

  async getRandom(tags) {
    return await  randomApi(tags, this.clientUsername, this.clientApikey);
  }

  Display() {
    return {
      version: this.version,
      author: this.author,
      get: {
        getAll: this.getAll.bind(this),
        getRandom: this.getRandom.bind(this),
      },
    };
  }
}

module.exports = e621Api;
