const router = require('express').Router();
const announcementController = require('./controllers/annoucementController');

router.get('/anuncios', announcementController.listAllAnnouncements);
router.post('/anuncios', announcementController.createAnnouncement);

module.exports = router;
