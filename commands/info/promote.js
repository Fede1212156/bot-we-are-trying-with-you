const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "promote",
  aliases: [],
  description: "Moves the user 1 rank up in the roblox group!",
  usage: "!promote <user>",
  run: async (client, message, args) => {
    //Start
    message.delete();

  }
};