const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('foxgirl')
        .setDescription('uwu'),
    async execute({client, interaction}) {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          };
          
          const response = await fetch('https://nekos.life/api/v2/img/fox_girl', options)

          const foxgirl = await response.json();
          await interaction.reply(foxgirl.url);
    }
}