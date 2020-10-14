const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "accept-join",
  aliases: [],
  description: "Accepts a user's join request.",
  usage: "!accept-join <user>",
  run: async (client, message, args) => {
    //Start
    message.delete();

  }
};