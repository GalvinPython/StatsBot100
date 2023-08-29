const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Replies with information about the bot'),
    async execute(interaction) {
        const responseEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('StatsBot100')
            .setURL('https://github.com/galvinpython/statsbot100')
            .setDescription('Information about the bot')
            .addFields({
                    name: 'Version',
                    value: '0.1.3 (BETA)',
                    inline: true,
                },
                {
                    name: 'Last Updated',
                    value: '29/08/2023',
                    inline: true,
                })
            .setTimestamp()
            .setFooter({
                text: 'StatsBot100',
                iconURL: 'https://cdn.discordapp.com/avatars/1102594602290118686/0a3ca1d4f2c9ef7302731a14a9fe02e3.webp?size=256',
            });
        await interaction.reply({ embeds: [responseEmbed] });
    },
};
