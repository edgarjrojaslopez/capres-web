var DataTypes = require("sequelize").DataTypes;
var _ecuentas = require("./ecuentas");
var _profiles = require("./profiles");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var ecuentas = _ecuentas(sequelize, DataTypes);
  var profiles = _profiles(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);


  return {
    ecuentas,
    profiles,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
