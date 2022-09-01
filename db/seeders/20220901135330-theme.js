'use strict';

module.exports = {
  async up(queryInterface) {
    const themes = ['Вопросы про рысей', 'Вопросы ради вопросов', 'Угадай преподавателя'];
    const ready = themes.map((theme) => ({
      title: theme,
      createdAt: new Date(),
      updatedAt: new Date()
    }));
    await queryInterface.bulkInsert('Themes', ready);


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
    await queryInterface.bulkDelete('Themes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
