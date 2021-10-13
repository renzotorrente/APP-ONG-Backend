'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Organization',
      [
        {
          name: 'Bernardo septimo',
          image: 'https://alkemy-ong.s3.amazonaws.com/entries/organization/ong-logo2021-08-27T05:16:10-03:00',
          
          phone: '+54115555555',
          address: '311 Meggie Village Apt. 627 - Woodbury, WI / 78094',
          welcomeText:
            'Bienvenido',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          name: 'Brandon Bell',
          image: 'https://lorempixel.com/g/500/350/animals/',
          phone: '+54115555555',
          address: '311 Meggie Village Apt. 627 - Woodbury, WI / 78094',
          welcomeText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim venenatis diam, in accumsan velit consectetur et. Donec sodales, mauris a mollis consectetur, lacus mauris pulvinar tortor, vitae suscipit est libero nec sem. Phasellus feugiat at magna ac tempor. Cras vitae interdum neque. Fusce sagittis diam et velit tristique iaculis. Donec id urna et orci placerat accumsan. Aliquam erat volutpat. Nam eu consequat odio. Proin sodales dolor eu consequat aliquet.',
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Organization', null, {})
  },
}
