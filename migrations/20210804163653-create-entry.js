'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('entries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        allowNull:false,
        type: Sequelize.STRING
      },
       name: {
         allowNull: false,
         type: Sequelize.STRING
       },
      image: {
        allowNull:false,
        type: Sequelize.STRING
      },
      type: {
        allowNull:false,
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Category',
          key: 'id'
        }
      }
     }, {
       paranoid: true
     });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('entries');
  }
};
