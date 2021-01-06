/*
i'm not putting in effort lol
*/

const Discord = require('discord.js');
const client = new Discord.Client();
const { exec } = require('child_process');
require('dotenv').config();


// dog shit quotes smh
const ZaneQuoteList = require('./quotes.json');

client.on('ready', () => {
    client.user.setPresence({activity: {name: 'aqua.sike', type:'LISTENING'}});
});

client.on('message', async msg => {
    const msgcontent = msg.content.toLowerCase();
    if (!msgcontent.startsWith('hey zane')) return;
    if (msgcontent.includes('quotes') || msgcontent.includes('quote')) {
        const ClarkQuote = new Discord.MessageEmbed;
        await ClarkQuote.setDescription(ZaneQuoteList[Math.floor(Math.random()*ZaneQuoteList.length)]);
        return msg.reply(ClarkQuote);
    }
    
    if (msgcontent.includes('ping')) {
        const m = await msg.channel.send('ping');
        m.edit(`pong! ${m.createdTimestamp - msg.createdTimestamp}ms`);
    }
    
    if (msgcontent.includes('reboot')) {
        if (msg.author.id == 201124404254605312 || 189400912333111297 || 278627940403773441) {
            await msg.reply('rebooting sec.');
            process.exit(1)
        }
    }
    
    if (msgcontent.includes('pull')) {
        if (msg.author.id == 201124404254605312 || 189400912333111297 || 278627940403773441) {
            const m = await msg.reply('pulling sec.');
            await exec('cd ./ && git pull');
            m.edit('pulled successfully');
        }
    }
    
    
});

client.login(process.env.TOKEN);
