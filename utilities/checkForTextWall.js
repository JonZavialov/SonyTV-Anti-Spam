const emojiRegex = require('emoji-regex/RGI_Emoji.js');

const regex = emojiRegex();

/**
 * 
 * @param {*} msg 
 */
function checkForTextWall(msg){
    let match;
    let counter = 0
    while (match = regex.exec(msg.content)) {
        counter++

    } 

    let emojiPercentage = counter/msg.content.length

    //console.log(emojiPercentage)

    if(msg.content.length < 620) return
    
    msg.channel.send(`${msg.author} No text walling!`)
    if(!msg.deleted){
        msg.delete()
        .catch(console.error)
    }
}

module.exports = checkForTextWall