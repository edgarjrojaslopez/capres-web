const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Profiles",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cedula: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      unidad: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      telf_oficina: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      telf_habitacion: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      region: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      cargo: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      grado: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      sueldo: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      banco: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      cuenta: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      porcentaje: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      procesado: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      capres_procesado: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
      capres_user: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      capres_fecha: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Profiles",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
