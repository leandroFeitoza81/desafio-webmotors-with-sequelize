const router = require('express').Router();
const announcementController = require('./controllers/annoucementController');

router.get('/anuncios/:id', announcementController.getAnnouncementByID);
router.put('/anuncios/:id', announcementController.updateAnnouncement);
router.delete('/anuncios/:id', announcementController.removeAnnouncement);
router.get('/anuncios', announcementController.listAllAnnouncements);
router.post('/anuncios', announcementController.createAnnouncement);

module.exports = router;
