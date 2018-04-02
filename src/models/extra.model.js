// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const extra = sequelizeClient.define('extra', {
    name: {
      type: DataTypes.JSON,
      allowNull: false
    },
    desc: {
      type: DataTypes.JSON,
      allowNull: true
    },
    price: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  extra.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return extra;
};
