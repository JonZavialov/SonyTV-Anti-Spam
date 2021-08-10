const spdl = require('spdl-core');
const handleErrorNoArgs = require('../utilities/error handling/handleErrorNoArgs')
const handleErrorTooManyArgs = require('../utilities/error handling/handleErrorTooManyArgs')
const { MessageEmbed } = require('discord.js');

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
    if (!spdl.validateURL(url)) return msg.lineReply('Invalid URL');

    const channel = msg.member.voice.channel;
    if (!channel) return msg.channel.send('Not in a voice channel');
    try {
        const connection = await channel.join();
        connection
        .play(await spdl(url))
        .on('error', e => console.error(e));
        const infos = await spdl.getInfo(url);
        const embed = new MessageEmbed()
        .setTitle(`Now playing: ${infos.title}`)
        .setURL(infos.url)
        .setColor('#1DB954')
        .addField('Artist', infos.artist, true)
        .addField('Duration', formatDuration(infos.duration), true)
        .setThumbnail(infos.thumbnail);
        msg.channel.send(embed);
    } catch (err) {
        console.error(err);
        msg.channel.send(`An error occurred: ${err.message}`);
    }
}

function formatDuration(duration) {
    let seconds = duration / 1000;
    return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`;
  }

module.exports = spotify