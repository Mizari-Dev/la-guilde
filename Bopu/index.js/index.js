const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }

  if(msg.content === 'help'){
  	var embed = new Discord.RichEmbed()
  		.setTitle('Comandes')
  		.setDescription('voici une liste des commandes')
  		.addField('help', 'affiche la liste des commandes')
  		.addField('ping', 'repond par pong c\'est drole')
  		.setColor('#ff0000')
  	msg.channel.send(embed);
  }
});

client.login('NDQzODM5Mzc2NzQxMzY3ODM4.DeSNQQ.DaES9XwfRoauASD_alOiwgT-3XE');