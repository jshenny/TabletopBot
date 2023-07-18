const { Client, GatewayIntentBits } = require('discord.js');
require("dotenv").config();

const WebSocket = require('ws');

const ws = new WebSocket("ws://localhost:8080");

ws.addEventListener("open", () => {
    console.log("We are connected");
});

ws.addEventListener('message', function (event) {
    console.log(event.data);
});

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

    var username = message.author.tag.split('#')[0]
    var content = {
        "username": username,
        "channel": message.channel.name,
        "content": message.content
    }

    ws.send(JSON.stringify(content))

    if (message.content === 'ping') { //read messages
        message.channel.send('pong');
    }
});

client.login(process.env.DISCORD_TOKEN);

