
class e621Client {
  constructor({ clientUsername, clientApikey }) {
    this.clientUsername = clientUsername;
    this.clientApikey = clientApikey;
    this.version = require("./package.json").version;
    this.author = require("./package.json").author;
  }

  getAll(tags) {
    return firstApi(tags, this.clientUsername, this.clientApikey);
  }

  getRandom(tags) {
    return randomApi(tags, this.clientUsername, this.clientApikey);
  }

  display() {
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

