'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Videos', [
      {
        title: 'Interstellar | Beautiful Chillstep Mix',
        author: 'BLUME',
        url: 'https://youtu.be/eLeIJtLebZk',
        thumbnailUrl: "https://i.ytimg.com/vi/ip0FF89-7eU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIRCGAFwAYABAQ==&rs=AOn4CLD12H847gR5FSqXtcDqUYmIMT-EHg",
        viewer: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Interstellar | Beautiful Chillstep Mix',
        author: 'BLUME',
        url: 'https://youtu.be/eLeIJtLebZk',
        thumbnailUrl: "https://i.ytimg.com/vi/rX9CUupXOuI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIRCGAFwAYABAQ==&rs=AOn4CLDWqBTA30wnglHMNw9TYuNYK4mCeQ",
        viewer: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Videos', null, {});
  }
};
