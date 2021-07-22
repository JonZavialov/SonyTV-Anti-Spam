/**
 * 
 * @param {*} msg 
 */
function handleErrorTooManyArgs(msg){
    msg.lineReply(`Too many arguements!`)
}

module.exports = handleErrorTooManyArgs