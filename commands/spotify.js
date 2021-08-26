const handleErrorNoArgs = require('../utilities/error handling/handleErrorNoArgs')
const handleErrorTooManyArgs = require('../utilities/error handling/handleErrorTooManyArgs')
const { MessageEmbed } = require('discord.js');
const spdl = require('spdl-core');
const ytsr = require('ytsr')
const vcPlay = require('../utilities/vcPlay.js')

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
    
    spdl.getInfo(url)
    .then(async(infos) => {
        const artistAndName = infos.artist + " " + infos.title
        const searchResults = await ytsr(artistAndName, { limit: 1 })
        vcPlay(msg,searchResults.items[0].url)
    })
    .catch(error => {
        console.log(error)
        msg.lineReply('Invalid URL!')
    })
}

module.exports = spotify