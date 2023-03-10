const thisE621 = require("./lib/client.e621.js");
const express = require("express");
const logger = require("morgan");
const body = require("body-parser");
var cors = require("cors");
const path = require("path");
const chalk = require("chalk");
const axios = require("axios");
const fs = require("fs");
const swaggerDocument = require("./swagger.json");
const swaggerUi = require("swagger-ui-express");
let {
  username,
  api_key: apikey,
  cookie: danbooruSession,
} = JSON.parse(fs.readFileSync("./lib/config.json"));

const app = express();
const PORT = 8000;
app.use(logger("dev"));
app.set("json spaces", 2);
app.enable("trust proxy");
app.set("trust proxy", true);
app.use(swaggerUi.serve);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(body.json({ type: "application/json" }));
app.use(express.json());
var corsOptions = {
  origin: "http://localhost:" + PORT,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.disable("x-powered-by");
app.use((req, res, next) => {
  res.setHeader("x-powered-by", "RizzyFuzz Backend");
  next();
});

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

function status(code) {
  if (code > 400 && code < 499) return chalk.yellow(code);
  if (code > 500 && code < 599) return chalk.red(code);
  if (code > 299 && code < 399) return chalk.cyan(code);
  if (code > 199) return chalk.green(code);
  return chalk.yellow(code);
}

app.use(
  logger(function (tokens, req, res) {
    return [
      req.ip,
      tokens.method(req, res),
      tokens.url(req, res),
      status(tokens.status(req, res)),
      tokens["response-time"](req, res) + " ms",
      formatBytes(
        isNaN(tokens.res(req, res, "content-length"))
          ? 0
          : tokens.res(req, res, "content-length")
      ),
    ].join(" | ");
  })
);

app.use((req, res, next) => {
  res.locals.req = req;
  const REVERSE_PROXY = eval(true);
  const ALLOW = [req.get("host")];
  if (REVERSE_PROXY && !ALLOW.includes(req.get("host")))
    return res
      .status(403)
      .send(`<center><h1>Sorry, Access Denied</h1></center>`);
  next();
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  swaggerDocument.host = req.get("host");
  swaggerDocument.schemes = [req.protocol];
  res.send(
    swaggerUi.generateHTML(swaggerDocument, {
      customCss: `.swagger-ui .topbar .download-url-wrapper { display: none } 
    .swagger-ui .topbar-wrapper img[alt="E621 Web API"], .topbar-wrapper span {
      visibility: colapse;
    }
    .swagger-ui .topbar-wrapper img {
      content: url("img/e621-RizzyFuzz-Design.png" );
    }`,
      customfavIcon: req.protocol + "://" + req.get("host") + "/favicon.ico",
      customSiteTitle: swaggerDocument.info.title,
      customSiteDesc: swaggerDocument.info.description,
    })
  );
});

app.get("/swagger.json", (req, res) => {
  swaggerDocument.host = req.get("host");
  swaggerDocument.schemes = [req.protocol];
  res.json(swaggerDocument);
});

//api getter e621.net
app.get("/api/all", async (req, res) => {
  let tags = req.query.tags;
  if (!tags)
    return res.status(424).json({
      status: 424,
      creator: "RizzyFuzz",
      msg: "No Artist/Tags Provided",
    });
  try {
    let yiff = await thisE621(tags, "rizzlydev", apikey, req);
    res.json({ yiff, status: 200, creator: "RizzyFuzz" });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: 500,
      creator: "RizzyFuzz",
      msg: e.message,
    });
  }
});

app.get("/api/random", async (req, res) => {
  let tags = req.query.tags;
  if (!tags)
    return res.status(424).json({
      status: 424,
      creator: "RizzyFuzz",
      msg: "No Artist/Tags Provided",
    });
  try {
    let result = await thisE621(tags, "rizzlydev", apikey, req);
    const yiff = result[Math.floor(Math.random() * result.length)];
    res.json({ yiff, status: 200, creator: "RizzyFuzz" });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: 500,
      creator: "RizzyFuzz",
      msg: e.message,
    });
  }
});

app.get("/api/getMedia", async (req, res) => {
  let url = req.query.url;
  if (!url)
    return res.status(424).json({
      status: 424,
      creator: "RizzyFuzz",
      msg: "Enter a static link from e621.net",
    });
  if (!url.includes("static1.e621.net"))
    return res.status(424).send({
      status: 424,
      creator: "RizzyFuzz",
      msg: "The url you entered is not from static e621.net",
    });

  const headers = {
    accept: "*/*",
    Cookie: danbooruSession,
  };

  try {
    const response = await axios.get(url, {
      headers,
      responseType: "arraybuffer",
    });
    let header = response.headers["content-type"];
    res.contentType(header);
    res.send(response.data);
    console.log(response.headers);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "An error occurred while loading the image" });
  }
});

//! Fallback Middleware
app.all("*", async (req, res) => {
  res.status(404).json({
    status: 404,
    creator: "RizzyFuzz",
    error: "Page you are looking for is not found",
  });
});

//Configure App
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
