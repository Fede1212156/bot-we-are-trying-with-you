const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "deny-join",
  aliases: [],
  description: "Denies a user's join request.",
  usage: "!accept-join <user>",
  run: async (client, message, args) => {
    //Start
    message.delete();

  }
};