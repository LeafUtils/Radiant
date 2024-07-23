const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kitty')
        .setDescription('generates akitty'),
    async execute({client, interaction}) {
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          };
          
          const response = await fetch('https://nekos.life/api/v2/cat', options)

          const kitty = await response.json();
          await interaction.reply(kitty.cat);
    }
}