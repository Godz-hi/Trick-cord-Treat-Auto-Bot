const Discord = require("discord.js-selfbot");
const sleep = require('sleep');
const randomWords = require("random-words");
const randomMillisecond = require('random-millisecond');

const trim = (str, max) =>
  str.length > max ? `${str.slice(0, max - 3)}...` : str;

const client = new Discord.Client();
const config = require("./config.json");

client.on("error", console.error);

client.on("ready", () => {
  console.log(
    `Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  );
/*
  setInterval(function() {
    const server = client.guilds.cache.get("637741159904706570")
    var channel = server.channels.cache.get("637742780797681664")
    
    randomWords({ min: 2, max: 4}).forEach(wordsss => {
      channel.send(wordsss)
    })
  }, 100000)
*/
})
  
client.on("message", async message => {
  if (message.channel.type === 'dm') return;
  
  if(message.author.id === "755580145078632508" && message.embeds[0].title === "A trick-or-treater has stopped by!") {
    var n = message.embeds[0].description.split(" ")
    var p = n.pop()
    message.channel.send(p)
  }
});

client.login(config.token);
