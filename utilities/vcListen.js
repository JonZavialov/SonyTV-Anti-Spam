async function vcListen(msg){
    const connection = await msg.member.voice.channel.join()
    
    connection.on('speaking', (user, speaking) => {
        var isSpeaking
        if(speaking.bitfield == 1){
            isSpeaking = true
        }
        else{
            isSpeaking = false
        }
        console.log(isSpeaking)
    })
}

module.exports = vcListen