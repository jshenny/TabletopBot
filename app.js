const { Client, GatewayIntentBits } = require('discord.js');
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    console.log(`New message in ${message.channel.name} from ${message.author.tag}: ${message.content}`);
    if (message.author.bot) return;

    if (message.content === 'ping') { //read messages
        message.channel.send('pong');
    }
});

client.login(process.env.DISCORD_TOKEN);