import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/keys.env` });

module.exports = {
    discordToken: process.env.TOKEN,
    clientId: process.env.CLIENTID,
    guildId: process.env.GUILDID,
};
