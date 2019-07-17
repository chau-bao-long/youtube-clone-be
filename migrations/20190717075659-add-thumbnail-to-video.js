'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Videos', 'thumbnailUrl', {
        type: Sequelize.STRING,
        allowNull: false,
      }, { after: 'url' }),
      queryInterface.changeColumn('Videos', 'url', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Videos', 'thumbnailUrl');
  }
};
