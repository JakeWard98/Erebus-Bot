const Discord = require('discord.js-commando');
const embed = require('discord.js');

class Help extends Discord.Command{
	constructor(client){
		super(client,{
			name: 'modhelp',
			group: 'mod',
			memberName: 'help',
			description: 'Help command to show commands'
		});
	}

	async run (message, args){
		var helpEmbed = new embed.RichEmbed()
			.setColor('#9013FE')
            .setTitle('Mod Help')
            .addField('Prefix', 'The Prefix is ^')
            .addField('help', 'Calls the user Help Dialogue box')
            .addField('modHelp', 'Calls this Help Dialogue Box')
			.addField('hello', 'Greets the User')
			.addField('server', 'Shows the Server Name')
			.addField('id', 'The bot displays the users Discord ID')
			.addField('name', 'The bot displays the users global Discord Name & Tag')
			.addField('join','The Bot joins your Voice Channel')
			.addField('dc','The Bot leaves the Voice Channel')
			.addField('play + YT URL', 'The Bot Plays the Song and Disconnects [No Queue System atm]')
            .addField('numbers', 'Shows Total Members')
            .addField('ping', 'Pings the bot and show the average "Heartbeat" (Can be very temperamental)')
            .setTimestamp()
            .setFooter('Bot Still in Development')
		message.channel.send(helpEmbed);
	}
}

module.exports = Help;