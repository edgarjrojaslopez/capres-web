const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Usuarios",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: "",
      },
      username: {
        type: DataTypes.STRING(150),
        allowNull: false,
        defaultValue: "",
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: "",
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: "",
      },
      usertype: {
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: "",
      },
      block: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      sendEmail: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
      registerDate: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: "0000-00-00 00:00:00",
      },
      lastvisitDate: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: "0000-00-00 00:00:00",
      },
      activation: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: "",
      },
      params: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      lastResetTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: "0000-00-00 00:00:00",
        comment: "Date of last password reset",
      },
      resetCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: "Count of password resets since lastResetTime",
      },
    },
    {
      sequelize,
      tableName: "Usuarios",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "usertype",
          using: "BTREE",
          fields: [{ name: "usertype" }],
        },
        {
          name: "idx_name",
          using: "BTREE",
          fields: [{ name: "name" }],
        },
        {
          name: "idx_block",
          using: "BTREE",
          fields: [{ name: "block" }],
        },
        {
          name: "username",
          using: "BTREE",
          fields: [{ name: "username" }],
        },
        {
          name: "email",
          using: "BTREE",
          fields: [{ name: "email" }],
        },
      ],
    }
  );
};
