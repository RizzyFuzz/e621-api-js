const express = require("express");
const logger = require("morgan");
const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');


const app = express();
app.use(swaggerUi.serve);
app.use(cors());
app.use(logger('dev'));
app.use(express.static('public'));
app.set("json spaces", 2);
app.set("trust proxy", true);
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

const PORT = 8000;
const REVERSE_PROXY = eval(true);
const ALLOW = [
  "e621api-rizzly.cyclic.app",
];

app.use((req, res, next) => {
  res.locals.req = req;
  if (REVERSE_PROXY && !ALLOW.includes(req.hostname))
    return res
      .status(403)
      .send(`<center><h1>Sorry, Access Denied</h1></center>`);
  next();
});


app.get('/', (req, res) => {
    swaggerDocument.host = req.get('host');
    swaggerDocument.schemes = [req.protocol];
    res.send(swaggerUi.generateHTML(swaggerDocument, { customCss: `.swagger-ui .topbar .download-url-wrapper { display: none } 
    .swagger-ui .topbar-wrapper img[alt="e621.net Web API"], .topbar-wrapper span {
      visibility: colapse;
    }
    .swagger-ui .topbar-wrapper img {
      content: url("./favicon-32x32.png");
    }`, customfavIcon: req.protocol + "://" + req.get('host') + "/favicon.ico", customSiteTitle: swaggerDocument.info.title, customSiteDesc: swaggerDocument.info.description }));
});

app.get('/swagger.json', (req, res) => {
    swaggerDocument.host = req.get('host');
    swaggerDocument.schemes = [req.protocol];
    res.json(swaggerDocument);
});
  
//api getter e621.net
app.get("/api/all", async (req, res) => {
  let tags = req.query.tags;
  if (!tags)
    return res.status(400).json({ creator: "RizzyFuzz", status: 400, error: "No Artist/Tags Provided" });
  try {
    let meta = await firstApi(tags, "rizzlydev", "5w74sHAPpR7zYooJvXfa5ULv");
    res.json({ meta, status: 200 });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: 500, error: e.message });
  }
});

app.get("/random", async (req, res) => {
  let tags = req.query.tags;
  if (!tags)
    return res.status(400).json({ creator: "RizzyFuzz", status: 400, error: "No Artist/Tags Provided" });
  try {
    let meta = await randomApi(tags, "rizzlydev", "5w74sHAPpR7zYooJvXfa5ULv");
    res.json({ meta, status: 200 });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: 500, error: e.message });
  }
});

//! Fallback Middleware
app.use((req, res) => {
  res.status(404).send(`<center><h1>Internal Server Error</h1></center>`);
});

//Configure App
app.listen(PORT, () => {
  console.log('Server running on http://localhost:'+PORT);
});
