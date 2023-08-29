const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Broadcasts a message in the channel as StatsBot100')
        .addStringOption(option => option.setName('message').setDescription('The message to be sent').setRequired(true))
        .addBooleanOption(option => option.setName('embed').setDescription('Say what you want in an embed')),
    async execute(interaction) {
        const message = interaction.options.getString('message');
        const wantsEmbed = interaction.options.getBoolean('embed');
        const channelId = interaction.channelId;

        if (wantsEmbed) {
            const responseEmbed = new EmbedBuilder()
                .setDescription(message);
            await interaction.client.channels.cache.get(channelId).send({ embeds: [responseEmbed] });
        } else {
            await interaction.client.channels.cache.get(channelId).send(message);
        }

        await interaction.reply({ content: 'Message sent!', ephemeral: true });
    },
};
