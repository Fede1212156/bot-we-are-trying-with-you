const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "shout",
  aliases: [],
  description: "Posts a group shout.",
  usage: "!shout <msg>",
  run: async (client, message, args) => {
    //Start
    message.delete();

  }
};