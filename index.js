const handlePing = require('./handlePing.js')

const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')

let rawdata = fs.readFileSync('./logins.json')
let logins = JSON.parse(rawdata)

let pingsArray = []

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', msg => {
  if(msg.author.id == '866881336106942465') return
  console.log(msg.author.id)
  if(msg.content.indexOf('<@!') != -1 && msg.content.indexOf('>') != -1){
    pingsArray = handlePing(msg, pingsArray)
  }
  if (msg.content == 'ping') {
    msg.channel.send('pong')
  }
});

client.login(logins.token)