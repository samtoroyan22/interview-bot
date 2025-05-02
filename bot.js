const { Bot } = require("grammy");
const { startKeyboard } = require("./keyboards");
const { getRandomQuestions, getCorrectAnswer } = require("./utils");
const { TOPICS } = require("./constants");
const { createInlineKeyboard } = require("./keyboards");

const bot = new Bot(process.env.BOT_API_KEY);

// Middleware для нормализации текста
bot.use((ctx, next) => {
  if (ctx.message?.text) {
    ctx.message.text = ctx.message.text.toLowerCase();
  }
  return next();
});

// Команда /start
bot.command("start", async (ctx) => {
  await ctx.reply(
    "Привет! Я - Frontend Interview Bot 🤖\nЯ помогу тебе подготовиться к интервью по фронтенду"
  );
  await ctx.reply("С чего начнем? Выбери тему вопроса", {
    reply_markup: startKeyboard,
  });
});

// Обработка выбора темы
bot.hears(TOPICS, async (ctx) => {
  const topic = ctx.message.text;
  try {
    const { question, questionTopic } = getRandomQuestions(topic);
    const inlineKeyboard = createInlineKeyboard(question, questionTopic);
    await ctx.reply(question.text, { reply_markup: inlineKeyboard });
  } catch (e) {
    await ctx.reply("Ошибка при выборе вопроса. Попробуйте снова!");
    console.error("Error in topic handler:", e);
  }
});

// Обработка callback-запросов
bot.on("callback_query:data", async (ctx) => {
  let callbackData;
  try {
    callbackData = JSON.parse(ctx.callbackQuery.data);
  } catch (e) {
    await ctx.reply("Ошибка обработки ответа. Попробуйте снова.");
    await ctx.answerCallbackQuery();
    return;
  }

  const topic = callbackData.type.split("-")[0];
  try {
    const answer = getCorrectAnswer(topic, callbackData.questionId);

    if (callbackData.type.includes("option")) {
      if (callbackData.isCorrect) {
        await ctx.reply("Верно! ✅");
      } else {
        await ctx.reply(`Неверно! ❌ Правильный ответ: ${answer}`);
      }
    } else {
      await ctx.reply(answer, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
      });
    }
  } catch (e) {
    await ctx.reply("Ошибка при получении ответа. Попробуйте снова!");
    console.error("Error in callback handler:", e);
  }

  await ctx.answerCallbackQuery();
});

// Глобальная обработка ошибок
bot.catch((err) => {
  const ctx = err.ctx;
  console.error(
    `Error while handling update ${ctx.update.update_id}:`,
    err.error
  );
  if (ctx) {
    ctx.reply("Произошла ошибка. Попробуйте позже!");
  }
});

module.exports = { bot };
