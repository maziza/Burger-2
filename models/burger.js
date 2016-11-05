module.exports = function (sequelize, DataTypes) {

    var burgers1 = sequelize.define('burgers', {
            burger_name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }

        },

        {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Burger;