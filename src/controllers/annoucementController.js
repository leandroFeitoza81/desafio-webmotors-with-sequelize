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
      return res.status(400).json({ message: announcement.error });
    }
    res.status(201).json(announcement);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Erro Interno' });
  }
};

const updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;

    const updated = await Service.updateAnnouncement(
      id,
      marca,
      modelo,
      versao,
      ano,
      quilometragem,
      observacao,
    );

    if (updated.error) {
      return res.status(400).json({ message: updated.error });
    }
    return res.status(200).json(updated);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro Interno' });
  }
};

const getAnnouncementByID = async (req, res) => {
  try {
    const { id } = req.params;
    const annoucement = await Service.getAnnouncementByID(id);
    if (annoucement.error) {
      return res.status(404).json({ message: annoucement.error });
    }

    res.status(200).json(annoucement);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro interno.' });
  }
};

const removeAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Service.removeAnnouncement(id);
    if (deleted.error) {
      return res.status(404).json({ message: deleted.error });
    }

    res.status(204).json(deleted);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro interno.' });
  }
};

module.exports = {
  listAllAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  getAnnouncementByID,
  removeAnnouncement,
};
