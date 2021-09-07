const router = require('express').Router();
const announcementController = require('./controllers/annoucementController');

router.get('/anuncios', announcementController.listAllAnnouncements);
router.post('/anuncios', announcementController.createAnnouncement);
router.put('/anuncios/:id', announcementController.updateAnnouncement);

module.exports = router;
