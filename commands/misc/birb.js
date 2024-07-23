const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('birb')
        .setDescription('birb'),
    async execute({client, interaction}) {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          };
          
          const response = await fetch('https://v2.yiff.rest/animals/birb', options)

          const birb = await response.json();
          await interaction.reply(birb.images[0].url);
    }
}