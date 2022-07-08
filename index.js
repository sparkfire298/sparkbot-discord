const { Client, Intents, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES]
});
const logch = "channelid"; // Log channel ID
const token = "token"; //Token from the Dev Portal
const ownerid = "yourID" // Your user ID
const version = "1.5";
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));
const querystring = require('querystring');




bot.once('ready', () => {   
    
    
  const activities = ['Minecraft', 'Google on Google', 'Netscape Navigator', 'with a hammer', 'nothing', 'This status changes every few seconds', 'Among Us', `${bot.guilds.cache.size} servers`, 'Fall Guys', 'Twitter', 'my instagram was hacked', 'www.sparkfire298.tk', 'Thanos', 'Playing Playing', 'Free games for google search', 'The Backrooms', 'SUS?', '-help', 'Fart', 'foobar2000', 'TikTok', 'cock simulator', 'Bouncy by Sparkfire298', '69', 'trans rights', 'with your mom', 'MLG Memes', 'in ', 'with the sun', 'spoon', 'Reet', 'Shup', 'Shark simulator', 'discord.gg', 'No more cussing guys!!!!!', '*Insert funny status*', 'help i need status lines for my bot', 'sparkbot', 'const activities = ["yourmom", "penis"]', 'coder', 'linux btw', 'Discord.js > Discord.py', `v${version}`, 'Find this cheech', 'pro gaemr !!!', 'Octane - Creo', 'pings', 'music', 'Ping! - Exyl', 'dubstep is best'];

  const updateDelay = 30; 
  let currentIndex = 0;

  setInterval(() => {
    const activity = activities[currentIndex];
    bot.user.setActivity((activity), { type: 'PLAYING', url: "https://twitch.tv/sparkfire298" });
 
    currentIndex = currentIndex >= activities.length - 1 
      ? 0
      : currentIndex + 1;
  }, updateDelay * 1000);
    const channel = bot.channels.cache.get(logch);

    channel.send("sparkbot has restarted");
	console.warn('The bot is online');
    console.log(`Connecting...`);
    console.log(`${bot.guilds.cache.size} servers`);
});


bot.on("guildCreate", () => {
    console.log("Added to one guild!");
const channel = bot.channels.cache.get(logch);
channel.send(`Added to a new server! I am now in ${bot.guilds.cache.size} servers.`);
})


bot.on("guildDelete", () => {
    const channel = bot.channels.cache.get(logch);
channel.send(`Removed from a server. I am now in ${bot.guilds.cache.size} servers.`);
})

const blockedUsers = [];
const admins = [];

bot.on('message', message => {
    if (message.channel.type === "dm") {
        message.reply("I cannot run in Direct Messages.")
    }
    	if (blockedUsers.includes(message.author.id)) return;
		if (message.content === '-help') {
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
	    .setTitle('sparkbot help menu')
        .setDescription('*Fun:*\nscott, funny, captcha, whoami, amigay, console, luckyroll\n\n*Misc:*\nhelp, stats, invite, whatsnew, newestvid, uptime, test, faulthistory, github, credits, embed, join\n\n*Useful:*\naddbot\n\nUsage: -scott OR -suggest (Suggestion)\n\n*Slash commands:*\nType `/` then click sparkbot to see!\n\nMade by **[sparkfire298](https://www.sparkfire298.tk)** in [Discord.js](https://discordjs.guide)\nGitHub Source: https://github.com/25sp/sparkbot')
        .setFooter(`Run -help-noembed to remove the embed\nv${version}`);
        
  message.reply({ embeds: [embed] });
	}
    if (message.content === '-help-noembed') {
        message.reply('*Fun:*\nscott, funny, captcha, whoami, amigay, console, luckyroll\n\n*Misc:*\nhelp, stats, invite, whatsnew, newestvid, uptime, test, faulthistory, github, credits, embed, join\n\n*Useful:*\naddbot\n\nUsage: -scott OR -suggest (Suggestion)\n\n*Slash commands:*\nType `/` then click sparkbot to see!\n\nMade by **[sparkfire298](https://www.sparkfire298.tk)** in [Discord.js](https://discordjs.guide)\nGitHub Source: https://github.com/25sp/sparkbot')
    }
    if (message.content === '-scott') {
		message.reply('Hey all, Scott here.');
	}
    if (message.content === "-getreal") {
        message.reply("get real");
        message.react("😡")
    }
    if (message.content === '-funny') {
		message.reply('HAHAHAHAHAHAHAHAHAHAHAHHAHAHA HAHAAHAHAHAAHHAHAAHAHAHAHAHAH HAHAHAHHAHAHAHAHAHAHAHAHHAHA HAHAHAHJHAHAHAHHAHAHAHAHAHAHAHAHHA');
        message.react('🤣');
	}
    if (message.content === '-invite') {
		 const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
	    .setTitle('Invite')
        .setDescription(`[Click here to invite!](https://discord.com/api/oauth2/authorize?client_id=${bot.user.id}&permissions=8&redirect_uri=https%3A%2F%2Fwww.sparkfire298.tk%2Fbots%2Fsparkbot%2Finvite%2Fthanks&response_type=code&scope=bot%20applications.commands%20identify)`);
        
  message.reply({ embeds: [embed] });
	}
   
    if (message.content === "-newsletter") {
        	 const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
	    .setTitle('Newsletter')
        .setDescription('[Click here to sign up!](https://discord.com/api/oauth2/authorize?client_id=975699960869838869&redirect_uri=https%3A%2F%2Fwww.sparkfire298.tk%2Fbots%2Fsparkbot%2Finvite%2Fthanks&response_type=code&scope=email)');
        
  message.reply({ embeds: [embed] });
    }
    if (message.content === '-whatsnew') {
		message.reply(`What's new? ${version}\n\n- Added slash commands and **-debug**`);
        message.channel.send(`Thanks for using sparkbot!`);
	}
    if (message.content === "-updatelog") {
        message.reply("https://www.sparkfire298.tk/bots/sparkbot/updatelog")
    }
    if (message.content === `<@${bot.user.id}>`) { //Set botid to your bot account's ID
		message.reply(`<@${message.author.id}>, my prefix is **-**`);
	}
    if (message.content === "-alert") {
        message.reply("The bot now supports slash commands! If you would like to try them, please reinvite the bot using `-invite`!");
    }
    if (message.content === "-uptime") {
        let days = Math.floor(bot.uptime / 86400000);
let hours = Math.floor(bot.uptime / 3600000) % 24;
let minutes = Math.floor(bot.uptime / 60000) % 60;
let seconds = Math.floor(bot.uptime / 1000) % 60;
        const embed = new Discord.MessageEmbed()
        .setColor('7289da')
	    .setTitle('uptime')
        .setDescription(`${days} day(s), ${hours} hours ${minutes} minutes and ${seconds} seconds`)
        .setFooter('gamer');
        
  message.reply({ embeds: [embed] });    }
    if (message.content === "-test") {
        message.reply(`Hello ${message.author.username}!`)
        const embed = new Discord.MessageEmbed()
        .setDescription("This is an embed I guess");
  message.reply({ embeds: [embed] });
    }
    if (message.content === "-faulthistory") {
        message.reply("```Fault History\n\n14 Jun 2022: Bot crashed and host was inaccessible\n2 Jul 2022: Host got terminated so the bot was moved to a new one```")
    }
    if (message.content === "-about") {
        message.reply(`sparkbot is a bot focusing on utility or jokes`)
    }
    if (message.content === "-credits") {
        message.reply("**Credits**\n\n- This bot was made by sparkfire298")
    }
    if (message.content === "-github") {
        message.reply("Set your own sparkbot up at https://github.com/25sp/sparkbot\n\nNOTE: You will need to host the bot yourself to use it. Please give proper credits to the developers. (sparkfire298)")
    }
    if (message.content === "-ping") {
        message.reply(`${bot.ws.ping} ms`)
    }
    if (message.content === "-whoami") {
        message.reply(`${message.guild.name}/${message.author.username}`)
    }
    if (message.content === "-embed") {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	    .setTitle('Title')
        .setDescription('Description\n[Link](https://www.sparkfire298.tk)')
        .setFooter('IS THIS WORKING??!?!?!?!?/');
        
  message.reply({ embeds: [embed] });
    }
    if (message.content === "-troubleshoot") {
        message.reply("Coming soon")
    }
    if (message.content === "sparkbot, are you feeling alright?") {
        message.channel.send("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    }
    if (message.content === "-amigay") {
            result = Math.floor(Math.random()*2)

    if(result == "0"){
        message.reply("yes")
    }
         else if(result == "1"){
        message.reply("no")
    }

    }
    if (message.content === "-stats" || message.content === "-botstats") {
                let days = Math.floor(bot.uptime / 86400000);
let hours = Math.floor(bot.uptime / 3600000) % 24;
let minutes = Math.floor(bot.uptime / 60000) % 60;
let seconds = Math.floor(bot.uptime / 1000) % 60;
                const stats = new Discord.MessageEmbed()
        .setColor('#5865f2')
	    .setTitle('sparkbot statistics')
        .setDescription(`Servers: ${bot.guilds.cache.size}\nPing: ${bot.ws.ping}\nBuild: ${version}\nOwner: sparkfire298\nUptime: ${days}d, ${hours}h, ${minutes}m, ${seconds}s\nCPU: Intel(R) Core(R) i5-10500TE @ 2.30 GHz\nNode: v16.13.1 on win32 x64\nServer location: Germany`)
        .setFooter(`ok`);
        
  message.reply({ embeds: [stats] });
    }
     if (message.content === "-luckyroll") {
          result = Math.floor(Math.random()*5)

    if(result == "0"){
        message.reply("YOU WIN!")
    }
         else if(result == "1"){
        message.reply("you lose, better luck next time")
    }
         else if(result == "2"){
        message.reply("you lose, better luck next time")
    }
         else if(result == "3"){
        message.reply("you lose, better luck next time")
    }
         else if(result == "4"){
        message.reply("you lose, better luck next time")
    }
         else if(result == "5"){
        message.reply("you lose, better luck next time")
    }
     }
    
    if (message.content === "-console") {
        message.reply("Which console do you want to simulate?\nAvailable options:\nTelnet\nPython\nCommand Prompt\nNode.js\n\nCorrect usage: -console Python, **use correct capitalization and spaces**\n\n:warning: THESE ARE JUST TEXT OUTPUTS, AND DO NOT DO ANYTHING TO THE BOT, THE BOT HOST, OR ANYTHING.")
    }
    if (message.content === "-console Telnet") {
        message.reply("```Welcome to Microsoft Telnet Client\nEscape Character is 'CTRL+]'\nMicrosoft Telnet> _```")
    }
    if (message.content === "-console Python") {
        message.reply('```Python 3.6.5 (v3.6.5:f59c0932b4, Mar 28 2018, 16:07:46) [MSC v.1900 32 bit (Intel)] on win32\nType "help", "copyright", "credits" or "license" for more information.\n>>>```')
    }
    if (message.content === "-console Command Prompt") {
        message.reply("```Microsoft Windows [Version 10.0.19044.1706]\n(c) Microsoft Corporation. All rights reserved.\n\nC:\Users\sparkbot>```")
    }
    if (message.content === "-console Node.js") {
        message.reply("```Welcome to Node.js v16.13.1.\nType \".help\" for more information.\n>```")
    }
    
    if (message.content.startsWith("-suggest")) {
         message.reply(`Thank you ${message.author.username}!\n\nNote: Abusing this command will get you bot banned`)
        const log = bot.channels.cache.get(logch);
        log.send(`${message.author.tag} (${message.author.id}) suggested:\n\n\`${message.content}\`\nin ${message.guild.name} (${message.guild.id})`);
        console.log(`${message.author.tag} (${message.author.id} suggested: ${message.content}`)
  } 
    if (message.content === "-join") {
         message.reply("No, amogus instead.")
    }
    if (message.content === "-ownertools") {
        if (message.author.id === ownerid) {
	message.reply(`--- **OWNER TOOLS** ---\n\nBlacklisted users: ${blockedUsers}\nAdmins: ${admins}\nServers: ${bot.guilds.cache.size}\nPing: ${bot.ws.ping}\nData Used: Null / Null`)
}
    }
    if (message.content.startsWith("-upload")) {
        if (message.author.id === ownerid) {
            message.reply("Uploaded. Check it here: https://discord.gg/un55EczerH")
            const log = bot.channels.cache.get("985749137226100746");
            log.send(`${message.content}\n\nUploaded by <@${message.author.id}>`)
        }
    }
    if (message.content === "-newestvid") {
        message.reply("Newest video by sparkfire298:\n2015 version of Windows 10\n\n> https://www.youtube.com/watch?v=qNr396TBCGQ")
    }
    if (message.content === "-captcha") {
           const captcha = new Discord.MessageEmbed()
           .setImage("https://cdn.upload.systems/uploads/z26XRzxQ.png")
           .setColor("RED")
           .setAuthor("Prove you are human and not a bot");
        
          message.reply({ embeds: [captcha] });
    }
    //Add bot
    if (message.content === "-addbot") {
        message.reply("Which bot would you like to add?\n\n- Dank Memer\n- Arcane\n- MEE6\n- Zira\n\n*What is this command?*\nThis command gives you the direct invite link for a bot, such as bots that take you outside Discord to invite it\n\n*Can I request bots to be added?*\nYes! Type `-suggest addbot (Bot) (Website/Inv Link)`")
    }
    
    if (message.content === "-addbot Dank Memer") {
        message.reply("Dank Memer's invite link is https://discord.com/oauth2/authorize?client_id=270904126974590976&scope=bot&permissions=8 (admin perms)")
    }
    if (message.content === "-addbot Arcane") {
        message.reply("Arcane's invite link is https://discord.com/oauth2/authorize?client_id=437808476106784770&scope=bot&permissions=8 (admin perms)")
    }
    if (message.content === "-addbot MEE6") {
        message.reply("MEE6's invite link is https://discord.com/oauth2/authorize?client_id=159985870458322944&scope=bot&permissions=8 (admin perms)")
    }
    if (message.content === "-addbot Zira") {
        message.reply("Zira's invite link is https://discord.com/oauth2/authorize?client_id=275813801792634880&scope=bot&permissions=8 (admin perms)")
    }
    //Addbot
    if (message.content === "-debug") {
        message.reply("Debug info\n\n**This bot seems to be responding.**\nChecking the recent logs, please wait.");
        message.channel.send("Everything looks alright! If there seems to be other stuff going on, please contact sparkfire298.");
        message.channel.send("Also, here's technical info if you need it:\n\n```Server Node: de4.bot-hosting.net\nServer ID (Pterodactyl): 7fc6f35a\nBot ID: 975699960869838869\nLocation: DE```")
    }


});


// 	SLASH COMMANDS


bot.on('interactionCreate', async interaction => {
    if (interaction.channel.type === "dm") {
        return interaction.reply({ content: "I cannot run in DMs. Either you can [invite the bot to a server](https://discord.com/api/oauth2/authorize?client_id=975699960869838869&permissions=8&scope=bot%20applications.commands) or head to a mutual server with me.", ephemeral: true })
    }
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	 if (commandName === 'github') {
        interaction.reply({ content: "[sparkbot's GitHub Repository](https://github.com/25sp/sparkbot)", ephemeral: true })
	} 
    
    else if (commandName === 'uptime') {
let days = Math.floor(bot.uptime / 86400000);
let hours = Math.floor(bot.uptime / 3600000) % 24;
let minutes = Math.floor(bot.uptime / 60000) % 60;
let seconds = Math.floor(bot.uptime / 1000) % 60;
		await interaction.reply({ content: `${days} day(s), ${hours} hours ${minutes} minutes and ${seconds} seconds`, ephemeral: true });
	} else if (commandName === 'amigay') {
          result = Math.floor(Math.random()*2)

    if(result == "0"){
        interaction.reply("yes")
    }
         else if(result == "1"){
        interaction.reply("no")
    }
        
    }
    else if (commandName === 'invite') {
        		 const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
	    .setTitle('Invite')
        .setDescription('[Click here to invite!](https://discord.com/api/oauth2/authorize?client_id=975699960869838869&permissions=8&redirect_uri=https%3A%2F%2Fwww.sparkfire298.tk%2Fbots%2Fsparkbot%2Finvite%2Fthanks&response_type=code&scope=bot%20applications.commands%20identify)');
        
  interaction.reply({ embeds: [embed], ephemeral: true });
    }
    
    else if (commandName === 'luckyroll') {
            result = Math.floor(Math.random()*5)

    if(result == "0"){
        interaction.reply({ content: "You win :clap:", ephemeral: true })
    }
         else if(result == "1"){
        interaction.reply({ content: "you lose, better luck next time", ephemeral: true })
    }
         else if(result == "2"){
        interaction.reply({ content: "you lose, better luck next time", ephemeral: true })
    }
         else if(result == "3"){
        interaction.reply({ content: "you lose, better luck next time", ephemeral: true })
    }
         else if(result == "4"){
        interaction.reply({ content: "you lose, better luck next time", ephemeral: true })
    }
         else if(result == "5"){
        interaction.reply({ content: "you lose, better luck next time", ephemeral: true })
    }
    }
    else if (commandName === 'scott') {
        interaction.reply({ content: 'Hey all, Scott here.', ephemeral: true })
    }
});










bot.login(token); 
