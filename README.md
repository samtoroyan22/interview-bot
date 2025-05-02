# Frontend Interview Bot

This is a Telegram bot built with Node.js and the Grammy library, designed to help users prepare for front-end development interviews. The bot provides random questions on HTML, CSS, JavaScript, and React, with options to select answers or view correct responses.

## Features

- Select a topic (HTML, CSS, JavaScript, React) or get a random question.
- Questions with multiple-choice options or open-ended answers.
- Interactive keyboard and inline buttons for user input.
- Feedback on correct/incorrect answers with explanations.
- Error handling for robust operation.

## Setup and Installation

### Prerequisites

To run this project, you need to have the following installed:

- Node.js (v16 or higher)
- npm (Node Package Manager)
- A Telegram bot token from [BotFather](https://t.me/BotFather)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/frontend-interview-bot.git
   cd frontend-interview-bot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your bot token:
   ```
   BOT_API_KEY=your_bot_token_here
   ```
4. Run the bot locally:
   ```bash
   npm start
   ```
5. For deployment, follow the instructions below to set up webhooks and host on a platform like Render or Vercel.

## Technologies Used

- Node.js
- Grammy (Telegram Bot Framework)
- JavaScript
- dotenv (for environment variables)

## Project Structure

```
├── index.js            # Entry point for the bot
├── bot.js             # Core bot logic (commands, handlers)
├── keyboards.js       # Keyboard and inline button generation
├── utils.js           # Utilities for question handling
├── constants.js       # Constants (e.g., topics)
├── questions.json     # Question database
├── package.json       # Project dependencies and scripts
├── .env               # Environment variables (not tracked)
```

## License

This project is licensed under the MIT License. Copyright (c) [2025] [Sam Toroyan]

---

# Frontend Interview Bot (Фронтенд-бот для собеседований)

Это Telegram-бот, созданный с использованием Node.js и библиотеки Grammy, предназначенный для подготовки к собеседованиям по фронтенд-разработке. Бот предлагает случайные вопросы по HTML, CSS, JavaScript и React с возможностью выбора ответов или просмотра правильных ответов.

## Особенности

- Выбор темы (HTML, CSS, JavaScript, React) или случайный вопрос.
- Вопросы с вариантами ответов или открытым форматом.
- Интерактивная клавиатура и встроенные кнопки для взаимодействия.
- Обратная связь по правильным/неправильным ответам с пояснениями.
- Обработка ошибок для стабильной работы.

## Установка и настройка

### Требования

Для запуска проекта необходимо установить:

- Node.js (версия 16 или выше)
- npm (менеджер пакетов для Node.js)
- Токен Telegram-бота от [BotFather](https://t.me/BotFather)

### Шаги

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/your-username/frontend-interview-bot.git
   cd frontend-interview-bot
   ```
2. Установить зависимости:
   ```bash
   npm install
   ```
3. Создать файл `.env` в корневой папке и добавить токен бота:
   ```
   BOT_API_KEY=ваш_токен_бота
   ```
4. Запустить бот локально:
   ```bash
   npm start
   ```
5. Для деплоя следуйте инструкциям ниже, чтобы настроить вебхуки и разместить бот на платформе, например, Render или Vercel.

## Используемые технологии

- Node.js
- Grammy (фреймворк для Telegram-ботов)
- JavaScript
- dotenv (для работы с переменными окружения)

## Структура проекта

```
├── index.js            # Точка входа для бота
├── bot.js             # Основная логика бота (команды, обработчики)
├── keyboards.js       # Генерация клавиатур и встроенных кнопок
├── utils.js           # Утилиты для работы с вопросами
├── constants.js       # Константы (например, темы)
├── questions.json     # База вопросов
├── package.json       # Зависимости и скрипты проекта
├── .env               # Переменные окружения (не отслеживается)
```

## Лицензия

Этот проект лицензирован под лицензией MIT. Copyright (c) [2025] [Sam Toroyan]
