const { tb_AnuncioWebmotors } = require('../models');

const listAllAnnouncements = async (req, res) => {
  try {
    const allAnnouncements = await tb_AnuncioWebmotors.findAll();
    // console.log(allAnnouncements);
    res.status(200).json(allAnnouncements);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erro Interno' });
  }
};

const createAnnouncement = async (req, res) => {
  try {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
    const announcement = await tb_AnuncioWebmotors.create({
      marca,
      modelo,
      versao,
      ano,
      quilometragem,
      observacao,
    });
    res.status(201).json(announcement);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erro Interno' });
  }
};

module.exports = {
  listAllAnnouncements,
  createAnnouncement,
};
