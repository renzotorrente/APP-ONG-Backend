'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      'activities',
      [
        {
          name: 'Bernardo septimo',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim venenatis diam, in accumsan velit consectetur et. Donec sodales, mauris a mollis consectetur, lacus mauris pulvinar tortor, vitae suscipit est libero nec sem. Phasellus feugiat at magna ac tempor. Cras vitae interdum neque. Fusce sagittis diam et velit tristique iaculis. Donec id urna et orci placerat accumsan. Aliquam erat volutpat. Nam eu consequat odio. Proin sodales dolor eu consequat aliquet.',
          image: 'https://alkemy-ong.s3.amazonaws.com/categories/Bernardoseptimo2021-08-27T05:16:10-03:00',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          name: 'Bernardo octabus',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim venenatis diam, in accumsan velit consectetur et. Donec sodales, mauris a mollis consectetur, lacus mauris pulvinar tortor, vitae suscipit est libero nec sem. Phasellus feugiat at magna ac tempor. Cras vitae interdum neque. Fusce sagittis diam et velit tristique iaculis. Donec id urna et orci placerat accumsan. Aliquam erat volutpat. Nam eu consequat odio. Proin sodales dolor eu consequat aliquet.',
          image: 'https://alkemy-ong.s3.amazonaws.com/categories/Bernardooctabus2021-08-27T05:16:10-03:00',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
