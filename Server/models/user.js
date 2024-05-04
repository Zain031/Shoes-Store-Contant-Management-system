'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product, {
        foreignKey: "authorId"
      })
    }
  }
  User.init({
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true,
      validate: {
        notNull: {
          msg: "Please input Email!"
        },
        notEmpty: {
          msg: "Please Input Email"
        },
        isEmail: {
          msg: "Email must be in email format"
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: " Please input Password!"
        },
        notEmpty: {
          msg: "Please Input Password"
        }
      },
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(user) {
        user.role = "Staff"
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};