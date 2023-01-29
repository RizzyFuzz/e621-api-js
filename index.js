const express = require("express");
const logger = require("morgan");
const firstApi = require("./firstApi.js");
const randomApi = require("./randomApi.js");

const app = express();
app.use(logger("dev"));
app.set("json spaces", 2);
app.set("trust proxy", 1);
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

const PORT = 8000;
const REVERSE_PROXY = eval(true);
const ALLOW = [
  "https://e621api.rizzdev.my.id",
  "https://e631api.rizzly.biz.id",
  "https://e621api-rizzly.cyclic.app",
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
app.get("/", async (req, res) => {
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


app.listen(PORT, () => {
  console.log('Server running on http://localhost:'+PORT');
});
