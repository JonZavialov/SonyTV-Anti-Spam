/**
 * 
 * @param {*} msg 
 * @param {*} args 
 */
function handleErrorNoArgs(msg, args){
    msg.lineReply(`Missing arguement \`\`${args}\`\``)
}

module.exports = handleErrorNoArgs