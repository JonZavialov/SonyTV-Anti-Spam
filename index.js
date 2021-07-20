const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')

let rawdata = fs.readFileSync('./logins.json');
let logins = JSON.parse(rawdata);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    console.log(msg.content)
    if(msg.content.indexOf('<@!') != -1 && msg.content.indexOf('>') != -1)
    if (msg.content === 'ping') {
    msg.channel.send('pong');
     }
});

client.login(logins.token);