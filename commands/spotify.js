const handleErrorNoArgs = require('../utilities/error handling/handleErrorNoArgs')
const handleErrorTooManyArgs = require('../utilities/error handling/handleErrorTooManyArgs')
const { MessageEmbed } = require('discord.js');
const spdl = require('spdl-core');

async function spotify(msg){
    if((msg.content.match(/ /g) || []).length == 1){
        handleErrorNoArgs(msg, "url")
        return
    }

    if((msg.content.match(/ /g) || []).length >= 3){
        handleErrorTooManyArgs(msg)
        return
    }

    let url = msg.content.substring(13, msg.content.length)
    console.log(url)
    
    spdl.getInfo(url).then(infos => {
        console.log(infos)
    });

    if (!spdl.validateURL(url)){
        return msg.lineReply('Invalid URL')
    }else{
        return msg.lineReply('Valid URL')
    }
}

module.exports = spotify