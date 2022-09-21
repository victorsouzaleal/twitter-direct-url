const axios = require("axios"), cheerio = require("cheerio"),qs = require('qs')
module.exports = twitterGetUrl = (url_media) =>{
    return new Promise((resolve,reject)=>{
        let twitter_url_array = url_media.split("/")
        twitter_url_array[5] = twitter_url_array[5].split("?")[0]
        url_media = twitter_url_array.join("/")
        var url = url_media.replace("twitter", "ssstwitter")
        axios.post(url).then(result => {
            let $ = cheerio.load(result.data), videoUrl = [], imageUrl = null, response = {}, type = null

            //CHECK FILE TYPE
            if($('div.result_overlay > img').length != 0){
                type = $('div.result_overlay').text().includes("Oops! It seems that this tweet doesn't have a video!") ? "image" : "video/gif"
            }

            if(type == "video/gif"){
                $('div.result_overlay > a').each((i, element) => {
                    let cheerioElement = $(element)
                    let videoDimensions = cheerioElement.text().split(" ")[1].includes("x") ? cheerioElement.text().split(" ")[1] : null
                    let videoWidth = (videoDimensions != undefined) ? videoDimensions.split("x")[0] : null
                    let videoHeight = (videoDimensions != undefined) ? videoDimensions.split("x")[1] : null
                    videoUrl.push({
                        width: videoWidth,
                        height: videoHeight,
                        dimension: videoDimensions,
                        url: cheerioElement.attr("href").includes("https://video.twimg.com") ? cheerioElement.attr("href") : `https://ssstwitter.com${cheerioElement.attr("href")}`
                    })
                })
                response = {
                    found: true,
                    type: "video/gif",
                    dimensionsAvailable: videoUrl.length,
                    download: videoUrl
                }
            } else if (type == "image"){
                $('div.result_overlay > img').each((i, element) => {
                    let cheerioElement = $(element)
                    imageUrl = (cheerioElement.attr("src") != "/images/no_thumb.png") ? cheerioElement.attr("src") : null
                })
                response = {
                    found: true,
                    type: "image",
                    download: imageUrl
                }
            } else {
                response = {
                    found: false
                }
            }
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}
