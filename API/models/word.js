'use strict';
module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define('Word', {
    value: DataTypes.STRING,
    idLanguage: DataTypes.INTEGER
  }, {});
  Word.associate = function(models) {
    Word.belongsTo(models.Language);
  };
  return Word;
};