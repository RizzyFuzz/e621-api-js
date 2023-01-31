const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");

class e621Api {
  constructor({ clientUsername, clientApikey }) {
    this.clientUsername = clientUsername;
    this.clientApikey = clientApikey;
  }
}

e621Api.prototype.getAll = function(tags) {
  return firstApi(tags, this.clientUsername, this.clientApikey);
};

e621Api.prototype.getRandom = function(tags) {
  return randomApi(tags, this.clientUsername, this.clientApikey);
};

module.exports = e621Api;

 
