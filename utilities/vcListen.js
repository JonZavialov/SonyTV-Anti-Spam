/**
 * 
 * @param {*} msg 
 */
async function vcListen(msg){
    const connection = await msg.member.voice.channel.join()

    connection.on('speaking', (user, speaking) => {
        if(speaking.bitfield == 1){
            const dispatcher = connection.play('C:\\Users\\jzavy\\Desktop\\SonyTV-Anti-Spam\\audios\\shut.mp3')
        }
    })
}

module.exports = vcListen