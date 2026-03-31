export default {
    name: "hello",
    execute(client, channel, tags) {
        client.say(channel, `Salut ${tags.username} !`);
    }
};
