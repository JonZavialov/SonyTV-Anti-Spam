const handlePing = require('./utilities/handlePing.js')
const cock = require('./commands/cock.js')
const skin = require('./commands/skin.js')
const checkForMassPing = require('./utilities/checkForMassPing.js')
const mute = require('./commands/mute.js')
const affirmation = require('./commands/affirmation')
const handleDM = require('./utilities/handleDM.js')
const vcListen = require('./utilities/vcListen.js')
const checkForTextWall = require('./utilities/checkForTextWall.js')
const spotify = require('./commands/spotify')

const Discord = require('discord.js')
require('discord-reply')
const client = new Discord.Client()
const fs = require('fs')

const prefix = "sony "


let rawdata = fs.readFileSync('./logins.json')
let logins = JSON.parse(rawdata)

let pingsArray = []

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('Moderating The Bryson Coalition');
})

client.on('message', msg => {
  if(msg.author.id == '866881336106942465') return
  
  checkForTextWall(msg)

  if (msg.channel.type === "dm"){
    handleDM(msg,client)
  }

  if(msg.content == prefix + "affirmation"){
    affirmation(msg)
  }

  if(msg.content == prefix + 'cock'){
    cock(msg)
  }

  if(msg.content == prefix + "join"){
    if(!msg.member.voice.channel){
      msg.lineReply("You're not in a voice channel!")
    }else{ 
      vcListen(msg)
      msg.react('👍')
    }
  }

  if(msg.content == prefix + "leave"){
    if(!msg.guild.me.voice.channel){
      msg.lineReply('I\'m not in a voice channel!')
    }else{ 
      msg.guild.me.voice.channel.leave()
      msg.react('👍')
    }
  }
  
  if(msg.content == prefix + "react"){
    msg.react('👍')
  }

  if(msg.content.startsWith(prefix + 'mute')){
    mute(msg, client)
    msg.react('👍')
  }

  if(msg.content.startsWith(prefix + 'spotify')){
    spotify(msg)
  }

  if(msg.content.startsWith(prefix + 'skin')){
    skin(msg)
    msg.react('👍')
  }

  if(msg.reference != null){
    msg.channel.messages.fetch(msg.reference.messageID)

    .then(message => {
      if(message.author.id == '866881336106942465'){
        msg.lineReply('Fan pings :yawning_face: :yawning_face: :yawning_face:')
      }
    })
  }

  if(msg.content.indexOf('866881336106942465')!=-1){
    msg.lineReply('Fan pings :yawning_face: :yawning_face: :yawning_face:')
  }

  if(msg.content.indexOf('<@!') != -1 && msg.content.indexOf('>') != -1){
    handlePing(msg, pingsArray, Date.now())
    .then(_pingsArray => {
      pingsArray = _pingsArray
      pingsArray = checkForMassPing(msg,pingsArray)
    })
    .catch(error => {})
  }
  //console.log(pingsArray)
  //console.log(msg.content)
})

client.login(logins.token)