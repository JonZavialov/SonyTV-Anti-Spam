const ytdl = require('ytdl-core')
var opus = require('node-opus')

function vcPlay(msg,url){
    console.log(url)
    msg.member.voice.channel.join().then(connection =>{
        const dispatcher = connection.play(ytdl(url))
    }).catch(err => console.log(err))
}

module.exports = vcPlay