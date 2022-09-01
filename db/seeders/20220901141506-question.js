'use strict';

module.exports = {
  async up(queryInterface) {
    const questions = [
      { question: 'Что в переводе со старославянского означает "Рысь"?', answer: 'Рыжий', theme_id: 1 },
      { question: 'Какое животное составляет основу рациона рыси?', answer: 'Заяц-беляк', theme_id: 1 },
      { question: 'Что означает привычка рыси бодаться лбами со своими сородичами?', answer: 'Приветствие', theme_id: 1 },
      { question: 'Чем выделяются уши рыси?', answer: 'Кисточками', theme_id: 1 },
      { question: 'На гербе какого города изображена рысь?', answer: 'Гомель', theme_id: 1 },
      { question: 'Чай или кофе? ', answer: 'Кофе', theme_id: 2 },
      { question: 'Арбуз или дыня? ', answer: 'Дыня', theme_id: 2 },
      { question: 'Собаки или кошки? ', answer: 'Кошки', theme_id: 2 },
      { question: 'Карен или Виталя? ', answer: 'Неверно, все хороши', theme_id: 2 },
      { question: 'Макбук или Убунта? ', answer: 'Винда', theme_id: 2 },
      { question: 'Кто на лекциях когда задумывается произносит "Пам-пам-пам" ', answer: 'Лена', theme_id: 3 },
      { question: 'Кто говорит: "Я вам сейчай покажу, но так делать не надо.."', answer: 'Леха', theme_id: 3 },
      { question: 'Кто любит розовое полусладкое?', answer: 'Аня', theme_id: 3 },
      { question: 'Кто самый высокий?', answer: 'Толя', theme_id: 3 },
      { question: 'Кто большой полконник игровыз приставок?', answer: 'Артем', theme_id: 3 }
    ];
    const ready = questions.map(question => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    await queryInterface.bulkInsert('Questions', ready);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
