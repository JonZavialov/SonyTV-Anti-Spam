function checkForMassPing(msg, pingsArray){
    let content = msg.content
    let userDict
    let userList = []
    let dictLoc

    let beginPingCount = (content.match(/<@!/g) || []).length

    if(beginPingCount > 3){
        msg.lineReply("No mass pinging!")
        
        //pushes the ID of everyone who has pinged previosly to an array
        for(var i = 0; i < pingsArray.length; i++){
            userDict = pingsArray[i]
            userList.push(userDict.id)
        }

        //checks if the pinger has an ID in the array, essentially seeing if this is their first ping
        for(var i = 0; i < userList.length; i++){
            if(userList[i] == msg.author.id){ 
                dictLoc = i
                break 
            }
        }

        let author = pingsArray[dictLoc].id
        let pings = pingsArray[dictLoc].pings
        let timestamp = pingsArray[dictLoc].timestamp
        let infractions = pingsArray[dictLoc].infractions + 1

        const memberDict = {
            id: author,
            pings: pings,
            timestamp: timestamp,
            infractions: infractions
        }

        pingsArray[dictLoc] = memberDict
    }

    return pingsArray
}

module.exports = checkForMassPing