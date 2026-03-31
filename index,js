import tmi from "tmi.js";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

// Chargement automatique des commandes
const commands = new Map();
const files = fs.readdirSync("./commands");

for (const file of files) {
    const cmd = await import(`./commands/${file}`);
    commands.set(cmd.default.name, cmd.default);
}

const client = new tmi.Client({
    identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.OAUTH_TOKEN
    },
    channels: [ process.env.CHANNEL ]
});

client.connect();

client.on("message", (channel, tags, message, self) => {
    if (self) return;

    if (!message.startsWith("!")) return;

    const args = message.slice(1).split(" ");
    const cmdName = args.shift().toLowerCase();

    if (commands.has(cmdName)) {
        commands.get(cmdName).execute(client, channel, tags, args);
    }
});
