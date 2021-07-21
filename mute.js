const fs = require('fs')


let rawdata = fs.readFileSync('./logins.json')
let logins = JSON.parse(rawdata)

function mute(id, client){
    const guild = client.guilds.cache.get(logins.server) // get the guild object
    let muteRole = guild.roles.cache.find(r => r.id === logins.muteRole)

    let thanos = client.users.fetch(id);
    thanos.then(function(user) {
        const member = guild.member(user) // convert the User object to a GuildMember!
        member.roles.add(muteRole)
    });
}

module.exports = mute