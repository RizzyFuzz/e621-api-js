# Unofficiall e621.net MODULE & API Library
<p align="center">
<a target="_blank" href="https://github.com/rizzlydev"><img src="https://avatars.githubusercontent.com/rizzlydev?s=400" alt="" width="169" /></a>
</p>
<p align="center">
<a target="_blank" href="https://github.com/rizzlydev"><img title="Author" src="https://img.shields.io/badge/Author-RizzFuzz-red.svg?style=for-the-badge&logo=github" /></a>
<br>
<br>
</p>

# Note

ID<br>
Jika Ada Bug,<br>
Silahkan Buat [Issues](https://github.com/rizzlydev/e621-api-js/issues/new)

EN<br>
If there are bugs,<br>
please create [Issues](https://github.com/rizzlydev/e621-api-js/issues/new)

# Docs
## Get All Data (MODULE)

```js
const e621 = new e621Api({ clientUsername: 'username', clientApikey: 'apikey' });
const result = await e621.getAll("oouyuki_benten"); 
console.log(result); 
```
> result:
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

## Get Random Data (MODULE)

```js
const e621 = new e621Api({ clientUsername: 'username', clientApikey: 'apikey' });
const result = await e621.getAll("oouyuki_benten"); 
console.log(result); 
```
> result:
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

## Get All Data (API)

```js
const fetch = require('node-fetch');
async function getJsonData(url) {
return fetch(url).then(a => a.json())
}
cosnt thisUrl = "https://e621api-rizzly.cyclic.app/api/all?tags=oouyuki_benten"
console.log(await getJsonData(thisUrl)); 
```
> result:
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

## Get Random Data (API)

```js
const fetch = require('node-fetch');
async function getJsonData(url) {
return fetch(url).then(a => a.json())
}
cosnt thisUrl = "https://e621api-rizzly.cyclic.app/api/random?tags=oouyuki_benten"
console.log(await getJsonData(thisUrl)); 
```
> result:
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
