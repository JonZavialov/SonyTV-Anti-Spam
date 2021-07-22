const reqRestAPI = require('../utilities/reqRestAPI.js')
const handleErrorNoArgs = require('../utilities/error handling/handleErrorNoArgs')
const handleErrorTooManyArgs = require('../utilities/error handling/handleErrorTooManyArgs')
const embedMessage = require('../utilities/embedMessage')

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
    .catch(error => {
        msg.lineReply('No such name!')
        return 
    })
    let uuid = json.id
    username = json.name
    
    let embedTitle = username + "'s Skin"
    let content = 'https://crafatar.com/renders/body/' + uuid
    let message = embedMessage(embedTitle,content)
    msg.lineReply(message)
}

module.exports = skin