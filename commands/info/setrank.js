const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "setrank",
  aliases: [],
  description: "Ranks the user in  the Roblox group to the specified rank number or name.",
  usage: "!setrank <user> <rank name/number>",
  run: async (client, message, args) => {
    //Start
    message.delete();

  }
};