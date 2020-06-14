'use strict';
module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define('Language', {
    value: DataTypes.STRING,
    abbreviation: DateTypes.STRING
  }, {});
  Language.associate = function(models) {
    // associations can be defined here
  };
  return Language;
};