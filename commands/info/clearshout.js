const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "clearshout",
  aliases: [],
  description: "Clears the group shout.",
  usage: "!shout <msg>",
  run: async (client, message, args) => {
    //Start
    message.delete();

  }
};