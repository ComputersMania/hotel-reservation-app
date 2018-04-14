// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const roles = require('../services/users/roles')

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },



    googleId: { type: Sequelize.STRING },

    facebookId: { type: Sequelize.STRING },

    // Role management

    role: {
      type: DataTypes.STRING(15),
      allowNull: false
    }

  }, {
    getterMethods: {
      ability() {
        if (roles[ this.role ]) {
          return roles[this.role]({
            user: this
          })
        } else {
          return roles.anonymous({
            user: this
          })
        }
      }
    },

    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
