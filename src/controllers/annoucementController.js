const Service = require('../services/annoucementService');
const { tb_AnuncioWebmotors } = require('../models');

const listAllAnnouncements = async (req, res) => {
  try {
    const allAnnouncements = await tb_AnuncioWebmotors.findAll();

    res.status(200).json(allAnnouncements);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erro Interno' });
  }
};

const createAnnouncement = async (req, res) => {
  try {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;
    const announcement = await Service.createAnnouncement(
      marca,
      modelo,
      versao,
      ano,
      quilometragem,
      observacao,
    );

    if (announcement.error) {
      return res.status(400).json(announcement.error);
    }
    res.status(201).json(announcement);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Erro Interno' });
  }
};

module.exports = {
  listAllAnnouncements,
  createAnnouncement,
};
