const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Ecuentas",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      cedula: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      grupo: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      zona: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      ingreso: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      tot_habere: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      disponible: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      saldo_pre: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_fian: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      bloqueado: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      dispo_pres: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      dispo_reti: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      dispo_fian: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      fe_upres: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      fe_ureti: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      dispo_p1: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      dispo_p2: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      dispo_p3: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      dispo_p4: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      fianreq: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      clavepers: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      limcuotas: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      tretenc: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      maxmontor: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_apo: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_aho: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      saldo_avo: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      reserva: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      proxret: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      uretpag: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      uapopag: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      retencxc: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      faltapa50: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      pctcancel: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      fecproxret: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      avales: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_apoc: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_ahoc: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      saldo_avoc: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_apor: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      saldo_ahor: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      saldo_avor: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_ahox: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_avox: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      dispo_retv: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      planvivi: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_preg: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      saldo_div: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      rxc_bloq: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      s_cuo_xp: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      frecnom: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      nomina: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      rxc_afav: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
      s_cre_di: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Ecuentas",
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
