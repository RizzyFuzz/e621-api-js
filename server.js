const express = require("express");
const logger = require("morgan");
const firstApi = require("./lib/firstApi.js");
const randomApi = require("./lib/randomApi.js");
var cors = require('cors');
const path = require('path');
const chalk = require("chalk");
const PORT = 8000;

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
var corsOptions = {
    origin: 'http://localhost:'+PORT,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
} 
function status(code) {
if (code > 400 && code < 499) return chalk.yellow(code)
if (code > 500 && code < 599) return chalk.red(code)
if (code > 299 && code < 399) return chalk.cyan(code)
if (code > 199) return chalk.green(code)
return chalk.yellow(code)
}

app.use(logger(function (tokens, req, res) {
  return [
    req.ip,
    // req.headers['user-agent'],
    tokens.method(req, res),
    tokens.url(req, res),
    status(tokens.status(req, res)),
    tokens['response-time'](req, res)+ ' ms',
    formatBytes(isNaN(tokens.res(req, res, 'content-length')) ? 0 : tokens.res(req, res, 'content-length')), 
  ].join(' | ')
}))

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

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


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
