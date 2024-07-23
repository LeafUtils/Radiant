const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('waifu')
        .setDescription('uwu'),
    async execute({client, interaction}) {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          };
          
          const response = await fetch('https://api.waifu.im/search?is_nsfw=false&included_tags=waifu', options)

          const waifu = await response.json();
          await interaction.reply(waifu.images[0].url);
    }
}