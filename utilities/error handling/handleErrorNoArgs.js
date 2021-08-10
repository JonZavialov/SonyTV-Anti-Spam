/**
 * 
 * @param {*} msg 
 * @param {*} args 
 */
function handleErrorNoArgs(msg, args){
    msg.lineReply(`Missing argument \`\`${args}\`\``)
}

module.exports = handleErrorNoArgs