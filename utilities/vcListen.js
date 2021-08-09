async function vcListen(msg){
    const connection = await msg.member.voice.channel.join()

    connection.on('speaking', (user, speaking) => {
        var isSpeaking
        
        if(speaking.bitfield == 1){
            isSpeaking = true
            const dispatcher = connection.play('C:\\Users\\jzavy\\Desktop\\SonyTV-Anti-Spam\\audios\\shut.mp3')
        }
        else{
            isSpeaking = false
        }
    })
}

module.exports = vcListen