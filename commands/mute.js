const fs = require('fs')
const handleErrorNoMention = require('../utilities/error handling/handleErrorNoMention')
const handleErrorTooManyArgs = require('../utilities/error handling/handleErrorTooManyArgs')


let rawdata = fs.readFileSync('./logins.json')
let logins = JSON.parse(rawdata)

/**
 * 
 * @param {*} id 
 * @param {*} client 
 */
function mute(msg, client){
    if(msg.content.indexOf('<@!') == -1 && msg.content.indexOf('>') == -1){
        handleErrorNoMention(msg)
        return
    }

    if((msg.content.match(/ /g) || []).length >= 3){
        handleErrorTooManyArgs(msg)
        return
    }

    let muteID = logins.muteRole

    let mention = msg.content.substring(10,msg.content.length)
    let id = mention.substring(3,mention.length-1)
    
    const guild = client.guilds.cache.get(logins.server) // get the guild object
    let muteRole = guild.roles.cache.find(r => r.id === muteID)

    let thanos = client.users.fetch(id);
    thanos.then(function(user) {
        const member = guild.member(user) // convert the User object to a GuildMember
        if(member.roles.cache.has(muteID)){
            msg.lineReply(`${mention} is already muted!`)
        }
        else if(!member){
            msg.lineReply('User not found!')
        }else member.roles.add(muteRole)
    })
}

module.exports = mute