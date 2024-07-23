const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('diceroll')
        .setDescription('Rolls a 6 sided dice'),
    execute({client, interaction}) {
        interaction.reply({content: `The dice rolled ${Math.floor(Math.random() * 6) + 1}`})
    }
}