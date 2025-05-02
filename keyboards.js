const { Keyboard, InlineKeyboard } = require("grammy");
const { TOPICS } = require("./constants");

// Создание стартовой клавиатуры
const startKeyboard = new Keyboard()
  .text("HTML")
  .text("CSS")
  .row()
  .text("JavaScript")
  .text("React")
  .row()
  .text("Случайный вопрос")
  .resized();

/**
 * Создаёт инлайн-клавиатуру для вопроса.
 * @param {Object} question - Объект вопроса.
 * @param {string} topic - Тема вопроса.
 * @returns {InlineKeyboard} Инлайн-клавиатура.
 */
const createInlineKeyboard = (question, topic) => {
  if (!question.hasOptions) {
    return new InlineKeyboard().text(
      "Узнать ответ",
      JSON.stringify({ type: topic, questionId: question.id })
    );
  }

  return InlineKeyboard.from(
    question.options.map((option) => [
      InlineKeyboard.text(
        option.text,
        JSON.stringify({
          type: `${topic}-option`,
          isCorrect: option.isCorrect,
          questionId: question.id,
        })
      ),
    ])
  );
};

module.exports = { startKeyboard, createInlineKeyboard };
