const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('uptime').setDescription('See how long the bot has been on for'),
	new SlashCommandBuilder().setName('github').setDescription('Get the GitHub repo for this bot'),
    new SlashCommandBuilder().setName('invite').setDescription('Invite the bot'),
    new SlashCommandBuilder().setName('amigay').setDescription("See if you're gay"),
    new SlashCommandBuilder().setName('luckyroll').setDescription("Take your chances and roll the random object!"),
    new SlashCommandBuilder().setName('scott').setDescription("Scott the Woz command!!!!!!!!!"),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('[SPARKBOT MANAGER] Registered commands globally.'))
	.catch(console.error);
