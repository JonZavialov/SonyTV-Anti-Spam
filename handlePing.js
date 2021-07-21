/**
 * 
 * @param {*} msg 
 * @param {Array} pingsArray 
 */
async function handlePing(msg, pingsArray, timestamp){
    let userDict = {}
    let userList = []
    let hasPinged = false
    let pings
    let dictLoc
    let infractions

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
        infractions = pingsArray[dictLoc].infractions
    }else{
        pings = 1
        infractions = 0
    }

    const memberDict = {
        id: msg.author.id,
        pings: pings,
        timestamp: timestamp,
        infractions: infractions
    }

    if(hasPinged){
        pingsArray[dictLoc] = memberDict
    }else{
        pingsArray.push(memberDict)
    }

    return pingsArray
}

module.exports = handlePing