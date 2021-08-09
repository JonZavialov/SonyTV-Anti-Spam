/**
 * 
 * @param {*} msg 
 * @param {*} client 
 * @returns 
 */
function handleDM(msg,client){
    if(msg.content == '1'){
        msg.lineReply('For any assitance, please contact my creator, sonytv#0348')
        return
    }
    
    msg.channel.send(`**Help**\n\n> Thank you for contacting ${client.user.username}! Send a message with the number of the type of help you need.\n\n**1.** Help`)
    msg.react('👍')
}

module.exports = handleDM