export default {
    name: "ping",
    execute(client, channel) {
        client.say(channel, "Pong !");
    }
};
