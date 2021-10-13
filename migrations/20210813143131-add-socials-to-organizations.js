'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.addColumn('orgatizations',"facebookUrl" ,{ type: Sequelize.STRING, default: "" });
    await queryInterface.addColumn('orgatizations',"linkedInUrl" ,{ type: Sequelize.STRING, default: "" });
    await queryInterface.addColumn('orgatizations',"instagramUrl" ,{ type: Sequelize.STRING, default: "" });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orgatizations',"facebookUrl");
    await queryInterface.removeColumn('orgatizations',"linkedInUrl");
    await queryInterface.removeColumn('orgatizations',"instagramUrl");
  }
};
