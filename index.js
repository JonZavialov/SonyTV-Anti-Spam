const handlePing = require('./handlePing.js')

const Discord = require('discord.js')
require('discord-reply')
const client = new Discord.Client()
const fs = require('fs')
var gen = require('random-seed').create()

let rawdata = fs.readFileSync('./logins.json')
let logins = JSON.parse(rawdata)

let pingsArray = []

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('Moderating The Bryson Coalition');
});

client.on('message', msg => {
  if(msg.author.id == '866881336106942465') return

  if(msg.content == '!cock'){
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

  if(msg.reference != null){
    msg.channel.messages.fetch(msg.reference.messageID)
    .then(message => {
      if(message.author.id == '866881336106942465'){
        msg.lineReply('Fan pings :yawning_face: :yawning_face: :yawning_face:')
      }
    })
  }

  if(msg.content.indexOf('<@!866881336106942465>')!=-1){
    msg.lineReply('Fan pings :yawning_face: :yawning_face: :yawning_face:')
  }

  if(msg.content.indexOf('<@!') != -1 && msg.content.indexOf('>') != -1){
    pingsArray = handlePing(msg, pingsArray, Date.now())
  }

  console.log(pingsArray)
});

client.login(logins.token)