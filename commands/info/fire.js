const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "fire",
  aliases: [],
  description: "Moves a user to the lowest rank possible beside Guest.",
  usage: "!fire <user>",
  run: async (client, message, args) => {
    //Start
    message.delete();

  }
};