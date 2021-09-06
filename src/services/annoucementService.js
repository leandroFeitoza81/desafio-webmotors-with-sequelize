const { tb_AnuncioWebmotors } = require('../models');

const createAnnouncement = async (marca, modelo, versao, ano, quilometragem, observacao) => {
  if (!marca || !modelo || !versao || !ano || !quilometragem || !observacao) {
    return { error: 'Campo inválido ou não preenchido.' };
  }
  const created = await tb_AnuncioWebmotors.create({
    marca,
    modelo,
    versao,
    ano,
    quilometragem,
    observacao,
  });
  return created;
};

module.exports = { createAnnouncement };
