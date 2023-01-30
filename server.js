const express = require("express");
const logger = require("morgan");
const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");
const cors = require('cors');


const app = express();
app.use(cors());
app.use(logger('dev'));
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


app.get('/', (req, res) => res.json({ status: 200 , message: "Hello World!"});));
  
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
