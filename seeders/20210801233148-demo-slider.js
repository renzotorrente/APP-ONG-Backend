'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Sliders',
      [
        {
          imageUrl: 'https://alkemy-ong.s3.amazonaws.com/sliders/firstslider2021-08-27T05:16:10-03:00',
          text: 'ONG',
          order: 1,
          organizationId: 1,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          imageUrl: 'https://alkemy-ong.s3.amazonaws.com/sliders/secondslider2021-08-27T05:16:10-03:00',
          text: 'ONG 2',
          order: 2,
          organizationId: 1,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        },
        {
          imageUrl: 'https://alkemy-ong.s3.amazonaws.com/sliders/thirdslider2021-08-27T05:16:10-03:00',
          text: 'ONG 3',
          order: 3,
          organizationId: 1,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now()),
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sliders', null, {})
  }
};
