const anuncioWebmotors = (sequelize, DataTypes) => {
  const tb_AnuncioWebmotors = sequelize.define('tb_AnuncioWebmotors', {
    marca: DataTypes.STRING(45),
    modelo: DataTypes.STRING(45),
    versao: DataTypes.STRING(45),
    ano: DataTypes.INTEGER,
    quilometragem: DataTypes.INTEGER,
    observacao: DataTypes.TEXT,
  });

  return tb_AnuncioWebmotors;
};

module.exports = anuncioWebmotors;
