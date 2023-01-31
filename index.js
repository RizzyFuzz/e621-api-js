'use strict';

const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");


class e621Api {
  constructor({ clientUsername, clientApikey }) {
    if (!clientUsername) {
    throw new Error('Ur Username e621.net required!');
  }
    if (!clientApikey) {
    throw new Error('Ur Apikey e621.net required!');
  }
    this.clientUsername = clientUsername;
    this.clientApikey = clientApikey;
  }
}

e621Api.prototype.getAll = async function (tags) {
  if (!tags) {
    throw new Error('Tags/artist e621.net required!');
  }
  return await firstApi(tags, this.clientUsername, this.clientApikey);
};

e621Api.prototype.getRandom = async function (tags) {
  if (!tags) {
    throw new Error('Tags/artist e621.net required!');
  }
  return await randomApi(tags, this.clientUsername, this.clientApikey);
};

module.exports = e621Api;
