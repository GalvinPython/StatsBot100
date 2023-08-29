const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Replies with information about the bot'),
    async execute(interaction) {
        const responseEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Info')
            .setDescription('Information about the bot')
            .addFields(
                {
                    name: 'Version',
                    value: '0.1.2 (BETA)',
                    inline: true,
                },
            );
        await interaction.reply({ embeds: [responseEmbed] });
    },
};
