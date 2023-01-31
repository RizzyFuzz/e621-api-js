const express = require("express");
const logger = require("morgan");
const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");
const path = require('path');


const app = express();
app.use(logger('dev'));
app.set("json spaces", 2);
app.enable('trust proxy');
app.set("trust proxy", true);
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.options('*', cors()) // include before other routes


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

app.get("/api/random", async (req, res) => {
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

app.get("/api/url/random", async (req, res) => {
  let tags = req.query.tags;
  if (!tags)
    return res.status(400).json({ creator: "RizzyFuzz", status: 400, error: "No Artist/Tags Provided" });
  try {
    let meta = await randomApi(tags, "rizzlydev", "5w74sHAPpR7zYooJvXfa5ULv");
    let { url } = await meta.result.static
    res.json({ status: 200, url });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: 500, error: e.message });
  }
});

//! Fallback Middleware
app.all('*', async (req, res) => {
   res.status(404).json({
            status: 404,
            error: 'Page you are looking for is not found'
        })
});

//Configure App
app.listen(PORT, () => {
  console.log('Server running on http://localhost:'+PORT);
});
