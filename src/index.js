const axios = require("axios"), cheerio = require("cheerio"),qs = require('qs')
module.exports = twitterGetUrl = (url_media) =>{
    return new Promise((resolve,reject)=>{
        const TWEET_ID = url_media.split("/")[5]
        const BASE_URL = "https://tweetpik.com/api/tweets"
        let response = {}
        //GET TWEET INFO
        axios({
            url : `${BASE_URL}/${TWEET_ID}`
        }).then((res)=>{
            if(res.data.media[0].type == "photo"){
                response = {
                    found : true,
                    tweet_user: {
                        name: res.data.name,
                        username: res.data.username,
                        text: res.data.text
                    },
                    type: "image",
                    download: res.data.media[0].url
                }
                resolve(response)
            } else if ((res.data.media[0].type == "animated_gif") || (res.data.media[0].type == "video")){
                //GET DOWNLOAD LINKS
                let type_media = res.data.media[0].type
                let info = {
                    name: res.data.name,
                    username: res.data.username,
                    text: res.data.text
                }
                axios({
                    url : `${BASE_URL}/${TWEET_ID}/video`
                }).then((res)=>{
                    response = {
                        found : true,
                        tweet_user: {
                            name: info.name,
                            username: info.username,
                            text: info.text
                        },
                        type: "video/gif",
                        duration: (type_media == "animated_gif") ? null : res.data.duration/1000,
                        dimensionsAvailable: res.data.variants.length,
                        download: []
                    }
                    res.data.variants.forEach(variant => {
                        response.download.push({
                            witdh: (type_media == "animated_gif") ? null : variant.url.match(/\/[0-9]+x[0-9]+\//gmi)[0].match(/[0-9]+x[0-9]+/gmi)[0].split("x")[0],
                            height: (type_media == "animated_gif") ? null : variant.url.match(/\/[0-9]+x[0-9]+\//gmi)[0].match(/[0-9]+x[0-9]+/gmi)[0].split("x")[1],
                            dimension: (type_media == "animated_gif") ? null : variant.url.match(/\/[0-9]+x[0-9]+\//gmi)[0].match(/[0-9]+x[0-9]+/gmi)[0],
                            url : variant.url
                        })
                    })
                    resolve(response)
                }).catch((e)=>{
                    reject({
                        found: false,
                        error: e.message
                    })
                })
            }

        }).catch((e)=>{
            reject({
                found: false,
                error: e.message
            })
        })

    })
}