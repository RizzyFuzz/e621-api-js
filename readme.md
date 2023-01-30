# Unofficiall e621.net API
<p align="center">
<a target="_blank" href="https://github.com/rizzlydev"><img src="https://avatars.githubusercontent.com/rizzlydev?s=400" alt="" width="169" /></a>
</p>
<p align="center">
<a target="_blank" href="https://github.com/rizzlydev"><img title="Author" src="https://img.shields.io/badge/Author-RizzFuzz-red.svg?style=for-the-badge&logo=github" /></a>
<br>
<a target="_blank" href="//npmjs.com/e621-api-js"><img src="https://img.shields.io/npm/dw/e621-api-js?color=yellow&label=Downloads&logo=npm&style=flat"></a>
<br>
<a target="_blank" href="https://www.npmjs.com/package/e621-api-js?activeTab=versions"><img src="https://img.shields.io/npm/v/e621-api-js?color=green&label=version&logo=npm&style=social"></a>
</p>

# Note

ID<br>
Jika Ada Bug,<br>
Silahkan Buat [Issues](https://github.com/rizzlydev/e621-api-js/issues/new)

EN<br>
If there are bugs,<br>
please create [Issues](https://github.com/rizzlydev/e621-api-js/issues/new)

# Installation

## Latest

`npm i github:rizzlydev/e621-api-js`

## Npm

`npm i e621-api-js`

# Require

```js
const api = require("e621-api-js");
```

# Docs

## Get All Data

```js
const result = await api.e621.getAll.("oouyuki_benten","ur username e621.net","ur apikey e621.net");
console.log(result); 
```
> result
```bash
{    
    {
      author: 'RizzyFuzz',
      post_id: 3830421,
      found: true,
      result: [Object]
    },
    {
      author: 'RizzyFuzz',
      post_id: 3830385,
      found: true,
      result: [Object]
    }
   More 500 items...
}
```

## Get Random Data

```js
const result = await api.e621.getRandom.("oouyuki_benten","ur username e621.net","ur apikey e621.net");
console.log(result); 
```
> result 
```bash
{
  author: 'RizzyFuzz',
  post_id: 1574324,
  found: true,
  result: {
    artist: [ 'oouyuki_benten' ],
    species: [ 'bear', 'mammal', 'monster' ],
    character: [],
    copyright: [],
    lore: [],
    meta: [ '5:6' ],
    score: { up: 27, down: -2, total: 25 },
    rating: 'e',
    fav_count: 103,
    info: {
      width: 700,
      height: 840,
      ext: 'jpg',
      size: '563.42 KB',
      duration: '00:00:00',
      created_at: '6/16/2018, 7:37:30 AM',
      updated_at: '1/25/2023, 9:48:35 PM',
      description: "Lose\r\n--\r\nThere's no reason to let a hero win after all ;)"
    },
    static: {
      md5: '839529aa64e3f84ac23eec2a637839e1',
      url: ' https://static1.e621.net/data/83/95/839529aa64e3f84ac23eec2a637839e1.jpg',
      sources: 'https://www.furaffinity.net/view/20794884/'
    }
  }
}

```

## Get All Data API

```js
const fetch = require('node-fetch');
async function getJsonData(url) {
return fetch(url).then(a => a.json())
}
cosnt thisUrl = "https://e621api-rizzly.cyclic.app/api/all?tags=oouyuki_benten"
console.log(await getJsonData(thisUrl)); 
```
> result
```bash
{
  meta: {
      author: 'RizzyFuzz',
      post_id: 3830421,
      found: true,
      result: [Object]
    },
    {
      author: 'RizzyFuzz',
      post_id: 3830385,
      found: true,
      result: [Object]
    }
   More 500 items...
    },
    status: 200
}
```

## Get Random Data API

```js
const fetch = require('node-fetch');
async function getJsonData(url) {
return fetch(url).then(a => a.json())
}
cosnt thisUrl = "https://e621api-rizzly.cyclic.app/api/random?tags=oouyuki_benten"
console.log(await getJsonData(thisUrl)); 
```
> result
```bash
{
  meta: {
    author: 'RizzyFuzz',
    post_id: 2893476,
    found: true,
    result: {
      artist: [Array],
      species: [Array],
      character: [Array],
      copyright: [],
      lore: [],
      meta: [],
      score: [Object],
      rating: 'e',
      fav_count: 564,
      info: [Object],
      static: [Object]
    }
  },
  status: 200
}
```
