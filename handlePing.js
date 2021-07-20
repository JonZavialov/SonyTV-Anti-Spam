/**
 * 
 * @param {*} msg 
 * @param {Array} pingsArray 
 */
function handlePing(msg, pingsArray){
    let userDict = {}
    let userList = []
    let hasPinged = false
    let pings

    for(var i = 0; pingsArray.length; i++){
        userDict = pingsArray[i]
        userList.push(userDict.id)
    }

    for(var i = 0; userList.length; i++){
        if(userList[i] == msg.author.id){ 
            hasPinged = true
            return 
        }
    }

    if(hasPinged){
        pings =
    }

    const memberDict = {
        id: msg.author.id,
        pings: 
    }

    return pingsArray
}

module.exports = handlePing