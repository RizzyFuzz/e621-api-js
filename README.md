# Unofficial e621.net API Library
<p align="center">
<a target="_blank" href="https://github.com/rizzlydev/e621-api-js"><img src="https://github.com/rizzlydev/e621-api-js/blob/main/public/img/e621-RizzyFuzz-Design.png?raw=true" alt="" size="80" /></a>


# Note

ID<br>
Jika Ada Bug,<br>
Silahkan Buat [Issues](https://github.com/rizzlydev/e621-api-js/issues/new)

EN<br>
If there are bugs,<br>
please create [Issues](https://github.com/rizzlydev/e621-api-js/issues/new)

# Docs
## Try It!
you can try directly [here](https://e621.cyclic.app)

## Get All Metadata

```js
const fetch = require('node-fetch');
async function getJsonData(url) {
return fetch(url).then(a => a.json())
}
cosnt thisUrl = "https://e621.cyclic.app/api/all?tags=oouyuki_benten"
console.log(await getJsonData(thisUrl)); 
```
> result:
```bash
{
  yiff: {
      post_id: 3830421,
      found: true,
      metadata: [Object]
    },
    {
      author: 'RizzyFuzz',
      post_id: 3830385,
      found: true,
      result: [Object]
    }
   More 500 items...
    },
    author: 'RizzyFuzz', 
    status: 200
}
```

## Get Random Metadata

```js
const fetch = require('node-fetch');
async function getJsonData(url) {
return fetch(url).then(a => a.json())
}
cosnt thisUrl = "https://e621api.cyclic.app/api/random?tags=oouyuki_benten"
console.log(await getJsonData(thisUrl)); 
```
> result:
```bash
{
  yiff: {
    post_id: 2893476,
    found: true,
    metadata: {
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
  author: 'RizzyFuzz',
  status: 200
}
```
