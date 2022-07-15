const twitterGetUrl = require("./index")

async function test(url){
    let result = await twitterGetUrl(url)
    return result
}

//Test Image URL
test("https://twitter.com/CATBRAINCELL/status/1547947201657049089").then(result=>{
    console.dir({
        test: "Image Test",
        status: "success",
        result
    }, {depth:null})
}).catch((err)=>{
    console.dir({
        test: "Image Test",
        status: "error",
        result: err.message
    }, {depth:null})
})

//Test Video URL
test("https://twitter.com/TweetsOfCats/status/1547778899534172160").then(result=>{
    console.dir({
        test: "Video Test",
        status: "success",
        result
    },{depth: null})
}).catch((err)=>{
    console.dir({
        test: "Video Test",
        status: "error",
        result: err.message
    }, {depth:null})
})

//Test GIF URL
test("https://twitter.com/Victorsouzaleal/status/1547970593005322241").then(result=>{
    console.dir({
        test: "GIF Test",
        status: "success",
        result
    }, {depth: null})
}).catch((err)=>{
    console.dir({
        test: "GIF Test",
        status: "error",
        result: err.message
    }, {depth:null})
})

//Test NOT FOUND URL
test("https://twitter.com/_nbkrd/status/1368315217756909575").then(result=>{
    console.dir({
        test: "Not Found Test",
        status: "success",
        result
    }, {depth:null})
}).catch((err)=>{
    console.dir({
        test: "Not Found Test",
        status: "error",
        result: err.message
    }, {depth: null})
})