const reqRestAPI = require('../utilities/reqRestAPI.js')

/**
 * 
 * @param {*} msg 
 */
async function skin(msg){
    let username = msg.content.substring(6,msg.content.length)
    
    let url = "https://api.mojang.com/users/profiles/minecraft/" + username
    let json = await reqRestAPI(url)    
    let uuid = json.id

    msg.lineReply('https://crafatar.com/renders/body/' + uuid)
}

module.exports = skin