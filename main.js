const discord = require('discord.js');

const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds
    ]
})

const config = require('./config.json');
const fs = require('fs');

client.on('ready', () => {
    console.log('Bot is ready!');
});



client.login(config.token);