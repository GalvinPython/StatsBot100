const dotenv = require('dotenv');
require('dotenv').config();

dotenv.config({ path: './src/config/keys.env' });

module.exports = {
    discordToken: process.env.TOKEN,
    clientId: process.env.CLIENTID,
    guildId: process.env.GUILDID,
};
