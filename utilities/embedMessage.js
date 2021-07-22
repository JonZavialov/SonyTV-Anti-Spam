const Discord = require('discord.js')

/**
 * 
 * @param {*} title 
 * @param {*} nameOfContent 
 * @param {*} content 
 * @returns 
 */
function embedMessage(title,content){
    const embed = new Discord.MessageEmbed()
    .setTitle(title)  
    .setImage(content)
    .setColor(0x3B4B7F)
    .setFooter('Bryson Bot');

    return embed
}

module.exports = embedMessage