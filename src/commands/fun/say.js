const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Broadcasts a message in the channel as StatsBot100')
        .addStringOption(option => option.setName('message').setDescription('The message to be sent').setRequired(true)),
    async execute(interaction) {
        const message = interaction.options.getString('message');
        const channelId = interaction.channelId;
        await interaction.client.channels.cache.get(channelId).send(message);
        await interaction.reply({ content: 'Message sent!', ephemeral: true });
    },
};
