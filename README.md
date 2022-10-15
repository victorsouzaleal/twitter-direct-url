<p align="center">
<img src="https://avatars0.githubusercontent.com/u/4674786?s=400&u=2f77d382a4428c141558772a2b7ad3a36bebf5bc&v=4" width="128" height="128"/>
</p>
<p align="center">
<a href="#"><img title="Twitter-Direct-URL" src="https://img.shields.io/badge/Twitter%20Direct%20URL-green?colorA=%23ff0000&colorB=27b6e5&style=for-the-badge"></a>
</p>
<p align="center">
<a href="https://github.com/victorsouzaleal"><img title="Autor" src="https://img.shields.io/badge/Author-victorsouzaleal-27b6e5.svg?style=for-the-badge&logo=github"></a>
</p>
</p>
<p align="center">
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fvictorsouzaleal%2Ftwitter-direct-url&count_bg=%2327B6E5&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
<a href="#"><img title="Version" src="https://img.shields.io/github/package-json/v/victorsouzaleal/twitter-direct-url?color=27B6E5&logo=github&style=flat-square"></a>
<a href="#"><img title="Size" src="https://img.shields.io/bundlephobia/min/twitter-url-direct?color=27B6E5&logo=npm&style=flat-square"></a>
<a href="https://github.com/victorsouzaleal/twitter-direct-url/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/victorsouzaleal/twitter-direct-url?color=27B6E5&logo=github&style=flat-square"></a>
<a href="https://github.com/victorsouzaleal/twitter-direct-url/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/victorsouzaleal/twitter-direct-url?color=27B6E5&logo=github&style=flat-square"></a>
<a href="#"><img title="MAINTENED" src="https://img.shields.io/badge/MAINTENED-YES-27B6E5?style=flat-square"/></a>
</p>

## Instalation :
```bash
> npm i --save twitter-url-direct
```

## Example
```js
const twitterGetUrl = require("twitter-url-direct")
let response = await twitterGetUrl("https://twitter.com/TweetsOfCats/status/1547778899534172160")
console.log(response)
```

## Output Example - Video/Gif Tweet
```
{
    found: true,
    type: 'video/gif',
    duration: 5.725,
    dimensionsAvailable: 2,
    download: [
      {
        witdh: '320',
        height: '566',
        dimension: '320x566',
        url: 'https://video.twimg.com/ext_tw_video/1547778885449707520/pu/vid/320x566/ZRiUXOvgiaYmC8tg.mp4?tag=12'
      },
      {
        witdh: '406',
        height: '720',
        dimension: '406x720',
        url: 'https://video.twimg.com/ext_tw_video/1547778885449707520/pu/vid/406x720/XuStSsCDx6NWjQeq.mp4?tag=12'
      }
    ]
}
```

## Output Example - Image Tweet
```
{
    found: true,
    type: "image",
    download: "https://pbs.twimg.com/media/EvpS9B9WgAoim8w.jpg"
}
```

## Output Example - Not Found Video/Image Tweet
```
{
    found: false,
    error: "Request failed with status code 404 or other messages"
}
```
