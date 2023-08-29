const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prune')
        .setDescription('Delete a set number of messages')
        .addNumberOption(option => option.setName('number').setDescription('Number of messages to delete').setRequired(true)),
    async execute(interaction) {
        const responseEmbed = new EmbedBuilder()
            .setColor(0xff0000)
            .setTitle('WIP')
            .setDescription('Command **/prune** is currently being developed. It is currently unavailable');
        await interaction.reply({ embeds: [responseEmbed] });
    },
};
