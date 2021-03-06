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

const updateAnnouncement = async (id, marca, modelo, versao, ano, quilometragem, observacao) => {
  const foundAnnouncement = await tb_AnuncioWebmotors.findByPk(id);
  if (!foundAnnouncement) {
    return { error: 'Id inválido ou não existe na base de dados.' };
  }

  const resultSave = await foundAnnouncement.save([
    (foundAnnouncement.id = id),
    (foundAnnouncement.marca = marca),
    (foundAnnouncement.modelo = modelo),
    (foundAnnouncement.versao = versao),
    (foundAnnouncement.ano = ano),
    (foundAnnouncement.quilometragem = quilometragem),
    (foundAnnouncement.observacao = observacao),
  ]);

  return resultSave;
};

const getAnnouncementByID = async (id) => {
  const annoucement = await tb_AnuncioWebmotors.findByPk(id);

  if (!annoucement) {
    return { error: 'Anúncio não encontrado.' };
  }
  return annoucement.dataValues;
};

const removeAnnouncement = async (id) => {
  const deleted = await tb_AnuncioWebmotors.destroy({ where: { id } });
  if (deleted === 0) {
    return { error: 'Erro' };
  }
  return deleted;
};

module.exports = {
  createAnnouncement,
  updateAnnouncement,
  getAnnouncementByID,
  removeAnnouncement,
};
