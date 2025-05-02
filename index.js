require("dotenv").config();
const { bot } = require("./bot");

// Запуск бота
bot.start().catch((err) => {
  console.error("Failed to start bot:", err);
});
