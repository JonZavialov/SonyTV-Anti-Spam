const reqRestAPI = require('../utilities/reqRestAPI')


/**
 * 
 * @param {*} msg 
 */
async function affirmation(msg){
    let json = await reqRestAPI('https://www.affirmations.dev/')
    msg.lineReply(json.affirmation)
}

module.exports = affirmation