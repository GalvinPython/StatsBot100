# StatsBot100
A Discord bot designed for my server. Currently a work-in-progress.

# Commands
| Command | Description | Implemented |
|---|---|---|
| ping | Check the roundtime latency of the bot | ✅ |
| say | Echo a message as the bot | ✅ |
| info | Replies with info about the bot | ✅ |
| purge | Mass delete messages | ❌ **(WIP)**|

# Changelog
## 0.1 (28/08/2023)
- Initial commit; Just a couple of basic commands
### 0.1.1 (28/08/2023)
- Started Typescript rewrite. `index.js` is now `index.ts`
### 0.1.2 (29/08/2023)
- Integrated `deploy-commands.js` into `client.ts`
- Added **/info** command - responds with information about the bot
- Added embed option to **/say**