'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnailUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    viewer: DataTypes.NUMBER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  Video.associate = function(models) {
    this.Likers = Video.belongsToMany(models.User, { through: 'Likes' });
    this.Dislikers = Video.belongsToMany(models.User, { through: 'Dislikes' });
  };
  return Video;
};
