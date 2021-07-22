const fetch = require('node-fetch');

/**
 * 
 * @param {*} url 
 * @returns 
 */
async function reqRestAPI(url){
    let settings = { method: "Get" };

    const res = await fetch(url, settings)
    return res.json()
}

module.exports = reqRestAPI