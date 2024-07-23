const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Flips a coin!'),
    execute({client, interaction}) {
        interaction.reply({content: `${Math.random() < 0.5 ? 'Heads' : 'Tails'}`})
    }
}