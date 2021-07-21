const fetch = require('node-fetch');

async function reqRestAPI(url){
    let settings = { method: "Get" };

    const res = await fetch(url, settings)
    return res.json()
}

module.exports = reqRestAPI