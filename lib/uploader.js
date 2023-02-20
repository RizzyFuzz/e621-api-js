const axios = require("axios");
const FormData = require("form-data");
const FileType = require("file-type");

module.exports = function uploader(buffer) {
  return new Promise((resolve, reject) => {
    const cryp = require("crypto");
    FileType.fromBuffer(buffer)
      .then((type) => {
        const bodyForm = new FormData();
        const r = cryp.randomBytes(5).toString("hex");
        bodyForm.append("file", buffer, r + "." + type.ext);
        axios({
          url: "https://uguu.se/upload.php",
          method: "POST",
          data: bodyForm,
          headers: {
            ...bodyForm.getHeaders(),
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9,id;q=0.8",
          },
        })
          .then((response) => {
            const result = {
              author: "Created by Ra",
              status: response.data.success ? 200 : 404,
              result: {
                url: response.data.files[0].url,
                name: response.data.files[0].name,
                size: response.data.files[0].size,
                hash: response.data.files[0].hash,
              },
            };
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}.bind();
