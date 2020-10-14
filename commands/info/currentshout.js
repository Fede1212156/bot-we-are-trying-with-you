const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "currentshout",
  aliases: [],
  description: "Shows the current group shout.",
  usage: "!shout",
  run: async (client, message, args) => {
    //Start
    message.delete();

  }
};