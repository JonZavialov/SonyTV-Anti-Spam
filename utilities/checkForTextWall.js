/**
 * 
 * @param {*} msg 
 */
function checkForTextWall(msg){
    if(msg.content.length < 620) return
    
    msg.channel.send(`${msg.author} No text walling!`)
    if(!msg.deleted){
        msg.delete()
        .catch(console.error)
    }
}

module.exports = checkForTextWall