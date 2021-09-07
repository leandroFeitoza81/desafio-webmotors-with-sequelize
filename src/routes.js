const router = require('express').Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger_outupt.json');
const announcementController = require('./controllers/annoucementController');

router.use('/docs', swaggerUi.serve);
router.get(
  '/docs',
  swaggerUi.setup(swaggerDocument),
  // #swagger.tags = ['documentation']
  // #swagger.description = 'Endpoint que contém a documentação desta API.'
);

router.get('/anuncios/:id', announcementController.getAnnouncementByID);
router.put('/anuncios/:id', announcementController.updateAnnouncement);
router.delete('/anuncios/:id', announcementController.removeAnnouncement);
router.get('/anuncios', announcementController.listAllAnnouncements);
router.post('/anuncios', announcementController.createAnnouncement);

module.exports = router;
