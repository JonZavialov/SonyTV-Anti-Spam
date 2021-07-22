var gen = require('random-seed').create()

/**
 * 
 * @param {*} msg 
 */
function cock(msg){
    let seed = msg.author.username + msg.author.discriminator
    let reply
    gen.seed(seed)
    let n = gen.intBetween(100, 999)
    n = n /100
    if(n < 5){
      reply = "pathetic. :rofl:"
    }else if (n < 8){
      reply = "average. :person_shrugging:"
    }else{
      reply = ":scream:"
    }
    msg.lineReply(n + " inches, " + reply)
}

module.exports = cock