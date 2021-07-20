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
    let dictLoc

    //pushes the ID of everyone who has pinged previosly to an array
    for(var i = 0; i < pingsArray.length; i++){
        userDict = pingsArray[i]
        userList.push(userDict.id)
    }

    //checks if the pinger has an ID in the array, essentially seeing if this is their first ping
    for(var i = 0; i < userList.length; i++){
        if(userList[i] == msg.author.id){ 
            hasPinged = true
            dictLoc = i
            break 
        }
    }

    if(hasPinged){
        pings = pingsArray[dictLoc].pings + 1
    }else{
        pings = 1
    }

    const memberDict = {
        id: msg.author.id,
        pings: pings
    }

    if(hasPinged){
        pingsArray[dictLoc] = memberDict
    }else{
        pingsArray.push(memberDict)
    }

    return pingsArray
}

module.exports = handlePing