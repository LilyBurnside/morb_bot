const Discord = require("discord.js")
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
})

client.on("ready", () => {
    console.log(`${client.user.tag} is logged in`)
})

client.on("message", msg => {

    if (msg.content.includes('spiderman') || msg.content.includes('spidey')) {
        msg.channel.send({files: ['./spiderman.png'] })
    }

    if (msg.content.includes('morb')) {
        msg.channel.send({files: ['./its-morbin-time.webp']})
    }

})

client.login(process.env.TOKEN)