'use strict';
module.exports = (sequelize, DataTypes) => {
  const friends = sequelize.define('friends', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    homeTown: DataTypes.STRING
  },
   {
    freezeTableName: true
   });
  friends.associate = function(models) {
    // associations can be defined here
    
  };
  return friends;
};