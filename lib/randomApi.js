'use strict';

const axios = require("axios");

async function e631randomAPI(tags,username,apikey) {
  return new Promise(async (resolve, reject) => {
    try {
    const url = `https://e621.net/posts.json?tags=${ tags }&login=${ username }&api_key=${ apikey }`;
    if (!tags) { 
       reject({ 
         author: "RizzyFuzz",
         found: false, 
         message: `Tags Required! >:3`
       }) 
     };
    if (!username) { 
       reject({ 
         author: "RizzyFuzz",
         found: false, 
         message: `Username Required! >:3`
       }) 
     };
    if (!apikey) { 
       reject({ 
         author: "RizzyFuzz",
         found: false, 
         message: `api_key e621.net Required! >:3`
       }) 
     };
     
      const data = await axios.get(url, {
        headers: {
        "user-agent": "RizzyFuzz/1.5 (by rizzlydev on e621)",
        },
      });

      const posts = data.data.posts;
      const sortedPosts = posts.sort((a, b) => {
        if (a.tags.artist < b.tags.artist) {
          return -1;
        }
        if (a.tags.artist > b.tags.artist) {
          return 1;
        }
        return 0;
      });
     if (posts.length === 0) { 
       reject({ 
         author: "RizzyFuzz",
         found: false, 
         message: `Content or artist Not Found X'3`
       }) 
     };
      const formatSizeUnits = (bytes) => {
        if (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2)+' GB';}
        else if (bytes>=1000000) {bytes=(bytes/1000000).toFixed(2)+' MB';}
        else if (bytes>=1000) {bytes=(bytes/1000).toFixed(2)+' KB';}
        else if (bytes>1) {bytes=bytes+' bytes';}
        else if (bytes==1) {bytes=bytes+' byte';}
        else {bytes='0 byte';}
        return bytes;
      };
      function toHHMMSS(o){var r=Math.floor(o/3600),t=Math.floor((o-3600*r)/60),o=o-3600*r-60*t;return r<10&&(r="0"+r),t<10&&(t="0"+t),o<10&&(o="0"+o),console.log(r+":"+t+":"+o),r+":"+t+":"+o};
      const result = sortedPosts.map(post => {
        return {
          author: "RizzyFuzz",
          post_id: post.id,
          found: true,
          result: { 
            artist: post.tags.artist,  
            species: post.tags.species, 
            character: post.tags.character, 
            copyright: post.tags.copyright,
            lore: post.tags.lore,
            meta: post.tags.meta,
            score: post.score, 
            rating: post.rating,
            fav_count: post.fav_count,
            info: {
            width: post.file.width, 
            height: post.file.height, 
            ext: post.file.ext, 
            size: formatSizeUnits(post.file.size),
            duration: toHHMMSS(Math.floor(post.duration)),
            created_at: new Date(post.created_at).toLocaleString("en-US"), 
            updated_at: new Date(post.updated_at).toLocaleString("en-US"), 
            description: post.description || "No Data",
            },
            static: {
            md5: post.file.md5, 
            url:` https://static1.e621.net/data/${post.file.md5.slice(0,2)}/${post.file.md5.slice(2,4)}/${post.file.md5}.${post.file.ext}`,
            sources: post.sources[0],
            }
        }
        }
      });
      const randomPost = result[Math.floor(Math.random() * result.length)];
      resolve(randomPost);
    } catch (error) {
      reject(error);
    } 
  });
};

module.exports = e631randomAPI.bind(); 
