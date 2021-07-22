const reqRestAPI = require('../utilities/reqRestAPI.js')
const handleErrorNoArgs = require('../utilities/error handling/handleErrorNoArgs')
const handleErrorTooManyArgs = require('../utilities/error handling/handleErrorTooManyArgs')

/**
 * 
 * @param {*} msg 
 */
async function skin(msg){
    if(msg.content.indexOf(' ') == -1){
        handleErrorNoArgs(msg, "skin")
        return
    }

    if((msg.content.match(/ /g) || []).length >= 2){
        handleErrorTooManyArgs(msg)
        return
    }
    
    let username = msg.content.substring(6,msg.content.length)
    
    let url = "https://api.mojang.com/users/profiles/minecraft/" + username
    let json = await reqRestAPI(url)    
    let uuid = json.id

    msg.lineReply('https://crafatar.com/renders/body/' + uuid)
}

module.exports = skin